import styled from 'styled-components';

export const CurrentImageBox = styled.div`
  position: relative;

  display: inline-flex;

  margin-left: 10px;
  border: 1px #bdbdbd solid;
  border-radius: 10px;

  width: 100px;
  height: 100px;

  overflow: hidden;
`;
export const CurrentImageDelBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;

  width: 20px;
  height: 20px;

  background-color: #fff;

  z-index: 1;
`;
export const Image = styled.div<{ url: string }>`
  /* margin-left: 10px;
  margin-bottom: 6px; */
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center center;
  background-image: ${(props) => `url(${props.url})`};
`;

export const AddImageBtnBox = styled.div`
  display: inline-flex;

  border: 1px #bdbdbd solid;
  border-radius: 10px;

  width: 100px;
  height: 100px;

  vertical-align: top;
`;
export const AddImageBtnInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Icon = styled.div<{ url?: string }>`
  width: 50px;
  height: 50px;

  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${(props) => `url(${props.url})`};
`;
