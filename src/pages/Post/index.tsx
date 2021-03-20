import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';

import { postType, getPost } from '../../container/post';

import PostInfo from '../../components/PostInfo';

import { PostPage, PostImage, PostInfoBox, Btn, PostContent } from './style';

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
      {post ? (
        <>
          <PostImage />
          <PostInfoBox>
            <PostInfo post={post} />
            <Btn>나누기 참여하기</Btn>
          </PostInfoBox>
          <PostContent>{post.content}</PostContent>
        </>
      ) : (
        <div>스켈레톤 제작 예정 ...</div>
      )}
    </PostPage>
  );
}
Post.defaultProps = { propsPost: undefined };

export default Post;
