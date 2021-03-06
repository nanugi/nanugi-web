import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { postType } from '../../container/post';

import { PostPage, PostImage } from './style';

// { propsPost }: { propsPost?: postType }
function Post({
  location,
}: RouteComponentProps<{}, any, { propsPost: postType }>) {
  const propsPost = location.state?.propsPost;

  // console.log('propsPost', propsPost);
  const [post] = useState(propsPost);

  useEffect(() => {
    // console.log('useEffect');
    // if (!post) {
    //   // setPost()
    //   alert('가져오기');
    //   setPost();
    // }
  }, [post]);

  // console.log('post', post);

  return (
    <PostPage>
      {post ? (
        <>
          <PostImage />
          <div>
            <div>{post.title}</div>
            <div>{post.price}</div>
            <div>{post.content}</div>
            <div>{post.chatUrl}</div>
            {/* <div>{post.nanumPrice}</div> */}
            <div>{post.user.name}</div>
            <div>
              {post.minParti} ~ {post.maxParti}명
            </div>
            <div>{post.createdAt}</div>
          </div>
        </>
      ) : (
        <div>스켈레톤 제작 예정..</div>
      )}
    </PostPage>
  );
}
Post.defaultProps = { propsPost: undefined };

export default Post;
