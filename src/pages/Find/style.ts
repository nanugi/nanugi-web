import styled from 'styled-components';

import Page from '../pageStyle';

export const FindPage = styled.div`
  ${Page}

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #f7c46a;
`;

export const Title = styled.div`
  font-size: clamp(100px, 15vw, 250px);
  font-weight: bold;

  color: #f9765a;

  opacity: 0.5;

  user-select: none;
`;

export const Box = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  border-radius: 12px;

  width: 90vw;
  max-width: 420px;

  /* background-color: #fff; */
`;

export const InputBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  border-radius: 12px;

  width: 90vw;
  max-width: 420px;

  /* background-color: #fff; */
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

export const SignupLink = styled.div`
  margin-left: auto;

  color: #0c0000;
  opacity: 0.6;

  text-decoration: none;
  cursor: pointer;
`;

export const Text = styled.div`
  margin-bottom: 40px;

  font-size: clamp(23px, 4vw, 30px);
  font-weight: bold;
`;

export const Btn = styled.button`
  margin-top: 50px;

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