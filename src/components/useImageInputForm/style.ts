import styled from 'styled-components';

import imageDeleteBtn from '../../assets/images/icon/image_delete_btn.png';

export const CurrentImageBox = styled.div`
  position: relative;

  display: inline-flex;

  margin-left: 10px;
  border: 1px #bdbdbd solid;
  border-radius: 10px;

  width: 100px;
  height: 100px;
`;
export const CurrentImage = styled.div`
  border-radius: 10px;
  
  width: 100px;
  height: 100px;

  overflow: hidden;
`;
export const CurrentImageDelBtn = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;

  width: 20px;
  height: 20px;

  background-image: url(${imageDeleteBtn});
  background-size: cover;
  background-position: center center;

  z-index: 1000;

  cursor: pointer;
`;
export const Image = styled.div<{ url: string }>`
  /* margin-left: 10px;
  margin-bottom: 6px; */
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center center;
  background-image: ${props => `url(${props.url})`};
`;

export const AddImageBtnBox = styled.div`
  display: inline-flex;

  border: 1px #bdbdbd solid;
  border-radius: 10px;

  width: 100px;
  height: 100px;

  vertical-align: top;

  cursor: pointer;
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
  background-image: ${props => `url(${props.url})`};
`;

export const ComponentScroll = styled.div`
  margin-bottom: 19px;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;

  padding-top: 10px;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar{
    display: none;
  }
`;