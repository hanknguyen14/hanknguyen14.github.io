import styled, { css } from 'styled-components';
import { User, Phone, Briefcase, Book } from '@styled-icons/boxicons-regular';
import { NavLink } from 'react-router-dom';
import { media } from 'styles/media';
import { CloudDownload } from '@styled-icons/boxicons-regular';

export const Wrapper = styled.div``;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 100%;

  ${media.medium`
    display: initial;
  `}
`;

const SideBarIcon = css`
  color: ${({ theme }) => theme.textColor};
  -o-transition: 0.2s all;
  transition: 0.2s all;
  display: block;
  margin: 0 auto;
`;

export const UserIcon = styled(User)`
  ${SideBarIcon}
`;

export const PhoneIcon = styled(Phone)`
  ${SideBarIcon}
`;

export const BriefcaseIcon = styled(Briefcase)`
  ${SideBarIcon}
`;

export const BookIcon = styled(Book)`
  ${SideBarIcon}
`;

export const CloudDownloadIcon = styled(CloudDownload)`
  ${SideBarIcon}
  color: ${({ theme }) => theme.primary};
`;

export const StyledLink = css`
  padding: 13px 3px;
  position: relative;
  overflow: hidden;
  display: block;
  height: auto;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor};
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
`;

export const StyledNavLink = styled(NavLink)`
  ${StyledLink}

  &.selected {
    color: ${({ theme }) => theme.primary};

    ${UserIcon},
    ${PhoneIcon},
    ${BriefcaseIcon},
    ${BookIcon} {
      color: ${({ theme }) => theme.primary};
    }
  }

  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: -moz-radial-gradient(
      right,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: -webkit-radial-gradient(
      right,
      ellipse cover,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: radial-gradient(
      ellipse at right,
      ${({ theme }) => theme.colors.lightGrey} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }

  ${media.medium`
    &:before {
      content: '';
    }
  `}
`;

export const ListItem = styled.li`
  transition: color 0.3s ease 0s;
  -moz-transition: color 0.3s ease 0s;
  -o-transition: color 0.3s ease 0s;
  margin: 0 10px;

  &:first-child {
    ${StyledNavLink} {
      border-radius: 4px 4px 0 0;
      -moz-border-radius: 4px 4px 0 0;
      -khtml-border-radius: 4px 4px 0 0;
    }
  }

  &:hover {
    ${StyledNavLink} {
      color: ${({ theme }) => theme.primary};
      -o-transition: 0.2s all;
      transition: 0.2s all;
    }

    ${UserIcon},
    ${PhoneIcon},
    ${BriefcaseIcon},
    ${BookIcon} {
      color: ${({ theme }) => theme.primary};
      -o-transition: 0.2s all;
      transition: 0.2s all;
    }
  }

  ${media.medium`
    display: initial;
    margin: 0;
  `}
`;

export const DownloadSection = styled.button`
  ${StyledLink}
  color: ${({ theme }) => theme.primary};
`;
