/* eslint react/no-unused-prop-types: 0 */

import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/ko';

import history from '../../utils/browserHistory';

import { tinyPostType } from '../../container/post';

import {
  PostInfoBox,
  PostLiked,
  PostLikedIcon,
  PostTitle,
  PostTag,
  PostInfoKeyValueBox,
  PostInfoKey,
  PostInfoUserName,
} from './style';

moment.locale('ko');

interface PostInfoProps {
  post: tinyPostType;
  likedIconSize?: 16 | 8;
}
export default function PostInfo({ post, likedIconSize }: PostInfoProps) {
  return (
    <PostInfoBox>
      <PostLiked>
        <PostLikedIcon likedIconSize={likedIconSize} />
        {post.liked}
      </PostLiked>
      <PostTitle
        onClick={() => {
          history.push(`/post/${post.post_id}`);
        }}
      >
        {post.title}
      </PostTitle>
      <PostTag>
        <PostInfoUserName
          onClick={() => {
            history.push(`/profile/${post.nickname}`);
          }}
        >
          {post.nickname}
        </PostInfoUserName>·<Moment fromNow>{post.createdAt}</Moment>
      </PostTag>
      <PostInfoKeyValueBox>
        <PostInfoKey>가격</PostInfoKey> {post.totalPrice}원
      </PostInfoKeyValueBox>

      <PostInfoKeyValueBox>
        <PostInfoKey>나누기 수</PostInfoKey> {post.minParti} ~ {post.maxParti}개
      </PostInfoKeyValueBox>
    </PostInfoBox>
  );
}

export function MyPostInfo({ post }: PostInfoProps) {
  return (
    <PostInfoBox>
      <PostTitle
        onClick={() => {
          history.push(`/post/${post.post_id}`);
        }}
      >
        {post.title}
      </PostTitle>

      <PostInfoKeyValueBox>
        <PostInfoKey>가격</PostInfoKey> {post.totalPrice}원
      </PostInfoKeyValueBox>

      <PostInfoKeyValueBox>
        <PostInfoKey>나누기 수</PostInfoKey> {post.minParti} ~ {post.maxParti}개
      </PostInfoKeyValueBox>
    </PostInfoBox>
  );
}
