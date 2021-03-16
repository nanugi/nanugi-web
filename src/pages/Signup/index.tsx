import React, { useState } from 'react';
import history from '../../utils/browserHistory';

import { signup } from '../../container/sign';

import {
  SignupPage,
  AfterSignupBox,
  AfterSignupText1,
  AfterSignupText2,
  AfterSignupText2Strong,
  AfterSignupText3,
  AfterSignupText3Strong,
  LoginLinkBtn,
  SingupInfo,
  SingupInfoStrong,
  SignupBtn,
} from './style';

import { Input } from '../common';

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

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*\W).{1,10}$/.exec(password) ) {
      alert('최소 하나의 숫자 및 특수문자를 포함하여 10자 이내로 만들어 주세요.')
      target.disabled = false
      target.classList.remove('on')
      return
    }

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

    if (res?.success === false) {
      alert(res?.msg);

      setSignupField({
        email: '',
        password: '',
        rPassword: '',
        name: '',
      });
      target.disabled = false;
      target.classList.remove('on');

      return;
    }

    // alert('회원가입이 되었습니다.');
    // history.push('/login');

    // 이메일 확인해달라는 문구 작성하기
    setAfterSignup(true);
  };

  return (
    <SignupPage>
      {afterSignup ? (
        <AfterSignupBox>
          <AfterSignupText1>회원가입을</AfterSignupText1>
          <AfterSignupText1 style={{ marginBottom: '36px' }}>
            축하드립니다!😆
          </AfterSignupText1>
          <AfterSignupText2>
            <AfterSignupText2Strong>‘{email}’</AfterSignupText2Strong>로
          </AfterSignupText2>
          <AfterSignupText2 style={{ marginBottom: '30px' }}>
            이메일을 전송하였습니다.
          </AfterSignupText2>
          <AfterSignupText3>이메일 인증을 완료하고,</AfterSignupText3>
          <AfterSignupText3 style={{ marginBottom: '90px' }}>
            나누기와 함께{' '}
            <AfterSignupText3Strong>
              친환경 공유소비 생활
            </AfterSignupText3Strong>
            을 즐겨보아요!
          </AfterSignupText3>
          <LoginLinkBtn type="button" onClick={() => history.push('/login')}>
            로그인화면으로
          </LoginLinkBtn>
        </AfterSignupBox>
      ) : (
        <>
          <SingupInfo>나누기는</SingupInfo>
          <SingupInfo>
            <SingupInfoStrong>학교 웹메일</SingupInfoStrong>로만
          </SingupInfo>
          <SingupInfo style={{ marginBottom: '18px' }}>
            가입이 가능합니다.
          </SingupInfo>

          <Input
            autoComplete="off"
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
          <Input
            name="rPassword"
            placeholder="비밀번호 확인"
            type="password"
            value={rPassword}
            onChange={changeState}
          />
          <Input
            autoComplete="off"
            name="name"
            placeholder="이름"
            value={name}
            onChange={changeState}
          />
          <SignupBtn type="button" onClick={onClickSignupBtn}>
            회원가입
          </SignupBtn>
        </>
      )}
    </SignupPage>
  );
}

export default Signup;
