import styled from 'styled-components'
import { Button } from '../common'

export const LandingPagePage = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
`;

export const PageContainer = styled.div<{ height: number, color?: string }>`
  ${props => `height: ${props.height}px; ${props.color && `background-color: ${props.color};`}`}
  width: 100%;
  position: relative;
`;

export const Page1Title = styled.div`
  font-family: Noto Sans KR;
  font-weight: bolder;
  color: white;
  text-align: center;
  font-size: 32px;
  padding-top: 12px;
`;

export const Page1Desc = styled.div`
  font-family: Noto Sans KR;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
`

export const Page2Title = styled.div`
  font-family: Noto Sans KR;
  font-weight: bold;
  color: white;
  text-align: left;
  font-size: 29px;
  padding-top: 58px;
  padding-left: 40px;
  padding-right: 40px;
  z-index: 1;
`;

export const Page3Title = styled.div`
  font-family: Noto Sans KR;
  font-weight: bold;
  color: #11A656;
  text-align: center;
  font-size: 29px;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 1;
`;

export const Page3Desc = styled.div`
  font-family: Noto Sans KR;
  color: black;
  text-align: center;
  font-size: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const StartBtn = styled(Button)`
  position: absolute;
  width: 90%;
  bottom: 20px;
  left: 5%;
  margin: 0 auto;
  display: block;
  color: #11A656;
  background-color: #F2F2F2;
`;
