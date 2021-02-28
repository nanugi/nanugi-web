import React, { useState, useEffect } from 'react';
import callCookie from '../../utils/cookie';
import history from '../../utils/browserHistory';

import { login } from '../../container/sign';

import {
  LoginPage,
  Title,
  InputBox,
  Input,
  LinkBox,
  SignupLink,
  FindLink,
  LoginBtn,
} from './style';

function Login() {
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

    const res = await login({ id: email, password });
    setLoginField({
      email: '',
      password: '',
    });
    target.disabled = false;
    target.classList.remove('on');

    if (res?.success === false) {
      alert(res.msg);
      return;
    }

    history.push('/main');
  };

  useEffect(() => {
    callCookie.delete('jwt');
  }, []);

  return (
    <LoginPage>
      <Title>%</Title>

      <div>
        <InputBox>
          <Input
            autoComplete="off"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={changeState}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={changeState}
          />
        </InputBox>
        <LinkBox>
          <SignupLink onClick={() => history.push('/signup')}>
            회원가입
          </SignupLink>
          <FindLink onClick={() => history.push('/find')}>
            아이디 / 비밀번호 찾기
          </FindLink>
        </LinkBox>

        <LoginBtn type="button" onClick={onClickLoginBtn}>
          로그인
        </LoginBtn>
      </div>
    </LoginPage>
  );
}

export default Login;
