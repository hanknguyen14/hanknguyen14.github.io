import styled, { keyframes } from 'styled-components';
import { media } from 'styles/media';

type SideBarType = {
  isScrolled: boolean;
};

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.header`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: center;
  background-color: ${({ theme }) => theme.bodyBackground};
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  z-index: 20;
  text-align: center;
  border-radius: 4px;
  height: max-content;
  position: ${(props: SideBarType) =>
    props.isScrolled ? 'fixed' : 'absolute'};
  top: ${(props: SideBarType) => (props.isScrolled ? 0 : 'unset')};
  left: ${(props: SideBarType) => (props.isScrolled ? 0 : 'unset')};
  animation: ${(props: SideBarType) => (props.isScrolled ? slideIn : 'unset')}
    1s;

  ${media.medium`
    width: 72px;
    flex-basis: 70px;
    flex-direction: column;
    position: unset;
    justify-content: space-between;
    margin-right: 10px;
  `};
`;
