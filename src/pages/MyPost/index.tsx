import React, { useCallback, useEffect, useState } from 'react';
import history from '../../utils/browserHistory';

import { getMyposts } from '../../container/user';
import { tinyPostType, getPostsRes } from '../../container/post';

// import NavigationBar from '../../components/NavigationBar';
import TopHeader from '../../components/TopHeader';
import { MyPostInfo } from '../../components/PostInfo';

import {
  MyPostPage,
  MyPostContainer,
  PostUl,
  Divider,
  PostLi,
  PostBox,
  PostImage,
  PostContents,
  CloseStatusBox,
} from './style';

function MyPost() {
  const [posts, setPosts] = useState<tinyPostType[]>([]);
  const [currentPageInfo, setCurrentPageInfo] = useState<getPostsRes>();
  const [nextPageLoading, setNextPageLoading] = useState(false);

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
    const res = await getMyposts(currentPageInfo.data.page + 1);
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
      const res = await getMyposts(0);
      if (res?.success) {
        setPosts(res.data.posts);
        setCurrentPageInfo({ data: res.data });
      }
    }
    init();
  }, []);

  return (
    <MyPostPage>
      <TopHeader pageName="나의 나누기" />
      <MyPostContainer
        onScroll={(e: React.UIEvent<HTMLDivElement, UIEvent>) => {
          const { offsetHeight, scrollHeight, scrollTop } = e.currentTarget;
          if (offsetHeight + scrollTop >= scrollHeight) {
            nextPage();
          }
        }}
      >
        <PostUl className="col-1">
          {posts
            .map((post) => (
              <PostLi key={post.post_id}>
                <PostBox>
                  <PostImage
                    url={post.thumbnail}
                    onClick={() => {
                      history.push({
                        pathname: `/post/${post.post_id}`,
                        state: { isMyPost: true },
                      });
                    }}
                  />
                  <PostContents>
                    <CloseStatusBox className={post._close ? 'close' : ''}>
                      {post._close ? '나누기 완료' : '판매중'}
                    </CloseStatusBox>
                    <MyPostInfo post={post} />
                  </PostContents>
                </PostBox>
              </PostLi>
            ))
            .reduce<any>(
              (prevPosts, currPost) =>
                prevPosts === null
                  ? [currPost]
                  : [...prevPosts, <Divider />, currPost],
              null,
            )}
          {/* // const list = ({ data }) => data.reduce((prev, curr) => [ prev, ', ', curr ]);
            // .join(`${(<Divider />)}`)} */}
        </PostUl>
      </MyPostContainer>
    </MyPostPage>
  );
}

export default MyPost;
