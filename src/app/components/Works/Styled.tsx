import styled from 'styled-components';
import { Section, StyledCol, BorderVerticalLineAfter } from '../Content/Styled';
import { ShowAlt } from '@styled-icons/boxicons-regular';

export const Wrapper = styled(Section)``;

export const WorkCol = styled(StyledCol)`
  ${BorderVerticalLineAfter}
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 30px;
`;

export const BoxItemImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

export const BoxItemImageLink = styled.a`
  display: block;
  font-size: 0;
`;

export const BoxItemImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  transition: all 0.6s ease 0s;
  -moz-transition: all 0.6s ease 0s;
  -o-transition: all 0.6s ease 0s;
  transform: scale(1);
  min-height: 150px;
  object-fit: cover;
`;

export const BoxItemImageInfo = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  text-align: center;
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: -moz-linear-gradient(
      -45deg,
      rgba(120, 204, 109, 0.5) 0%,
      rgba(120, 204, 109, 0.01) 100%
    );
    background: linear-gradient(
      135deg,
      rgba(120, 204, 109, 0.5) 0%,
      rgba(120, 204, 109, 0.01) 100%
    );
    transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
  }
`;

export const ShowIcon = styled(ShowAlt)`
  margin: -16px 0 0 -16px;
  position: absolute;
  left: 50%;
  top: 50%;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.1s ease-in 0.4s;
  -moz-transition: all 0.1s ease-in 0.4s;
  -o-transition: all 0.1s ease-in 0.4s;
`;

export const Description = styled.div`
  position: relative;
  padding: 15px 0 0;
`;

export const DescriptionLink = styled.a`
  padding: 0;
  display: block;
  font-size: 17px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
  text-transform: none;
  word-break: break-word;
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
`;

export const BoxItem = styled.div`
  position: relative;
  overflow: visible;
  text-align: center;

  &:hover {
    cursor: pointer;

    ${BoxItemImageInfo} {
      opacity: 1;
    }
    ${DescriptionLink} {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
