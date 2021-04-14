import styled from 'styled-components';
import {
  Section,
  StyledCol,
  BorderVerticalLineAfter,
  BorderHorizontalLine,
  StyledRow,
} from '../Content/Styled';

export const Wrapper = styled(Section)``;

export const BorderRow = styled(StyledRow)`
  ${BorderVerticalLineAfter}
`;

export const BorderCol = styled(StyledCol)`
  ${BorderHorizontalLine}
`;

export const FunFactItem = styled.div`
  text-align: center;
  position: relative;
`;

export const FunFactIcon = styled.div`
  margin: 0 auto;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 32px;
  color: ${({ theme }) => theme.primary};
`;

export const FunFactName = styled.div`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};
`;
