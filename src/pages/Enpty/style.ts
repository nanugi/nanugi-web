import styled from 'styled-components';

import { Page } from '../common';

export const EnptyPage = styled.div`
  ${Page}

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #f7c46a;
`;

export const ErrorCodeText = styled.div`
  color: #f9765a;

  opacity: 0.5;
  font-size: 30px;
`;

export const HmmText = styled.div`
  color: #f9765a;

  opacity: 0.5;
  font-size: 300px;
  font-weight: bold;
`;
