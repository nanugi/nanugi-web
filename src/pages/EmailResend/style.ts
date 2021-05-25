import styled from 'styled-components'
import { Button } from '../common'

export const EmailResendPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  overflow: hidden;
`;

export const ResendBtn = styled(Button)`
  color: #11a656;
  background-color: #f2f2f2;
`;

export const HomeBtn = styled(Button)`
  color: #888;
  background-color: transparent;
  border: none;
`;

export const ResendText1 = styled.div`
  color: #11a656;
  font-size: 35px;
  font-weight: bold;
`;
export const ResendText2 = styled.div`
  font-size: 22px;
`;
export const ResendTextSpamHelp = styled.div`
  font-size: 10px
`;
export const ResendText2Strong = styled.div`
  display: inline;

  font-size: 22px;
  font-weight: bold;
  text-decoration: underline;
`;

export const ResendText3 = styled.div`
  font-size: 15px;
  font-weight: 400;
`;
