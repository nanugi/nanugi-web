import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { userStore } from '../../container/user/store';

import history from '../../utils/browserHistory';

import {
  postType,
  getPost,
  closePost,
  postToTinyPost,
} from '../../container/post';
import { getImageByPostId, imageType } from '../../container/image';
import { toggleFavsByPostId } from '../../container/favs';

import PostInfo from '../../components/PostInfo';
import TopHeader from '../../components/TopHeader';

import {
  PostPage,
  PostContainer,
  PostImageContainer,
  PostImageBox,
  PostImage,
  PostEmptyImage,
  PostInfoBox,
  BtnBox,
  PostContent,
  ChatBtn,
  FavsBtn,
  CloseBtn,
  ModifyBtn,
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
      // console.log('res', res);
      if (res?.success) setPost(res.data);
    };

    const imageInit = async () => {
      const res = await getImageByPostId(id);
      // console.log('res', res);
      if (res?.success) setImages(res.data.images);
    };

    postInit();
    imageInit();
  }, [stringId]);

  return (
    <PostPage>
      <TopHeader pageName="상품상세" />
      <PostContainer>
        {post ? (
          <>
            <PostImageContainer>
              <PostImageBox
                imagesLength={images.length}
                isAlone={images.length === 1}
              >
                {images.length ? (
                  images.map((image, key) => (
                    <PostImage
                      style={{ display: 'inline-flex' }}
                      key={key}
                      url={image.url}
                      isFirst={key === 0}
                    />
                  ))
                ) : (
                  <PostEmptyImage />
                )}
              </PostImageBox>
            </PostImageContainer>
            <PostInfoBox>
              <PostInfo post={postToTinyPost(post)} likedIconSize={16} />
              <BtnBox>
                {/* 수정하기 자기가 쓴글인지 확인 */}
                {userStore.profile?.nickname === post.user.nickname ? (
                  <>
                    <CloseBtn
                      onClick={() => {
                        if (confirm('나눔을 종료 하시겠습니까?')) {
                          closePost(post.post_id);
                        }
                      }}
                      style={{ marginRight: 11 }}
                    >
                      나누기 종료
                    </CloseBtn>
                    <ModifyBtn
                      onClick={async () => {
                        history.push({
                          pathname: `/write/post`,
                          state: {
                            isModify: true,
                            post,
                            images,
                          },
                        });
                      }}
                    >
                      수정하기
                    </ModifyBtn>
                  </>
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
              </BtnBox>
            </PostInfoBox>
            <PostContent>{post.content}</PostContent>
          </>
        ) : (
          <div>스켈레톤 제작 예정 ...</div>
        )}
      </PostContainer>
    </PostPage>
  );
}
Post.defaultProps = { propsPost: undefined };

export default Post;
