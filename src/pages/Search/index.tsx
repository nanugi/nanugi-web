import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import history from '../../utils/browserHistory'
import { getPostsRes, searchPosts, tinyPostType } from '../../container/post'
import PostInfo from '../../components/PostInfo'
import PostImage from '../../components/PostImage'
import PostListTemplate from '../../components/PostListTemplate'
import { MainLogo, PostBox, PostLi, SearchBox, SearchContainer, SearchHeader, SearchInput, SearchPage, } from './style'

export default function Search() {
  const [posts, setPosts] = useState<tinyPostType[]>([]);
  const [currentPageInfo, setCurrentPageInfo] = useState<getPostsRes>();
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const { query } = useParams<{ query: string }>();
  const [searchWord, setSearchWord] = useState(query)

  const nextPage = useCallback(async () => {
    if (!currentPageInfo?.data.next || nextPageLoading) {
      return;
    }
    setNextPageLoading(true);
    const res = await searchPosts(currentPageInfo.data.page + 1, searchWord);
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
  }, [currentPageInfo, posts, nextPageLoading, searchWord]);

  const loadSearchQuery = async (page: number, word?: string) => {
    const res = await searchPosts(page, word ?? "");
    if (res?.success) {
      setPosts(res.data.posts);
      setCurrentPageInfo({ data: res.data });
    }
  }

  useEffect(() => {
    loadSearchQuery(0, query)
    const enterListener = (event: any) => {
      if (event.key === 'Enter' && searchWord !== query) {
        history.push(`/main/${searchWord}`)
      }
    }
    addEventListener('keydown', enterListener)
    return () => {
      removeEventListener('keydown', enterListener)
    }
  }, []);

  return (
    <SearchPage>
      <SearchContainer
        onScroll={(e: React.UIEvent<HTMLDivElement, UIEvent>) => {
          const { offsetHeight, scrollHeight, scrollTop } = e.currentTarget;
          if (offsetHeight + scrollTop >= scrollHeight) {
            nextPage();
          }
        }}
      >
        <SearchHeader>
          <MainLogo onClick={() => history.push('/main')} />
          <SearchBox>
            <SearchInput
              placeholder="검색어를 입력해주세요"
              value={searchWord}
              onChange={({ currentTarget }) => setSearchWord(currentTarget.value)}
            />
          </SearchBox>
        </SearchHeader>
        <PostListTemplate>
          {posts.map((post) => (
            <PostLi key={post.post_id}>
              <PostBox>
                <PostImage
                  url={post.thumbnail}
                  onClick={() => {
                    history.push(`/post/${post.post_id}`);
                  }}
                  isClose={post._close}
                  // 이 부분 추가 수정 필요
                  isFavs={false}
                />
                <div style={{ height: '10px' }} />
                <PostInfo post={post} />
              </PostBox>
            </PostLi>
          ))}
        </PostListTemplate>
      </SearchContainer>
    </SearchPage>
  );
}
