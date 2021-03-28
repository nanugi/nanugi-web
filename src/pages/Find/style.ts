import styled from 'styled-components';

import { Button } from '../common';

export const FindPage = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
`;
export const FindContainer = styled.div`
  padding: 20px 27px;

  height: calc(100% - 60px);
`;

export const MainText = styled.div`
  margin-bottom: 18px;

  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
`;

export const LinkBox = styled.div`
  display: flex;

  width: 100%;
`;

export const LoginLink = styled.div`
  color: #828282;
  font-size: 12px;

  cursor: pointer;
`;

export const SignupLink = styled.div`
  margin-left: auto;

  color: #828282;
  font-size: 12px;

  cursor: pointer;
`;

export const Text = styled.div`
  margin-bottom: 40px;

  font-size: 23px;
  font-weight: bold;
`;

export const Btn = styled(Button)`
  margin-bottom: 11px;

  color: #ffffff;
  background-color: #11a656;
`;
