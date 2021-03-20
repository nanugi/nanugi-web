import styled from 'styled-components';

export const NavigationBarBox = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-around;

  width: 100vw;
  height: 60px;

  background-color: #f2f2f2;
`;
export const NavigationBarIconBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  cursor: pointer;
`;
export const NavigationBarIcon = styled.div<{ icon: string }>`
  margin-bottom: 6px;

  width: 25px;
  height: 25px;

  background-image: ${(props) => `url(${props.icon})`};
`;
export const NavigationBarIconLabel = styled.div`
  font-size: 8px;
  color: #828282;

  &.on {
    color: #11a656;
  }
`;
