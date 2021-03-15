import styled from 'styled-components';

import { Page } from '../common';

export const MainPage = styled.div`
  ${Page}
`;

export const PostUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0px;
  padding: 0px;

  width: 100%;

  list-style: none;

  &.col-4 {
    & > li {
      width: 25%;
    }
  }
  &.col-2 {
    & > li {
      width: calc(50% - 5px);
    }
    li:nth-child(2n) {
      margin-left: 10px;
    }
  }
  &.col-1 {
    & > li {
      width: 100%;
    }
  }
`;

export const PostLi = styled.li`
  position: relative;

  margin-bottom: 12px;

  box-sizing: border-box;
`;

export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostImage = styled.div<{ url?: string }>`
  position: relative;

  margin-bottom: 10px;
  border-radius: 10px;

  width: 175px;
  height: 185px;

  cursor: pointer;

  ${(props) =>
    props.url
      ? `background-image: url(${props.url}); background-size: cover;`
      : `background-color: #C4C4C4; opacity: 0.8;`}
`;

export const PostInfo = styled.div``;

export const PostTitle = styled.div`
  margin-bottom: 5px;

  font-size: 15px;
  font-weight: bold;
`;
export const PostTag = styled.div`
  margin-bottom: 5px;

  color: #828282;
  font-size: 10px;
  font-weight: 400;
`;
export const PostInfoKeyValueBox = styled.div`
  margin-bottom: 5px;

  font-size: 11px;
  font-weight: bold;
`;
export const PostInfoKey = styled.div`
  display: inline;

  color: #11a656;
  text-decoration: underline;
`;
