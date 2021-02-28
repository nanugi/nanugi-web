import React, { useState } from 'react';
import history from '../../utils/browserHistory';

import { signup } from '../../container/sign';

import {
  SignupPage,
  Title,
  InputBox,
  Input,
  LoginLink,
  FindLink,
  SignupBtn,
  LinkBox,
  AfterSignupBox,
  AfterSignupText1,
  AfterSignupText2,
  AfterSignupText3,
  LoginLinkBtn,
} from './style';

function Signup() {
  const [signupField, setSignupField] = useState({
    email: '',
    password: '',
    rPassword: '',
    name: '',
  });
  const [afterSignup, setAfterSignup] = useState(false);

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

    if (password !== rPassword) {
      alert('비밀번호 두 개가 다릅니다.');
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

    if (res?.success === false) {
      alert(res?.msg);
      return;
    }

    // alert('회원가입이 되었습니다.');
    // history.push('/login');

    // 이메일 확인해달라는 문구 작성하기
    setAfterSignup(true);
  };

  return (
    <SignupPage>
      <Title>%</Title>

      {afterSignup ? (
        <div>
          <AfterSignupBox>
            <AfterSignupText1>가입을 축하 드립니다.</AfterSignupText1>
            <AfterSignupText2>&apos;{email}&apos; 로</AfterSignupText2>
            <AfterSignupText2 className="last">
              이메일을 전송하였습니다.
            </AfterSignupText2>

            <AfterSignupText3>이메일 인증을 완료하고,</AfterSignupText3>
            <AfterSignupText3>
              나누기와 함께 친환경 공유소비 생활을 즐겨보아요!
            </AfterSignupText3>
            <LoginLinkBtn type="button" onClick={() => history.push('/login')}>
              로그인화면으로
            </LoginLinkBtn>
          </AfterSignupBox>
        </div>
      ) : (
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
            회원가입
          </SignupBtn>
        </div>
      )}
    </SignupPage>
  );
}

export default Signup;
