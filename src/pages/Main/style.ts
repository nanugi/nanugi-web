import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

export const MainPage = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  padding: 20px 27px;

  height: calc(100% - 100px);
  overflow-y: scroll;
`;

export const MainHeader = styled.div`
  display: flex;

  margin-bottom: 15px;

  width: 100%;
`;

export const MainLogo = styled.div`
  width: 91px;
  height: 36px;

  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`;

export const SearchBox = styled.div`
  margin-left: auto;
  border-radius: 10px;

  width: calc(100% - 100px);
  height: 35px;

  background-color: #f2f2f2;
`;
export const SearchInput = styled.input`
  border: none;
  padding-left: 12px;

  width: 100%;
  height: 100%;

  font-size: 12px;

  background-color: rgba(0, 0, 0, 0);
  /* background-color: red; */

  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const PostLi = styled.li`
  position: relative;

  display: flex;
  justify-content: center;

  margin-bottom: 12px;

  box-sizing: border-box;
`;

export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
`;
