import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProfilePage, ProfileUserNameText } from './style'
import TopHeader from '../../components/TopHeader'
import { getMyposts, getOthersPosts } from '../../container/user'
import {
  CloseStatusBox,
  Divider,
  MyPostContainer,
  PostBox,
  PostContents,
  PostImageBox,
  PostLi,
  PostUl
} from '../MyPost/style'
import PostImage from '../../components/PostImage'
import history from '../../utils/browserHistory'
import { MyPostInfo } from '../../components/PostInfo'
import { getPostsRes, tinyPostType } from '../../container/post'

function Profile() {
  const [posts, setPosts] = useState<tinyPostType[]>([]);
  const [currentPageInfo, setCurrentPageInfo] = useState<getPostsRes>();
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const { nickname: userName } = useParams<{ nickname: string }>()

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
      const res = await getOthersPosts(userName, 0)
      if (res?.success) {
        setPosts(res.data.posts);
        setCurrentPageInfo({ data: res.data });
      }
    }
    init();
  }, [userName]);

  return (
    <ProfilePage>
      <TopHeader pageName='프로필' />
      <ProfileUserNameText><u>{userName}</u>님의 프로필</ProfileUserNameText>
      <MyPostContainer
        style={{ height: "calc(100% - 130px)"}}
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
                  <PostImageBox>
                    <PostImage
                      url={post.thumbnail}
                      onClick={() => {
                        history.push(`/post/${post.post_id}`);
                      }}
                      isClose={post._close}
                      isFavs={false}
                      type="small"
                    />
                  </PostImageBox>
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
                  : [
                    ...prevPosts,
                    <Divider key={`Divider_${prevPosts.length}`} />,
                    currPost,
                  ],
              null,
            )}
          {/* // const list = ({ data }) => data.reduce((prev, curr) => [ prev, ', ', curr ]);
            // .join(`${(<Divider />)}`)} */}
        </PostUl>
      </MyPostContainer>
    </ProfilePage>
  )
}

export default Profile
