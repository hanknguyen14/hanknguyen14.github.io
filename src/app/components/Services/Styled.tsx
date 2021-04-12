import styled, { css } from 'styled-components';
import {
  Section,
  StyledCol,
  BorderHorizontalLine,
  StyledRow,
} from '../Content/Styled';

export const Wrapper = styled(Section)``;

const BorderVerticalLine = css`
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

export const BorderRow = styled(StyledRow)`
  ${BorderVerticalLine}
`;

export const BorderCol = styled(StyledCol)`
  ${BorderHorizontalLine}
`;

export const ServiceItem = styled.div`
  text-align: center;
`;

export const ServiceIcon = styled.div`
  margin: 0 auto;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 60px;
  -moz-border-radius: 60px;
  -khtml-border-radius: 60px;
`;

export const ServiceName = styled.div`
  margin: 10px 0 5px;
  font-size: 17px;
  color: ${({ theme }) => theme.headingColor};
  font-weight: 500;
`;

export const ServiceDescription = styled.div`
  color: ${({ theme }) => theme.textColor};
`;
