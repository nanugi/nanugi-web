import styled from 'styled-components';

export const MyPagePage = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
`;
export const MyPageContainer = styled.div`
  height: calc(100% - 60px);
  overflow-y: scroll;
`;

export const MyInfoLayout = styled.div`
  padding: 30px 27px 25px;
  width: 100%;
  box-sizing: border-box;
`;

export const LoginButton = styled.button`
  border-width: 1px;
  border-radius: 10px;
  height: 30px;
  width: 80px;
  background-color: white;
  border-color: #11a656;
  outline: none;
  font-size: 11px;
  color: black;
  text-align: center;
  line-height: 30px;
  margin-right: 8px;
  font-family: Noto Sans KR;
  font-weight: 500;
`;

export const LogoutButton = styled.button`
  border-width: 1px;
  border-radius: 10px;
  height: 30px;
  width: 80px;
  background-color: white;
  border-color: #11a656;
  outline: none;
  font-size: 11px;
  color: black;
  text-align: center;
  line-height: 30px;
  margin-right: 8px;
  font-family: Noto Sans KR;
  font-weight: 500;
`;

export const SignUpButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: #11a656;
  font-size: 11px;
  color: white;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: Noto Sans KR;
  line-height: 30px;
`;

export const WelcomeTitle = styled.div`
  font-size: 28px;
  color: black;
  font-family: Noto Sans KR;
  margin-bottom: 4px;
`;

export const NeedSignInText = styled.div`
  font-size: 21px;
  color: black;
  font-family: Noto Sans KR;
  margin-bottom: 4px;
`;

export const EmailText = styled.div`
  font-size: 14px;
  color: #bdbdbd;
  font-family: Noto Sans KR;
  margin-bottom: 16px;
`;

export const Divider = styled.div`
  height: 10px;
  background-color: #f2f2f2;
  width: 100%;
`;

export const ItemButtonRow = styled.button`
  display: block;
  padding: 19px 27px;
  color: black;
  font-weight: bold;
  font-size: 17px;
  font-family: Noto Sans KR;
  cursor: pointer;
  width: 100%;
  border: none;
  outline: none;
  background-color: white;
  text-align: left;
  opacity: 1;

  &:active {
    background-color: #f2f2f2;
    opacity: 0.38;
  }
`;
