import styled from 'styled-components';

import Page from '../pageStyle';

export const SignupPage = styled.div`
  ${Page}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #fdc86d;
`;

export const Title = styled.div`
  font-size: clamp(50px, 10vw, 200px);
  font-weight: bold;

  color: #f9765a;

  opacity: 0.5;

  user-select: none;
`;

export const InputBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 90vw;
  max-width: 420px;

  // background-color: #FFF;
`;

export const Input = styled.input`
  margin-bottom: 8px;

  border: solid 1px #dadada;
  border-radius: 6px;

  padding-left: 10px;

  width: 90%;
  height: 45px;

  font-size: 16px;

  background: #fffafa;

  &:focus {
    outline: none;
  }
`;

export const InputName = styled.div`
  display: inline-flex;

  width: 15%;
  margin-right: 3%;

  color: #fffafa;
`;

export const LinkBox = styled.div`
  display: flex;

  margin-top: 10px;

  padding: 0px 12px;

  width: 90vw;
  max-width: 420px;

  color: gray;

  box-sizing: border-box;
`;

export const LoginLink = styled.div`
  color: #0c0000;
  opacity: 0.6;

  text-decoration: none;
  cursor: pointer;
`;

export const FindLink = styled.div`
  margin-left: auto;

  color: #0c0000;
  opacity: 0.6;

  text-decoration: none;
  cursor: pointer;
`;

export const SignupBtn = styled.button`
  margin-top: 60px;

  border: none;
  border-radius: 12px;

  width: 90vw;
  max-width: 420px;
  height: 100px;

  color: #fffafa;
  font-size: 50px;
  font-weight: bold;

  background-color: #f2a663;

  cursor: pointer;

  &.on {
    background-color: #d99559;
    color: #e6e1e1;
  }
`;

export const AfterSignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
`;
export const AfterSignupText1 = styled.div`
  margin-bottom: 40px;

  font-size: clamp(30px, 10vw, 50px);
  font-weight: bold;
`;
export const AfterSignupText2 = styled.div`
  font-size: clamp(23px, 4vw, 30px);
  font-weight: bold;

  &.last {
    margin-bottom: 40px;
  }
`;
export const AfterSignupText3 = styled.div`
  font-size: clamp(15px, 3vw, 20px);
`;

export const LoginLinkBtn = styled.button`
  margin-top: 100px;

  border: none;
  border-radius: 12px;

  width: 220px;
  height: 60px;

  color: #fffafa;
  font-size: 25px;
  font-weight: bold;

  background-color: #f2a663;

  cursor: pointer;

  &.on {
    background-color: #d99559;
    color: #e6e1e1;
  }
`;
