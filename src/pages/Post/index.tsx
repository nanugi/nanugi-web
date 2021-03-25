import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { postType, getPost } from '../../container/post';

import { PostInfo } from '../../components/PostInfo';

import { getImageByPostId, imageType } from '../../container/image';

import { PostPage, PostImage, PostInfoBox, Btn, PostContent } from './style';

function Post() {
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
  }, [post, stringId]);

  // console.log('post', post?._close);

  return (
    <PostPage>
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
            <Btn>나누기 참여하기</Btn>
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
