import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/ko';

import history from '../../utils/browserHistory';

import {
  PostInfoBox,
  PostTitle,
  PostTag,
  PostInfoKeyValueBox,
  PostInfoKey,
} from './style';

moment.locale('ko');

export type postInfoType = {
  _close: boolean;
  maxParti: number;
  minParti: number;
  nanumPrice: number;
  post_id: number;
  title: string;
  createdAt: Date;
  nickname: string;
};

interface PostInfoProps {
  post: postInfoType;
}
export function PostInfo({ post }: PostInfoProps) {
  return (
    <PostInfoBox>
      <PostTitle
        onClick={() => {
          history.push(`/post/${post.post_id}`);
        }}
      >
        {post.title}
      </PostTitle>
      <PostTag>
        {post.nickname}·<Moment fromNow>{post.createdAt}</Moment>
      </PostTag>

      <PostInfoKeyValueBox>
        <PostInfoKey>가격</PostInfoKey> {post.nanumPrice}원
      </PostInfoKeyValueBox>

      <PostInfoKeyValueBox>
        <PostInfoKey>나누기 개수</PostInfoKey> {post.minParti} ~ {post.maxParti}
        개
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
      <PostTag>
        {post.nickname}·<Moment fromNow>{post.createdAt}</Moment>
      </PostTag>

      <PostInfoKeyValueBox>
        <PostInfoKey>가격</PostInfoKey> {post.nanumPrice}원
      </PostInfoKeyValueBox>

      <PostInfoKeyValueBox>
        <PostInfoKey>나누기 개수</PostInfoKey> {post.minParti} ~ {post.maxParti}
        개
      </PostInfoKeyValueBox>
    </PostInfoBox>
  );
}
