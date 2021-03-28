import styled from 'styled-components';

import { Page, Button } from '../common';

export const LoginPage = styled.div`
  ${Page}
`;

export const StaySignedInBox = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;
export const StaySignedInBtn = styled.button`
  padding: 0px;
  border: solid 1px #dadada;
  margin-right: 8px;

  width: 15px;
  height: 15px;

  line-height: 15px;
  text-align: center;

  color: #fff;
  font-size: 15px;
  font-weight: 900;

  background-color: #fff;

  transition: all 0.5s;

  &:focus {
    outline: none;
  }
  &.on {
    border: none;
    background-color: #11a656;
  }
`;
export const StaySignedInLabel = styled.div`
  font-size: 12px;
`;

export const LinkBox = styled.div`
  display: flex;

  padding-left: 1px;

  width: 100%;

  box-sizing: border-box;
`;

export const FindLink = styled.div`
  margin-left: auto;

  color: #828282;
  font-size: 12px;

  cursor: pointer;
`;

export const LoginBtn = styled(Button)`
  color: #ffffff;
  background-color: #11a656;
`;
export const SignupLink = styled(Button)`
  margin-bottom: 13px;

  border: solid 1px #11a656;
  background-color: #ffffff;
`;
