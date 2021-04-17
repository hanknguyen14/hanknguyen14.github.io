import styled, { css } from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';

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

export const StyledRow = styled(Row)`
  margin: 0 -15px;
  position: relative;
`;

export const StyledCol = styled(Col)`
  padding: 15px;
  position: relative;
  display: inline-block;
  font-size: 16px;
`;

export const BorderVerticalLineBefore = css`
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
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: -webkit-radial-gradient(
      top,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: radial-gradient(
      ellipse at top,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

export const BorderVerticalLineAfter = css`
  &:after {
    margin: 0 0 0 -1px;
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: -moz-radial-gradient(
      top,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: -webkit-radial-gradient(
      top,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: radial-gradient(
      ellipse at top,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

export const BorderHorizontalLine = css`
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: radial-gradient(
      ellipse at center,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;
