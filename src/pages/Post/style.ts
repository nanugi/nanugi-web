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
