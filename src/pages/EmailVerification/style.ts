import styled from 'styled-components';

export const EmailVerificationPage = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  overflow: hidden;
`;

export const EmailVerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  color: #11a656;
  font-size: 35px;
  font-weight: bold;
`;
export const SubTitle = styled.div`
  font-size: 20px;
`;

export const ContentsBox = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  z-index: 1000;
`;

export const Filter = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${(props) => `rgba(0, 0, 0, ${props.opacity})`};

  z-index: 100;
`;
export const TypingEffectText = styled.h1`
  font-size: clamp(32px, 6vw, 100px);

  color: #ffffff;
`;

export const SlothVideo = styled.video`
  position: relative;
  top: -18vh;

  height: 136vh;
  width: 100vw;

  object-fit: cover;
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;
  padding: 0px 110px;
  height: 50px;

  color: #11a656;
  font-size: 17px;
  font-weight: bold;

  background-color: #f2f2f2;

  cursor: pointer;
`;
