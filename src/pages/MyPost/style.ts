import styled from 'styled-components';

export const MyPostPage = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
`;

export const MyPostContainer = styled.div`
  overflow-y: scroll;

  height: calc(100% - 60px);
`;

export const PostUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0px;
  padding: 0px;

  width: 100%;

  list-style: none;

  &.col-4 {
    & > li {
      width: 25%;
    }
  }
  &.col-2 {
    & > li {
      width: 50%;
    }
  }
  &.col-1 {
    & > li {
      width: 100%;
    }
  }
`;

export const PostLi = styled.li`
  position: relative;

  display: flex;
  justify-content: center;

  margin-bottom: 12px;

  box-sizing: border-box;
`;
export const Divider = styled.div`
  width: 100%;
  height: 10px;

  background-color: #f2f2f2;
`;
export const PostBox = styled.div`
  display: flex;
  flex-direction: row;

  padding: 25px 27px;

  width: 100%;
`;
export const PostImageBox = styled.div`
  margin-right: 15px;
`;

export const PostContents = styled.div``;

export const CloseStatusBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5px;
  border-radius: 4px;

  width: 60px;
  height: 20px;

  color: #11a656;
  font-size: 8px;
  font-weight: bold;

  background: #f2f2f2;

  &.close {
    color: #fff;
    background: #11a656;
  }
`;
