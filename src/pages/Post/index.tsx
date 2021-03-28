import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { postType, getPost, closePost } from '../../container/post';
import { getImageByPostId, imageType } from '../../container/image';
import { toggleFavsByPostId } from '../../container/favs';

import PostInfo from '../../components/PostInfo';
import TopHeader from '../../components/TopHeader';

import {
  PostPage,
  PostImage,
  PostInfoBox,
  PostContent,
  ChatBtn,
  FavsBtn,
  CloseBtn,
} from './style';

function Post() {
  // test
  const [isFavs, setIsFavs] = useState(false);

  const [post, setPost] = useState<postType>();
  const [images, setImages] = useState<imageType[]>([]);
  const { id: stringId } = useParams<{ id: string }>();

  useEffect(() => {
    // console.log('useEffect');
    const id = Number(stringId);

    const postInit = async () => {
      const res = await getPost(id);
      if (res?.success) setPost(res.data);
    };

    const imageInit = async () => {
      const res = await getImageByPostId(id);
      if (res?.success) setImages(res.data.images);
    };

    postInit();
    imageInit();
  }, [stringId]);

  return (
    <PostPage>
      <TopHeader pageName="상품상세" />
      {post ? (
        <>
          <div style={{ overflowX: 'scroll' }}>
            <div
              style={{
                width: `${414 * images.length}px`,
                height: '350px',
              }}
            >
              {images.map((image, key) => (
                <PostImage
                  style={{ display: 'inline-flex' }}
                  key={key}
                  url={image.url}
                />
              ))}
            </div>
          </div>
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '16px',
              }}
            >
              {/* 수정하기 자기가 쓴글인지 확인 */}
              {post.title === 'ㅁㄴㅇ' ? (
                <CloseBtn
                  onClick={() => {
                    if (confirm('나눔을 종료 하시겠습니까?')) {
                      closePost(post.post_id);
                    }
                  }}
                >
                  나누기 종료
                </CloseBtn>
              ) : (
                <>
                  <ChatBtn
                    onClick={() => {
                      if (
                        confirm(
                          '나누기 개설자의 오픈채팅방으로 이동하시겠습니까?',
                        )
                      ) {
                        window.open(post.detail.chatUrl);
                      }
                    }}
                    style={{ marginRight: 11 }}
                  >
                    나누기 참여하기
                  </ChatBtn>
                  <FavsBtn
                    className={isFavs ? 'on' : ''}
                    onClick={async () => {
                      const res = await toggleFavsByPostId(post.post_id);
                      if (res?.success) {
                        setIsFavs(!isFavs);
                      }
                    }}
                  >
                    관심 나누기
                  </FavsBtn>
                </>
              )}
            </div>
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
