import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import history from '../../utils/browserHistory';
import {
  EmailVerificationPage,
  EmailVerificationContainer,
  Title,
  SubTitle,
  Btn,
} from './style';

import { emailVerification } from '../../container/sign';

const EmailVerification = () => {
  const [afterVerification, setAfterVerification] = useState(false);
  const { code } = useParams<{ code: string }>();

  const init = useMemo(
    () =>
      async function () {
        const res = await emailVerification(code);
        if (res?.success) {
          setAfterVerification(true);
        } else {
          setAfterVerification(true);
        }
      },
    [code],
  );

  useEffect(() => {
    init();
  }, [init]);

  return (
    <EmailVerificationPage>
      <EmailVerificationContainer>
        {afterVerification ? (
          <>
            <Title style={{ marginBottom: '16px' }}>
              인증이 완료되었습니다.
            </Title>

            <SubTitle>회원가입이 완료되었습니다😃</SubTitle>
            <SubTitle style={{ marginBottom: '60px' }}>
              나누기와 함께 친환경 공유소비 생활을 시작해보아요!
            </SubTitle>

            <Btn onClick={() => history.replace('/')}>나누기로 이동하기</Btn>
          </>
        ) : (
          <Title>처리중...</Title>
        )}
      </EmailVerificationContainer>
    </EmailVerificationPage>
  );
};

export default EmailVerification;
