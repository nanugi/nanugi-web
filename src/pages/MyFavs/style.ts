import styled from 'styled-components';

export const MyFavsPage = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
`;

export const MyFavsContainer = styled.div`
  padding: 20px 27px;

  height: calc(100% - 60px);
  overflow-y: scroll;
`;

export const MainHeader = styled.div`
  margin-bottom: 15px;

  width: 360px;
`;

export const SearchBox = styled.div`
  margin-left: auto;
  border-radius: 10px;

  width: 295px;
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
`;

export const PostImage = styled.div<{ url?: string }>`
  position: relative;

  margin-bottom: 10px;
  border-radius: 10px;

  width: 175px;
  height: 185px;

  cursor: pointer;

  ${(props) =>
    props.url
      ? `background-image: url(${props.url}); background-size: cover; background-position: center center;`
      : `background-color: #C4C4C4; opacity: 0.8;`}
`;
