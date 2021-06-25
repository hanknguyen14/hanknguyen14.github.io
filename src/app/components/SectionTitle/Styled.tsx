import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.headingColor};
  margin: 0;
  padding: 0 0 30px;
  position: relative;
  font-size: 20px;
  line-height: 21px;
  min-height: 51px;
  font-weight: 600;
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    width: 30px;
    height: 30px;
    z-index: -1;
    border-radius: 30px;
    -moz-border-radius: 30px;
    -khtml-border-radius: 30px;
    background: -moz-linear-gradient(
      -45deg,
      rgba(0, 196, 131, 0.15) 0%,
      rgba(0, 196, 131, 0.01) 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      rgba(0, 196, 131, 0.15) 0%,
      rgba(0, 196, 131, 0.01) 100%
    );
    background: linear-gradient(
      135deg,
      rgba(0, 196, 131, 0.15) 0%,
      rgba(0, 196, 131, 0.01) 100%
    );
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: -moz-radial-gradient(
      left,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: -webkit-radial-gradient(
      left,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: radial-gradient(
      ellipse at left,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

export const FirstWord = styled.span`
  color: ${({ theme }) => theme.primaryColor};
`;
