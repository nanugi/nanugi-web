import styled from 'styled-components';

import { Button } from '../common';

export const PostWritePage = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
`;
export const LoadingModal = styled.div`
  position: absolute;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);

  z-index: 10;
`;
export const LoadingModalText = styled.div`
  margin-bottom: 10px;

  color: #e2e2e2;
  font-size: 17px;
  font-weight: bold;
`;

export const PostWriteForm = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px 27px;

  height: calc(100% - 105px);
`;

export const ImageForm = styled.div`
  display: flex;

  margin-bottom: 20px;
`;
export const ImageInput = styled.div`
  border-radius: 10px;
  border: 1px solid #bdbdbd;

  width: 100px;
  height: 100px;
`;
export const Image = styled.div`
  margin-left: 10px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;

  width: 100px;
  height: 100px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;

  & > input {
    width: calc(50% - 5px);
  }
`;
export const Input = styled.input`
  margin-bottom: 17px;
  padding-left: 20px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;

  width: 100%;
  height: 50px;

  font-size: 15px;

  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;
export const Textarea = styled.textarea`
  flex-grow: 1;

  margin-bottom: 17px;
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;

  width: 100%;

  font-size: 15px;

  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const WriteBtn = styled(Button)`
  margin-bottom: 9px;

  color: #ffffff;
  background-color: #11a656;
`;

export const ModifyBtn = styled(Button)`
  margin-bottom: 9px;

  color: #ffffff;
  background-color: #11a656;
`;
