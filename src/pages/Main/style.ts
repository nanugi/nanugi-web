import styled from 'styled-components';

import Page from '../pageStyle';

export const MainPage = styled.div`
  ${Page}
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #f7c46a;
`;

export const Title = styled.div`
  color: #f9765a;

  opacity: 0.5;
  font-size: 30px;
`;

export const Text = styled.div`
  color: #f9765a;

  opacity: 0.5;
  font-size: 200px;
  font-weight: bold;
`;

export const PostUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0px;
  padding: 0px;

  height: 50vh;
  width: 100%;

  list-style: none;

  &.col-4 {
    & > li {
      width: 25%;
    }
  }
  &.col-2 {
    & > li {
      width: 50%;
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

  padding: 0px 0px 35px 35px;
  margin: 0px;

  box-sizing: border-box;
`;

export const PostWriteLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  font-size: 30px;
  font-weight: bold;

  background-color: #ffca6e;

  cursor: pointer;
`;

export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;

  background-color: #ffca6e;
`;

export const PostImage = styled.div<{ url?: string }>`
  position: relative;

  width: 100%;
  height: 200px;

  cursor: pointer;

  ${(props) =>
    props.url
      ? `background-image: url(${props.url}); background-size: cover;`
      : `background-color: #FFBB6B;`}
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;

export const PostTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
