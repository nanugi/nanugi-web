import React, { useState } from 'react';
import history from '../../utils/browserHistory';
import { sendCertcode, setNewPassword } from '../../container/sign';

import {
  FindPage,
  Title,
  Box,
  Text,
  InputBox,
  Input,
  LinkBox,
  LoginLink,
  SignupLink,
  Btn,
} from './style';

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

    const res = await sendCertcode(email);

    target.disabled = false;
    target.classList.remove('on');

    if (res?.success === false) {
      alert(res.msg);

      setFindField({
        email: '',
        code: '',
        password: '',
        rPassword: '',
      });
      return;
    }

    setAfterSendingCode(true);
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

    const res = await setNewPassword({ code: email, password });

    setFindField({
      email: '',
      code: '',
      password: '',
      rPassword: '',
    });
    target.disabled = false;
    target.classList.remove('on');

    if (res?.success === false) {
      alert(res.msg);
      return;
    }

    setAfterSetNewPassword(true);
  };

  return (
    <FindPage>
      <Title>%</Title>

      <Box>
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
                <InputBox>
                  <Input
                    autoComplete="off"
                    name="code"
                    placeholder="인증 코드"
                    value={code}
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

                <Btn type="button" onClick={onClickSetNewPasswordBtn}>
                  비밀번호 재설정
                </Btn>
              </>
            ) : (
              <>
                <InputBox>
                  <Input
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={changeState}
                  />
                </InputBox>
                <LinkBox>
                  <LoginLink onClick={() => history.push('/login')}>
                    로그인
                  </LoginLink>
                  <SignupLink onClick={() => history.push('/signup')}>
                    회원가입
                  </SignupLink>
                </LinkBox>

                <Btn type="button" onClick={onClickSendCodeBtn}>
                  인증코드 보내기
                </Btn>
              </>
            )}
          </>
        )}
      </Box>
    </FindPage>
  );
}

export default Find;
