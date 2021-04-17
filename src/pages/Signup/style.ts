import styled from 'styled-components';

import { Button } from '../common';

export const SignupPage = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
`;

export const SignupContainer = styled.div`
  padding: 20px 27px;
  padding-top: 100px;

  height: calc(100% - 60px);
  overflow-y: scroll;

  box-sizing: border-box;
`;

export const AfterSignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AfterSignupText1 = styled.div`
  color: #11a656;
  font-size: 35px;
  font-weight: bold;
`;
export const AfterSignupText2 = styled.div`
  font-size: 22px;
`;
export const AfterSignupText2Strong = styled.div`
  display: inline;

  font-size: 22px;
  font-weight: bold;
  text-decoration: underline;
`;

export const AfterSignupText3 = styled.div`
  font-size: 15px;
  font-weight: 400;
`;
export const AfterSignupText3Strong = styled.div`
  display: inline;

  font-weight: 500;
`;
export const LoginLinkBtn = styled(Button)`
  color: #11a656;
  background-color: #f2f2f2;
`;

export const SingupInfo = styled.div`
  font-size: 24px;
`;
export const SingupInfoStrong = styled.div`
  display: inline;

  color: #11a656;
  font-weight: bold;
  text-decoration: underline;
`;

export const RadioBtnBox = styled.div`
  margin-top: 9px;
  margin-bottom: 12px;
`;
export const RadioBtn = styled.div`
  margin-bottom: 5px;
`;
export const RadioText = styled.div`
  display: inline-flex;

  color: #000;
  font-size: 15px;
  font-weight: bold;

  &.sub {
    color: #828282;
    font-weight: normal;
  }
`;
export const Radio = styled.input``;

export const SignupBtn = styled(Button)`
  color: #ffffff;
  background-color: #11a656;
`;
