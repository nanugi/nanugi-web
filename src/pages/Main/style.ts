import styled from 'styled-components';

import Page from '../pageStyle';

export const MainPage = styled.div`
  ${Page}

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #f7c46a;
`;

export const SubText = styled.div`
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
