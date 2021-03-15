import styled, { css } from 'styled-components';

export const Page = css`
  padding: 20px 27px;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 18px;

  border: solid 1px #e0e0e0;
  border-radius: 10px;

  padding-left: 23px;

  width: 360px;
  height: 50px;

  font-size: 15px;

  background: #ffffff;

  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin-bottom: 18px;

  border: none;
  border-radius: 10px;

  width: 360px;
  height: 50px;

  font-size: 17px;
  font-weight: bold;

  cursor: pointer;

  &.on {
    /* 클릭 시 컬러 */
  }
`;
