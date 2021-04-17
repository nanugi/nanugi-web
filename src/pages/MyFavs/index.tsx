import React, { useEffect, useState } from 'react';
import history from '../../utils/browserHistory';

import { tinyPostType } from '../../container/post';
import { getPostOfFavs } from '../../container/favs';

import PostInfo from '../../components/PostInfo';
import PostImage from '../../components/PostImage';
import PostListTemplate from '../../components/PostListTemplate';
import TopHeader from '../../components/TopHeader';

import { MyFavsPage, MyFavsContainer, PostLi, PostBox } from './style';

export default function MyFavs() {
  const [posts, setPosts] = useState<tinyPostType[]>([]);

  useEffect(() => {
    async function init() {
      const res = await getPostOfFavs();
      if (res?.success) {
        setPosts(res.list);
      }
    }
    init();
  }, []);

  return (
    <MyFavsPage>
      <TopHeader pageName="관심 목록" />
      <MyFavsContainer>
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
                  isFavs={false}
                />
                <PostInfo post={post} />
              </PostBox>
            </PostLi>
          ))}
        </PostListTemplate>
      </MyFavsContainer>
    </MyFavsPage>
  );
}
