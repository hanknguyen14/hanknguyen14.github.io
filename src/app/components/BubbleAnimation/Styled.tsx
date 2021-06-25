import styled from 'styled-components/macro';

export const BackgroundGradient = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #3c787e;
  background: linear-gradient(
    to bottom right,
    #3c787e 0%,
    ${({ theme }) => theme.primaryColor} 100%
  );
`;

export const BackgroundBubbles = styled.ul`
  list-style: disc;
  list-style-position: outside;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-left: 0;
  list-style-position: inside;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Bubble = styled.li`
  position: absolute;
  list-style: none;
  display: block;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  bottom: -320px;
  animation: square 50s infinite;
  transition-timing-function: linear;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -khtml-border-radius: 4px;

  &:nth-child(1) {
    left: 10%;
  }

  &:nth-child(2) {
    left: 20%;
    width: 160px;
    height: 160px;
    animation-delay: 2s;
    animation-duration: 34s;
  }

  &:nth-child(3) {
    left: 25%;
    animation-delay: 4s;
  }

  &:nth-child(4) {
    left: 40%;
    width: 120px;
    height: 120px;
    animation-duration: 44s;
  }

  &:nth-child(5) {
    left: 70%;
  }

  &:nth-child(6) {
    left: 80%;
    width: 240px;
    height: 240px;
    animation-delay: 3s;
  }

  &:nth-child(7) {
    left: 32%;
    width: 320px;
    height: 320px;
    animation-delay: 7s;
  }

  &:nth-child(8) {
    left: 55%;
    width: 40px;
    height: 40px;
    animation-delay: 15s;
    animation-duration: 80s;
  }

  &:nth-child(9) {
    left: 25%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 80s;
  }

  &:nth-child(10) {
    left: 90%;
    width: 320px;
    height: 320px;
    animation-delay: 22s;
  }

  @keyframes square {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1500px) rotate(600deg);
    }
  }
`;
