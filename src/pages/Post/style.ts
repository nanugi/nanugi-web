import styled from 'styled-components';

import Page from '../pageStyle';

export const PostPage = styled.div`
  ${Page}

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #f7c46a;
`;

export const PostListLink = styled.div`
  position: absolute;
  top: 5%;
  left: -74px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 8px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;

  font-size: 17px;
  font-weight: bold;

  background-color: #fff;

  opacity: 0.3;

  transition: all 0.4s;

  cursor: pointer;

  &:hover {
    left: -84px;

    opacity: 1;
  }
`;

export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;

  width: 1000px;
  height: 650px;
`;
export const PostInfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 500px;
`;
export const PostImage = styled.div<{ url?: string }>`
  position: relative;

  width: 500px;
  height: 500px;

  cursor: pointer;

  ${(props) =>
    props.url
      ? `background-image: url(${props.url}); background-size: cover;`
      : `background-color: #FFBB6B;`}
`;
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const PostInfoTitle = styled.div`
  margin-bottom: 10px;

  font-size: 40px;
  font-weight: bold;
`;
export const PostInfoText = styled.div`
  font-size: 20px;
`;

export const Temp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 22px;

  width: 80%;
  height: 100px;

  text-align: center;

  color: #fff;
  font-size: 30px;
  font-weight: bold;

  background-color: #f2a663;
`;
