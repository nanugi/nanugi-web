import React, { useState } from 'react';
import history from '../../utils/browserHistory';

import { signup, signupVerify } from '../../container/sign';

import {
  SignupPage,
  Title,
  InputBox,
  Input,
  LoginLink,
  FindLink,
  SignupBtn,
  LinkBox,
} from './style';

function Signup() {
  const [signupField, setSignupField] = useState({
    email: '',
    password: '',
    rPassword: '',
    name: '',
  });

  const { email, password, rPassword, name } = signupField;

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: targetName, value } = e.target;

    setSignupField({
      ...signupField,
      [targetName]: value,
    });
  };

  const onClickSignupBtn = async function (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const target = e.currentTarget;
    target.disabled = true;
    target.classList.add('on');

    const verify = signupVerify({
      id: email,
      password,
      rPassword,
      name,
    });
    if (verify.result === -1) {
      alert(verify.message);
      target.disabled = false;
      target.classList.remove('on');
      return;
    }

    const res = await signup({
      id: email,
      password,
      name,
    });

    setSignupField({
      email: '',
      password: '',
      rPassword: '',
      name: '',
    });
    target.disabled = false;
    target.classList.remove('on');

    if (res?.success) {
      alert(res?.msg);
      return;
    }

    alert('회원가입이 되었습니다.');

    history.push('/login');
  };

  return (
    <SignupPage>
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
            autoComplete="off"
            name="name"
            placeholder="Name"
            value={name}
            onChange={changeState}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={changeState}
          />
          <Input
            name="rPassword"
            placeholder="Reenter password"
            type="password"
            value={rPassword}
            onChange={changeState}
          />
        </InputBox>
        <LinkBox>
          <LoginLink onClick={() => history.push('/login')}>로그인</LoginLink>
          <FindLink onClick={() => history.push('/find')}>
            아이디 / 비밀번호 찾기
          </FindLink>
        </LinkBox>
        <SignupBtn type="button" onClick={onClickSignupBtn}>
          Signup !
        </SignupBtn>
      </div>
    </SignupPage>
  );
}

export default Signup;
