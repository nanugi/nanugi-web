import styled from 'styled-components';

import { Page, Button } from '../common';

export const SignupPage = styled.div`
  ${Page}

  padding-top: 161px;
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

export const SignupBtn = styled(Button)`
  color: #ffffff;
  background-color: #11a656;
`;
