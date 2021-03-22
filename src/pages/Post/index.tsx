import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { postType, getPost } from '../../container/post';

import { PostInfo } from '../../components/PostInfo';

import { PostPage, PostImage, PostInfoBox, Btn, PostContent } from './style';

function Post() {
  const [post, setPost] = useState<postType>();
  const { id: stringId } = useParams<{ id: string }>();

  useEffect(() => {
    // console.log('useEffect');
    const id = Number(stringId);
    const init = async () => {
      const res = await getPost(id);
      if (res?.success) setPost(res.data);
    };

    init();
  }, [post, stringId]);

  // console.log('post', post?._close);

  return (
    <PostPage>
      {post ? (
        <>
          <PostImage />
          <PostInfoBox>
            <PostInfo
              post={{
                _close: post._close,
                maxParti: post.detail.maxParti,
                minParti: post.detail.minParti,
                nanumPrice: post.detail.nanumPrice,
                post_id: post.post_id,
                title: post.title,
                createdAt: post.createdAt,
                nickname: post.user.nickname,
              }}
            />
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
