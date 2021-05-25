/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { useState } from 'react';
import history from '../../utils/browserHistory';

import TopHeader from '../../components/TopHeader';

import { signup } from '../../container/sign';

import {
  SignupPage,
  SignupContainer,
  AfterSignupBox,
  AfterSignupText1,
  AfterSignupText2,
  AfterSignupText2Strong,
  AfterSignupText3,
  AfterSignupText3Strong,
  LoginLinkBtn,
  SingupInfo,
  SingupInfoStrong,
  RadioBtnBox,
  RadioBtn,
  RadioText,
  Radio,
  SignupBtn,
  AfterSignUpTextSpamHelp,
} from './style';

import { Input } from '../common';

function Signup() {
  const [signupField, setSignupField] = useState({
    email: '',
    password: '',
    rPassword: '',
    nickname: '',

    radio_all: false,
    radio_1: false,
    radio_2: false,
    radio_3: false,
  });
  const [afterSignup, setAfterSignup] = useState(false);

  const { email, password, rPassword, nickname } = signupField;
  const { radio_all, radio_1, radio_2, radio_3 } = signupField;
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

    if (!radio_1 || !radio_2) {
      alert('필수 약관 항목에 동의 해야 합니다.');
      target.disabled = false;
      target.classList.remove('on');
      return;
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
      nickname,
    });

    if (res?.success) {
      // alert('회원가입이 되었습니다.');
      // history.push('/login');

      // 이메일 확인해달라는 문구 작성하기
      setAfterSignup(true);

      return;
    }

    alert(res?.msg);

    setSignupField({
      ...signupField,
      email: '',
      password: '',
      rPassword: '',
      nickname: '',
    });
    target.disabled = false;
    target.classList.remove('on');
  };

  const onClickRadioBtn = (_name: string) => {
    if (_name === 'radio_all') {
      setSignupField({
        ...signupField,
        radio_all: !radio_all,
        radio_1: !radio_all,
        radio_2: !radio_all,
        radio_3: !radio_all,
      });
    } else {
      const value = [radio_1, radio_2, radio_3][
        Number(_name[_name.length - 1]) - 1
      ];

      setSignupField({
        ...signupField,
        radio_all: value ? false : radio_all,
        [_name]: !value,
      });
    }
  };

  return (
    <SignupPage>
      <TopHeader pageName="회원가입" />
      <SignupContainer>
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
            <AfterSignUpTextSpamHelp>(메일이 오지 않았을 경우, 스팸메일함을 확인해주세요!)</AfterSignUpTextSpamHelp>
            <AfterSignupText3 style={{ marginTop: '38px' }}>이메일 인증을 완료하고,</AfterSignupText3>
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
              name="nickname"
              placeholder="닉네임"
              value={nickname}
              onChange={changeState}
            />

            <RadioBtnBox>
              <RadioBtn onClick={() => onClickRadioBtn('radio_all')}>
                <Radio type="radio" checked={radio_all} readOnly />
                <RadioText>전체 동의</RadioText>
              </RadioBtn>
              <RadioBtn onClick={() => onClickRadioBtn('radio_1')}>
                <Radio type="radio" checked={radio_1} readOnly />
                <RadioText className="sub">서비스 이용약관(필수)</RadioText>
              </RadioBtn>
              <RadioBtn onClick={() => onClickRadioBtn('radio_2')}>
                <Radio type="radio" checked={radio_2} readOnly />
                <RadioText className="sub">
                  개인정보 수집 및 이용(필수)
                </RadioText>
              </RadioBtn>
              <RadioBtn onClick={() => onClickRadioBtn('radio_3')}>
                <Radio type="radio" checked={radio_3} readOnly />
                <RadioText className="sub">
                  마케팅 정보 수신 동의(선택)
                </RadioText>
              </RadioBtn>
            </RadioBtnBox>
            <SignupBtn type="button" onClick={onClickSignupBtn}>
              회원가입
            </SignupBtn>
          </>
        )}
      </SignupContainer>
    </SignupPage>
  );
}

export default Signup;
