import styled, { css } from 'styled-components';
import { Col } from 'styled-bootstrap-grid';

export const Wrapper = styled.div`
  position: relative;
`;

export const Section = styled.div`
  margin: 0 0 40px;
  margin-bottom: 40px;
  position: relative;

  &:last-child {
    margin-bottom: 30px;
  }
`;

export const StyledCol = styled(Col)`
  padding: 15px;
  position: relative;
  display: inline-block;
  font-size: 16px;
`;

export const BorderVerticalLine = css`
  &:before {
    content: '';
    position: absolute;
    left: -1px;
    top: 0;
    width: 1px;
    height: 100%;
    background: -moz-radial-gradient(
      top,
      ellipse cover,
      ${({ theme }) => theme.textColor} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: -webkit-radial-gradient(
      top,
      ellipse cover,
      ${({ theme }) => theme.textColor} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: radial-gradient(
      ellipse at top,
      ${({ theme }) => theme.textColor} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;
