import styled from 'styled-components';

import { Button } from '../common';

export const PostPage = styled.div`
  position: fixed;
  overflow: hidden;
`;

export const PostImage = styled.div<{ url?: string }>`
  position: relative;

  width: 414px;
  height: 350px;

  cursor: pointer;

  ${(props) =>
    props.url
      ? `background-image: url(${props.url}); background-size: cover; background-position: center center;`
      : `background: rgba(229, 229, 229, 0.5); opacity: 0.8;`}
`;

export const PostInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 2px solid #e0e0e0;
  padding: 16px 27px 24px;
`;
export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const PostTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
export const PostTag = styled.div`
  color: #828282;
  font-size: 10px;
  font-weight: 400;
`;
export const PostInfoKeyValueBox = styled.div`
  font-size: 11px;
  font-weight: bold;
`;
export const PostInfoKey = styled.div`
  display: inline;

  color: #11a656;
  text-decoration: underline;
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
