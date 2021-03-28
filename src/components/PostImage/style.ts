import styled from 'styled-components';

import heart from '../../assets/images/icon/heart.png';
import heartVoid from '../../assets/images/icon/heart_void.png';

export const PostImageBox = styled.div<{ url?: string }>`
  position: relative;

  border-radius: 10px;

  width: 175px;
  height: 175px;

  cursor: pointer;

  ${(props) =>
    props.url
      ? `background-image: url(${props.url}); background-size: cover; background-position: center center;`
      : `background-color: #C4C4C4; opacity: 0.8;`}

  &.small {
    width: 135px;
    height: 135px;
  }
`;

export const FavsIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  width: 15px;
  height: 15px;

  background-image: url(${heartVoid});

  background-size: cover;
  background-position: center center;

  &.on {
    background-image: url(${heart});
  }
`;
