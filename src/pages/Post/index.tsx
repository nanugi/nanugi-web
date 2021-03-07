import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';

import history from '../../utils/browserHistory';

import { postType, getPost } from '../../container/post';

import {
  PostPage,
  PostImage,
  PostListLink,
  PostBox,
  PostInfoBox,
  PostInfo,
  PostInfoTitle,
  PostInfoText,
  Temp,
} from './style';

function Post({
  location,
}: RouteComponentProps<{}, any, { propsPost: postType }>) {
  const propsPost = location.state?.propsPost;
  const { id: stringId } = useParams<{ id: string }>();

  // console.log('propsPost', propsPost);
  const [post, setPost] = useState(propsPost);

  useEffect(() => {
    // console.log('useEffect');
    const id = Number(stringId);
    const init = async () => {
      const res = await getPost(id);
      if (res?.success) setPost(res.data);
    };

    if (!post || post.post_id !== id) init();
  }, [post, stringId]);

  // console.log('post', post);

  return (
    <PostPage>
      <PostBox>
        <PostListLink onClick={() => history.push('/main')}>
          뒤로가기
        </PostListLink>
        {post ? (
          <>
            <PostInfoBox>
              <PostImage />
              <PostInfo>
                <PostInfoTitle>{post.title}</PostInfoTitle>
                <PostInfoText>{post.price}</PostInfoText>
                <PostInfoText>{post.content}</PostInfoText>
                <PostInfoText>{post.chatUrl}</PostInfoText>
                <PostInfoText>{post.nanumPrice}</PostInfoText>
                <PostInfoText>{post.user.name}</PostInfoText>
                <PostInfoText>
                  {post.minParti} ~ {post.maxParti}명
                </PostInfoText>
                <PostInfoText>{post.createdAt}</PostInfoText>
              </PostInfo>
            </PostInfoBox>
            <Temp>추가 컨텐츠 ...</Temp>
          </>
        ) : (
          <div>스켈레톤 제작 예정 ...</div>
        )}
      </PostBox>
    </PostPage>
  );
}
Post.defaultProps = { propsPost: undefined };

export default Post;
