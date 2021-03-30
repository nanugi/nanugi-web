import styled from 'styled-components'

export const MyPagePage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

export const MyInfoLayout = styled.div`
  width: 100%;
  padding: 30px 27px 25px;
`

export const LoginButton = styled.button`
  border-width: 1px;
  border-radius: 10px;
  height: 30px;
  width: 80px;
  background-color: white;
  border-color: #11A656;
  outline: none;
  font-size: 11px;
  color: black;
  text-align: center;
  line-height: 30px;
  margin-right: 8px;
  font-family: Noto Sans KR;
  font-weight: 500;
`

export const LogoutButton = styled.button`
  border-width: 1px;
  border-radius: 10px;
  height: 30px;
  width: 80px;
  background-color: white;
  border-color: #11A656;
  outline: none;
  font-size: 11px;
  color: black;
  text-align: center;
  line-height: 30px;
  margin-right: 8px;
  font-family: Noto Sans KR;
  font-weight: 500;
`

export const SignUpButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: #11A656;
  font-size: 11px;
  color: white;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: Noto Sans KR;
  line-height: 30px;
`

export const WelcomeTitle = styled.div`
  font-size: 28px;
  color: black;
  font-family: Noto Sans KR;
  margin-bottom: 4px;
`

export const NeedSignInText = styled.div`
  font-size: 21px;
  color: black;
  font-family: Noto Sans KR;
  margin-bottom: 4px;
`

export const EmailText = styled.div`
  font-size: 14px;
  color: #BDBDBD;
  font-family: Noto Sans KR;
  margin-bottom: 16px;
`

export const Divider = styled.div`
  height: 10px;
  background-color: #F2F2F2;
  width: 100%;
`

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
    background-color: #F2F2F2;
    opacity: 0.38;
  }
`
