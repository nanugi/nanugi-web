import React from 'react';
import history from '../../utils/browserHistory';

import { postType } from '../../container/post';

import {
  PostInfoBox,
  PostTitle,
  PostTag,
  PostInfoKeyValueBox,
  PostInfoKey,
} from './style';

interface PostInfoProps {
  post: postType;
}
function PostInfo({ post }: PostInfoProps) {
  return (
    <PostInfoBox>
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
      <PostTag>{post.user.name}·2일전</PostTag>

      <PostInfoKeyValueBox>
        <PostInfoKey>가격</PostInfoKey> {post.detail.price}원
      </PostInfoKeyValueBox>

      <PostInfoKeyValueBox>
        <PostInfoKey>나누기 개수</PostInfoKey> {post.detail.minParti} ~{' '}
        {post.detail.maxParti}개
      </PostInfoKeyValueBox>
    </PostInfoBox>
  );
}

export default PostInfo;
