import styled, { keyframes } from 'styled-components';

const bounceDelay = keyframes`
  0% { transform: scale(0)}
  80% { transform: scale(0)}
  100% { transform: scale(0)}
  40% { transform: scale(1)}
`;

export const SpinnerBox = styled.div`
  & > div{
    margin-right: 5px;

    width: 18px;
    height: 18px;
    background-color: #e2e2e2;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${bounceDelay} 1.4s infinite ease-in-out both;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  }
`;
export const Bounce1 = styled.div`
  animation-delay: -0.32s !important;
`;
export const Bounce2 = styled.div`
  animation-delay: -0.16s !important;
`;
export const Bounce3 = styled.div``;
