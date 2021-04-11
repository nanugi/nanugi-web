import React, { useState } from 'react';
import history from '../../utils/browserHistory';
import { sendCertcode, setNewPassword } from '../../container/sign';

import TopHeader from '../../components/TopHeader';

import {
  FindPage,
  FindContainer,
  MainText,
  Text,
  LinkBox,
  LoginLink,
  SignupLink,
  Btn,
} from './style';
import { Input } from '../common';

function Find() {
  const [findField, setFindField] = useState({
    email: '',
    code: '',
    password: '',
    rPassword: '',
  });
  const [afterSendingCode, setAfterSendingCode] = useState(false);
  const [afterSetNewPassword, setAfterSetNewPassword] = useState(false);

  const { email, code, password, rPassword } = findField;

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFindField({
      ...findField,
      [name]: value,
    });
  };

  const onClickSendCodeBtn = async function (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const target = e.currentTarget;
    target.disabled = true;
    target.classList.add('on');

    const res = await sendCertcode({ email });

    target.disabled = false;
    target.classList.remove('on');

    if (res?.success) {
      setAfterSendingCode(true);
      return;
    }

    alert(res?.msg);

    setFindField({
      email: '',
      code: '',
      password: '',
      rPassword: '',
    });
  };

  const onClickSetNewPasswordBtn = async function (
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

    const res = await setNewPassword({ code, password });

    setFindField({
      email: '',
      code: '',
      password: '',
      rPassword: '',
    });
    target.disabled = false;
    target.classList.remove('on');

    if (res?.success) {
      setAfterSetNewPassword(true);
      return;
    }

    alert(res?.msg);
  };

  return (
    <FindPage>
      <TopHeader pageName="비밀번호 찾기" />
      <FindContainer>
        <MainText>비밀번호 찾기</MainText>
        <>
          {afterSetNewPassword ? (
            <>
              <Text>비밀번호가 변경되었습니다.</Text>
              <Btn type="button" onClick={() => history.push('/login')}>
                로그인 화면으로
              </Btn>
            </>
          ) : (
            <>
              {afterSendingCode ? (
                <>
                  <Input
                    autoComplete="off"
                    name="code"
                    placeholder="인증 코드"
                    value={code}
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

                  <Btn type="button" onClick={onClickSetNewPasswordBtn}>
                    비밀번호 재설정
                  </Btn>
                </>
              ) : (
                <>
                  <Input
                    name="email"
                    placeholder="이메일"
                    value={email}
                    onChange={changeState}
                  />

                  <Btn type="button" onClick={onClickSendCodeBtn}>
                    인증메일 받기
                  </Btn>

                  <LinkBox>
                    <LoginLink onClick={() => history.push('/login')}>
                      로그인
                    </LoginLink>
                    <SignupLink onClick={() => history.push('/signup')}>
                      회원가입
                    </SignupLink>
                  </LinkBox>
                </>
              )}
            </>
          )}
        </>
      </FindContainer>
    </FindPage>
  );
}

export default Find;
