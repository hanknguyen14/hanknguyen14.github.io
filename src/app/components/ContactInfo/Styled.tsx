import styled from 'styled-components';
import { Section, StyledCol } from '../Content/Styled';

export const Wrapper = styled(Section)``;

export const ContactCol = styled(StyledCol)``;

export const InfoList = styled.div`
  padding-top: 0;
`;

export const UnorderedList = styled.ul`
  padding: 0;
  font-size: 0;
  list-style: none;
  margin: 0 -15px;
`;

export const ListItem = styled.li`
  padding: 11px 15px;
  position: relative;
  font-size: 16px;
  word-break: break-word;
  text-align: right;
  display: inline-block;
  vertical-align: top;
  width: 100%;

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

export const Strong = styled.strong`
  float: left;
  margin-right: 8px;
  padding: 1px 8px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.primary};
`;
