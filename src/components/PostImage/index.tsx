import React from 'react';

import { PostImageBox, CloseCover, FavsIcon } from './style';

interface PostImageProps {
  url: string;
  onClick: () => void;
  isClose: boolean;
  isFavs: boolean;
  type?: 'small';
}
export default function PostImage({
  url,
  onClick,
  isClose,
  isFavs,
  type,
}: PostImageProps) {
  const _isFavs = isFavs || Math.random() < 0.5;
  return (
    <PostImageBox className={type} url={url} onClick={onClick}>
      <CloseCover className={isClose ? 'on' : ''}>
        종료된 나누기입니다
      </CloseCover>
      <FavsIcon style={{ display: 'none' }} className={_isFavs ? 'on' : ''} />
    </PostImageBox>
  );
}
