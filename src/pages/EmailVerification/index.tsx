import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import history from '../../utils/browserHistory';
import {
  EmailVerificationPage,
  ContentsBox,
  TypingEffectText,
  Filter,
  SlothVideo,
  Btn,
} from './style';

import { emailVerification } from '../../container/sign';

const texts = ['...인증', '..되었습니다..'];

interface typingEffectProps {
  check: boolean;
  callback: () => void;
}
const TypingEffect = ({ check, callback }: typingEffectProps) => {
  const time = useRef(0);
  const ref = useRef({} as HTMLHeadingElement);
  const handleRef = useRef({} as NodeJS.Timeout);

  // console.log('TypingEffect : ', check);

  useEffect(() => {
    const between = '.';
    const speed = 800;

    clearTimeout(handleRef.current);

    const typeWriter = () => {
      // console.log(`time: ${time.current}, check: ${check}`);

      let step = -1;
      if (texts[0].length > time.current) step = 0;
      else if (!check) step = 1;
      else step = 2;

      let char = '';
      switch (step) {
        case 0:
          char = texts[0].charAt(time.current);
          time.current += 1;
          break;
        case 1:
          char = between;
          break;
        case 2:
          char = texts[1].charAt(time.current - texts[0].length);
          time.current += 1;
          break;
        default:
      }

      // console.log(`step: ${step}, char: ${char}`);

      ref.current.innerHTML += char;
      if (time.current <= texts[0].length + texts[1].length)
        handleRef.current = setTimeout(typeWriter, speed);
      else callback();
    };
    typeWriter();
  }, [check, callback]);

  return (
    <TypingEffectText ref={ref}>{/* TypingEffect Text */}</TypingEffectText>
  );
};

const BackgroundGif = () => (
  <SlothVideo loop autoPlay muted playsInline>
    <source
      src="https://thumbs.gfycat.com/AdventurousPointlessGull-mobile.webm"
      type="video/webm"
    />
    <source
      src="https://thumbs.gfycat.com/AdventurousPointlessGull-mobile.mp4"
      type="video/mp4"
    />
  </SlothVideo>
);

const EmailVerification = () => {
  const [btnVisible, setBtnVisible] = useState(false);
  const [afterVerification, setAfterVerification] = useState(false);
  const { code } = useParams<{ code: string }>();

  const init = useMemo(
    () =>
      async function () {
        const res = await emailVerification(code);
        if (res?.success) {
          setAfterVerification(true);
        } else {
          texts[1] = '에..실패..했습니다..';
          setAfterVerification(true);
        }
      },
    [code],
  );

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <EmailVerificationPage>
        <ContentsBox>
          <TypingEffect
            check={afterVerification}
            callback={() => {
              setBtnVisible(true);
            }}
          />
          {btnVisible ? (
            <Btn onClick={() => history.replace('/')}>로그인하러 가기</Btn>
          ) : (
            <></>
          )}
        </ContentsBox>

        <BackgroundGif />

        <Filter opacity={btnVisible ? 0.8 : 0.7} />
      </EmailVerificationPage>
    </>
  );
};

export default EmailVerification;
