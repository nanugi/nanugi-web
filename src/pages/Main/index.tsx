import React, { useCallback, useEffect, useState } from 'react';
import history from '../../utils/browserHistory';

import { tinyPostType, getPosts, getPostsRes } from '../../container/post';

import NavigationBar from '../../components/NavigationBar';
import { PostInfo } from '../../components/PostInfo';

import {
  MainPage,
  MainHeader,
  SearchBox,
  SearchInput,
  PostUl,
  PostLi,
  PostBox,
  PostImage,
} from './style';

function Main() {
  const [posts, setPosts] = useState<tinyPostType[]>([]);
  const [currentPageInfo, setCurrentPageInfo] = useState<getPostsRes>();
  const [nextPageLoading, setNextPageLoading] = useState(false);

  const [searchWord, setSearchWord] = useState('');

  const nextPage = useCallback(async () => {
    // console.log('nextPage 가져오세요');

    if (!currentPageInfo?.data.next) {
      // console.log('next 가 없다요');
      return;
    }

    if (nextPageLoading) {
      // console.log('가져오는 중...');
      return;
    }

    setNextPageLoading(true);
    const res = await getPosts(currentPageInfo.data.page + 1);
    if (res?.success) {
      setNextPageLoading(false);

      const alreadyImportedPosts_id = currentPageInfo.data.posts.map(
        (post) => post.post_id,
      );
      const newPosts = res.data.posts.filter(
        (post) => !alreadyImportedPosts_id.includes(post.post_id),
      );

      setPosts([...posts, ...newPosts]);
      setCurrentPageInfo({ data: res.data });
    }
  }, [currentPageInfo, posts, nextPageLoading]);

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
      <MainHeader>
        <SearchBox>
          <SearchInput
            placeholder="검색어를 입력해주세요"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </SearchBox>
      </MainHeader>
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
              <PostInfo post={post} />
            </PostBox>
          </PostLi>
        ))}
      </PostUl>
      <NavigationBar currnetUrl="main" />
    </MainPage>
  );
}

export default Main;
