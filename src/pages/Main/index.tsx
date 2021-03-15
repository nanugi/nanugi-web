import React, { useCallback, useEffect, useState } from 'react';
import history from '../../utils/browserHistory';

import { postType, getPosts, getPostsRes } from '../../container/post';

import {
  MainPage,
  PostUl,
  PostLi,
  PostBox,
  PostImage,
  PostInfo,
  PostTitle,
  PostTag,
  PostInfoKey,
  PostInfoKeyValueBox,
} from './style';

function Main() {
  const [posts, setPosts] = useState<postType[]>([]);
  const [currentPageInfo, setCurrentPageInfo] = useState<getPostsRes>();

  const nextPage = useCallback(async () => {
    if (!currentPageInfo?.data.next) {
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
  }, [currentPageInfo, posts]);

  useEffect(() => {
    async function init() {
      const res = await getPosts(0);
      if (res?.success) {
        setPosts(res.data.posts);
        setCurrentPageInfo({ data: res.data });
      }
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
      <PostUl className="col-2">
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
                <PostTitle
                  onClick={() => {
                    history.push({
                      pathname: `/post/${post.post_id}`,
                      state: { propsPost: post },
                    });
                  }}
                >
                  {post.title}
                </PostTitle>
                <PostTag>반려동물 용품·중화2동</PostTag>
                <PostInfoKeyValueBox>
                  <PostInfoKey>나누기 수</PostInfoKey> {post.minParti} ~{' '}
                  {post.maxParti}개
                </PostInfoKeyValueBox>
                <PostInfoKeyValueBox>
                  <PostInfoKey>나누기 가격</PostInfoKey> {post.price}원
                </PostInfoKeyValueBox>
              </PostInfo>
            </PostBox>
          </PostLi>
        ))}
      </PostUl>
    </MainPage>
  );
}

export default Main;
