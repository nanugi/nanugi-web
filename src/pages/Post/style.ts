import styled from 'styled-components';

import { Button } from '../common';

export const PostPage = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
`;

export const PostContainer = styled.div`
  height: calc(100% - 60px);
  overflow-y: scroll;
`;

export const PostImageContainer = styled.div`
  overflow-x: scroll;
`;

type PostImageBoxProps = {
  imagesLength: number;
  isAlone?: boolean;
};

export const PostImageBox = styled.div<PostImageBoxProps>`
  width: ${(props) =>
    `${414 * props.imagesLength + 10 * props.imagesLength - 1}`}px;
  height: 350px;

  ${(props) =>
    props.isAlone
      ? `
        display: flex;
        justify-content: center;
        width: 100%; 
      `
      : ''}
`;

export const PostImage = styled.div<{ url?: string; isFirst?: boolean }>`
  position: relative;

  margin-right: ${(props) => (props.isFirst ? '10px' : '0px')};

  width: 414px;
  height: 350px;

  cursor: pointer;

  ${(props) =>
    props.url
      ? `background-image: url(${props.url}); background-size: cover; background-position: center center;`
      : `background: rgba(229, 229, 229, 0.5); opacity: 0.8;`}
`;

export const PostEmptyImage = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  height: 350px;

  cursor: pointer;
`;

/*
${(props) =>
    props.url
      ? `background-image: url(${props.url}); background-size: cover; background-position: center center;`
      : `background: rgba(229, 229, 229, 0.5); opacity: 0.8;`}
*/

export const PostInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 2px solid #e0e0e0;
  padding: 16px 27px 24px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 16px;
`;

export const Closed = styled(Button)`
  margin-bottom: 0px;

  color: #bdbdbd;
  background-color: #f2f2f2;
`;

export const ChatBtn = styled(Button)`
  margin-bottom: 0px;

  color: #ffffff;
  background-color: #11a656;
`;

export const FavsBtn = styled(Button)`
  margin-bottom: 0px;

  color: #bdbdbd;

  background-color: #f2f2f2;

  &.on {
    color: #11a656;
  }
`;
export const ModifyBtn = styled(Button)`
  margin-bottom: 0px;

  color: #bdbdbd;

  background-color: #f2f2f2;

  &.on {
    color: #11a656;
  }
`;
export const CloseBtn = styled(Button)`
  margin-bottom: 0px;

  color: #ffffff;
  background-color: #11a656;
`;

export const PostContent = styled.div`
  padding: 24px 29px;

  font-size: 14px;

  white-space: pre-wrap;
  word-break: break-word;
`;
