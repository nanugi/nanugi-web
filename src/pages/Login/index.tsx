import React, { useEffect, useState } from 'react'
import callCookie from '../../utils/cookie'
import history from '../../utils/browserHistory'

import { login } from '../../container/sign'

import {
  FindLink,
  LinkBox,
  LoginBtn,
  LoginPage,
  SignupLink,
  StaySignedInBox,
  StaySignedInBtn,
  StaySignedInLabel,
} from './style'

import { Input } from '../common'

function Login() {
  const [isStaySignedIn, setIsStaySignedIn] = useState(false);
  const [loginField, setLoginField] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginField;

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginField({
      ...loginField,
      [name]: value,
    });
  };

  const onClickLoginBtn = async function (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const target = e.currentTarget;
    target.disabled = true;
    target.classList.add('on');

    const res = await login(isStaySignedIn, { id: email, password });
    if (res?.success) {
      setLoginField({
        email: '',
        password: '',
      });
      target.disabled = false;
      target.classList.remove('on');

      history.push('/main');
      return;
    }

    alert(res?.msg);
    target.disabled = false;
    target.classList.remove('on');
    if (res?.code === -1010) {
      // 이메일 아직 미인증 고객
      history.push('/email-resend', { email })
    }
  };

  useEffect(() => {
    callCookie.delete('staySignedIn');
    callCookie.delete('jwt');
  }, []);

  return (
    <LoginPage>
      <Input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={changeState}
      />
      <Input
        name="password"
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={changeState}
      />

      <LoginBtn type="button" onClick={onClickLoginBtn}>
        로그인
      </LoginBtn>

      <SignupLink type="button" onClick={() => history.push('/signup')}>
        회원가입
      </SignupLink>

      <LinkBox>
        <StaySignedInBox
          onClick={() => {
            setIsStaySignedIn(!isStaySignedIn);
          }}
        >
          <StaySignedInBtn className={isStaySignedIn ? 'on' : ''} />
          <StaySignedInLabel>로그인 상태 유지</StaySignedInLabel>
        </StaySignedInBox>

        <FindLink onClick={() => history.push('/find')}>비밀번호 찾기</FindLink>
      </LinkBox>
    </LoginPage>
  );
}

export default Login;
