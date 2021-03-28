import React from 'react';

import { PostImageBox, FavsIcon } from './style';

interface PostImageProps {
  url: string;
  onClick: () => void;
  isFavs: boolean;
  type?: 'small';
}
export default function PostImage({
  url,
  onClick,
  isFavs,
  type,
}: PostImageProps) {
  const _isFavs = isFavs || Math.random() < 0.5;
  return (
    <PostImageBox className={type} url={url} onClick={onClick}>
      <FavsIcon className={_isFavs ? 'on' : ''} />
    </PostImageBox>
  );
}
