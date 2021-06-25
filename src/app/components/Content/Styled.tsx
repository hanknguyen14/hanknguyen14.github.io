import styled, { css } from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import { media } from 'styles/media';

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

    ${media.medium`
      content: '';
    `}
  }
`;

export const BorderVerticalLineAfter = css`
  &:after {
    margin: 0 0 0 -1px;
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

    ${media.medium`
      content: '';
    `}
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

export const StyledButtonText = styled.span`
  transition: all 0.3s ease 0s;
  padding-left: 14px;
`;

export const StyledButtonArrow = styled.span`
  margin: 0 8px;
  position: relative;
  top: -1px;
  left: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
  transition: all 0.3s ease 0s;
  top: -1px;
  width: 14px;
  height: 2px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease 0s;
  }

  &:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease 0s;
    left: auto;
    top: auto;
    right: 0;
    bottom: 3px;
    width: 8px;
    height: 2px;
    transform: rotate(45deg);
  }
`;

export const StyledButton = css`
  position: relative;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  padding: 0 30px;
  display: inline-block;
  float: none;
  width: auto;
  height: 50px;
  line-height: 50px;
  background: ${({ theme }) => theme.buttonBackground};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};

    ${StyledButtonArrow} {
      &:before,
      &:after {
        background-color: ${({ theme }) => theme.primaryColor};
      }
    }
  }
`;
