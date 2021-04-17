import styled from 'styled-components';
import {
  Section,
  StyledCol,
  BorderVerticalLineAfter,
  BorderVerticalLineBefore,
  StyledRow,
} from '../Content/Styled';

export const Wrapper = styled(Section)``;

export const BorderRow = styled(StyledRow)`
  ${BorderVerticalLineAfter}
`;

export const BorderCol = styled(StyledCol)`
  ${BorderVerticalLineBefore}
  &:first-child {
    &:before {
      background: none;
    }
  }
`;

export const ClientItem = styled.div`
  padding: 0;
  font-size: 0;
  text-align: center;
`;

export const ClientImage = styled.img`
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  max-width: 100%;
  opacity: 0.4;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
  }
`;
