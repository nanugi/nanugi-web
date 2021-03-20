import styled from 'styled-components';

import leftArrow from '../../assets/images/icon/left_arrow.png';

export const TopHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e0e0e0;

  width: 100%;
  height: 55px;

  box-sizing: border-box;
`;

export const BackBtn = styled.div`
  position: absolute;
  left: 24px;

  width: 25px;
  height: 25px;

  background-image: url(${leftArrow});
  background-repeat: no-repeat;
  background-position: center center;
`;

export const PageName = styled.div`
  width: 100%;

  color: #11a656;
  font-size: 17px;
  font-weight: bold;

  text-align: center;
`;
