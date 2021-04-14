import styled from 'styled-components';
import {
  Section,
  BorderVerticalLineBefore,
  StyledCol,
} from '../Content/Styled';

export const Wrapper = styled(Section)``;

export const IntroCol = styled(StyledCol)``;

export const InfoCol = styled(StyledCol)`
  ${BorderVerticalLineBefore}
`;

export const TextBox = styled.div``;

export const InfoList = styled.div``;

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 11px 0;
  padding-top: 11px;
  position: relative;
  display: block;
  width: auto;
  font-size: 16px;
  word-break: break-word;
  text-align: right;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    &:before {
      background: none;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      ${({ theme }) => theme.textColor} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      ${({ theme }) => theme.textColor} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: radial-gradient(
      ellipse at center,
      ${({ theme }) => theme.textColor} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

export const Strong = styled.strong`
  float: left;
  margin-right: 8px;
  padding: 1px 8px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -khtml-border-radius: 2px;
  background-color: ${({ theme }) => theme.primary};
`;
