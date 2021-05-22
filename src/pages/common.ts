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

  width: 100%;
  height: 50px;

  font-size: 15px;

  background: #ffffff;

  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  position: relative;

  margin-bottom: 18px;

  border: none;
  border-radius: 10px;

  width: 100%;
  height: 50px;

  font-size: 17px;
  font-weight: bold;

  cursor: pointer;

  &:active {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.2);
    }
    /* 클릭 시 컬러 */
  }
`;
