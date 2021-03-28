import React from 'react';

import PostUl from './style';

import useWindowSize from '../../utils/useWindowSize';

interface PostListTemplateProps {
  children: JSX.Element[];
}
export default function PostListTemplate({ children }: PostListTemplateProps) {
  const windowSize = useWindowSize();

  let colNum = 0;

  if (windowSize.width < 440) colNum = 1;
  else if (windowSize.width < 825) colNum = 2;
  else colNum = 4;

  return <PostUl className={`col-${colNum}`}>{children}</PostUl>;
}
