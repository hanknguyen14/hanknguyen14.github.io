import styled from 'styled-components';
import { Col } from 'styled-bootstrap-grid';

export const ColWrapper = styled(Col)`
  border: 1px solid black;
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const CardInner = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bodyBackground};
  transform-origin: center left;
  z-index: 8;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -khtml-border-radius: 4px;
  transition: visibility 1s linear, opacity 0s linear;
  -moz-transition: visibility 1s linear, opacity 0s linear;
  -o-transition: visibility 1s linear, opacity 0s linear;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 20px;
    height: 30px;
    background: ${({ theme }) => theme.bodyBackground};
    z-index: 10;
  }
`;

export const CardWrapper = styled.div`
  height: 100%;
  overflow: auto;
  overflow-x: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 30px 30px 0;
  position: relative;
`;
