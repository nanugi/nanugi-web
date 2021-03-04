import React, { useCallback, useEffect, useState } from 'react';

import { postType, getPosts, getPostsRes } from '../../container/post';

import { MainPage, Title } from './style';

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
    <MainPage>
      <Title>%</Title>
      <ul
        style={{ height: '50vh', overflow: 'auto' }}
        onScroll={(e: React.UIEvent<HTMLUListElement, UIEvent>) => {
          const { offsetHeight, scrollHeight, scrollTop } = e.currentTarget;
          if (offsetHeight + scrollTop >= scrollHeight) {
            nextPage();
          }
        }}
      >
        {posts.map((post) => (
          <li key={post.post_id}>
            <div>{post.post_id}</div>
            <div>{post.chatUrl}</div>
            <div>{post.content}</div>
          </li>
        ))}
      </ul>
    </MainPage>
  );
}

export default Main;
