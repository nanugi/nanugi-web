import styled from 'styled-components';

import plus from '../../assets/images/icon/plus.png';

export const PostInfoBox = styled.div``;

export const PostLiked = styled.div`
  display: flex;
  align-items: center;

  height: 18px;

  color: #828282;
  font-size: 11px;
`;
export const PostLikedIcon = styled.div<{ likedIconSize: 16 | 8 | undefined }>`
  margin-right: 4px;
  border-radius: 16px;

  width: ${(props) => (props.likedIconSize ? props.likedIconSize : 8)}px;
  height: ${(props) => (props.likedIconSize ? props.likedIconSize : 8)}px;

  background-color: #e0e0e0;
  background-image: url(${plus});
  background-size: cover;
  background-position: center center;
`;

export const PostTitle = styled.div`
  margin-bottom: 5px;

  font-size: 15px;
  font-weight: bold;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const PostTag = styled.div`
  margin-bottom: 5px;

  color: #828282;
  font-size: 10px;
  font-weight: 400;
`;
export const PostInfoUserName = styled.span`
  cursor: pointer;
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
