import styled from 'styled-components';
import {
  Section,
  StyledCol,
  BorderVerticalLineAfter,
  BorderVerticalLineBefore,
  StyledRow,
  BorderHorizontalLine,
} from '../Content/Styled';
import { media } from 'styles/media';

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
  ${BorderHorizontalLine}

  ${media.medium`
    &:after {
      content: none;
    }
  `}
`;

export const ClientImage = styled.img`
  height: auto;
  max-width: 100px;
  border: none;
  border-radius: 0;
  box-shadow: none;
  opacity: 0.4;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
  }
`;
