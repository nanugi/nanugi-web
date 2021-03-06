import React, { useCallback, useEffect, useState } from 'react';
import history from '../../utils/browserHistory';

import { postType, getPosts, getPostsRes } from '../../container/post';

import {
  MainPage,
  Title,
  PostUl,
  PostLi,
  PostBox,
  PostTitle,
  PostInfo,
  PostImage,
} from './style';

function Main() {
  const [posts, setPosts] = useState<postType[]>([]);
  const [currentPageInfo, setCurrentPageInfo] = useState<getPostsRes>();

  const nextPage = useCallback(async () => {
    if (!currentPageInfo?.data.next) {
      // alert('[nextPage] next가 null 임!');
      return;
    }

    const res = await getPosts(currentPageInfo.data.page + 1);
    if (res?.success) {
      const alreadyImportedPosts_id = currentPageInfo.data.posts.map(
        (post) => post.post_id,
      );
      const newPosts = res.data.posts.filter(
        (post) => !alreadyImportedPosts_id.includes(post.post_id),
      );

      setPosts([...posts, ...newPosts]);
      setCurrentPageInfo({ data: res.data });
    }
    //  else {
    //   alert('[nextPage] 뭔지 모르겠는데 오류!');
    // }
  }, [currentPageInfo, posts]);

  useEffect(() => {
    async function init() {
      const res = await getPosts(1);
      if (res?.success) {
        setPosts(res.data.posts);
        setCurrentPageInfo({ data: res.data });
      }
      //  else {
      //   alert('[init] 뭔지 모르겠는데 오류!');
      // }
    }
    init();
  }, []);

  return (
    <MainPage
      onScroll={(e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const { offsetHeight, scrollHeight, scrollTop } = e.currentTarget;
        if (offsetHeight + scrollTop >= scrollHeight) {
          nextPage();
        }
      }}
    >
      <Title>%</Title>
      <PostUl className="col-4">
        {posts.map((post) => (
          <PostLi key={post.post_id}>
            <PostBox>
              <PostImage
                onClick={() => {
                  history.push({
                    pathname: `/post/${post.post_id}`,
                    state: { propsPost: post },
                  });
                }}
              />
              <PostInfo>
                <PostTitle>{post.title}</PostTitle>
                <div>{post.price}</div>
                <div>{post.content}</div>
                <div>{post.chatUrl}</div>
                {/* <div>{post.nanumPrice}</div> */}
                <div>{post.user.name}</div>
                <div>
                  {post.minParti} ~ {post.maxParti}명
                </div>
                <div>{post.createdAt}</div>
              </PostInfo>
            </PostBox>
          </PostLi>
        ))}
      </PostUl>
    </MainPage>
  );
}

export default Main;
