import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { StyledButton } from '../Content/Styled';
import { media } from 'styles/media';

export const StyledModal = Modal.styled`
  padding: 0;
  top: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1043;
  position: fixed;
  outline: none !important;
  left: 0;
  width: 100%;
  margin: 0;

  ${media.small`
    left: 50%;
    width: 720px;
    margin: 0 0 0 -360px;
    overflow: hidden auto;
  `}
`;

export const Container = styled.div`
  padding: 0;
  position: relative;
  height: auto;
  text-align: center;
  width: 100%;
  left: 0;
  top: 0;
  box-sizing: border-box;

  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;

export const ModalBody = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;
  width: 100%;
  cursor: auto;
`;

export const Box = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  margin: 0 0 40px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  text-decoration: none;
  z-index: 1046;
  box-shadow: none;
  touch-action: manipulation;
  overflow: visible;
  cursor: pointer;
  background: 0 0;
  display: block;
  outline: none;
  padding: 0;
  width: 54px;
  height: 54px;
  line-height: 54px;
  font-size: 42px;
  font-weight: 300;
  text-align: center;
  opacity: 1;
  border: none;
  top: 0;
  right: 0;
  user-select: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const ImageWrapper = styled.div`
  padding: 0 0 40px;
  font-size: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Description = styled.div`
  padding: 0 40px;
`;

export const WorkTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const InfoList = styled.div`
  padding-top: 0;
  margin: 30px 0;
`;

export const InfoListUL = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 0;
  list-style: none;
`;

export const InfoListLI = styled.li`
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
    background: radial-gradient(
      ellipse at center,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

export const StrongTag = styled.strong`
  float: left;
  margin-right: 8px;
  padding: 1px 8px;
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  border-radius: 2px;
`;

export const WorkContent = styled.div`
  margin: 0 0 25px;

  p {
    font-size: 16px;
    line-height: 1.8em;
    padding: 0;
    margin: 0 0 25px;
  }

  &:after {
    content: '';
    position: relative;
    clear: both;
    display: block;
  }
`;

export const WorkContentUL = styled.ul`
  list-style: none;
  padding: 0;
`;

export const WorkContentLI = styled.li`
  margin: 8px 0;
  margin-top: 8px;
  padding: 0 0 0 18px;
  position: relative;
  font-weight: 400;

  &:first-child {
    margin-top: 0;
  }

  &:before {
    margin: 0;
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.primaryColor};
    border-radius: 4px;
  }
`;

export const WorkContentImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ViewWorkButton = styled.a`
  ${StyledButton}
`;
