import styled from 'styled-components';

export default styled.ul`
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
