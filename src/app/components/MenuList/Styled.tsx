import styled, { css } from 'styled-components';
import { User, Phone, Briefcase, Book } from '@styled-icons/boxicons-solid';
import { NavLink } from 'react-router-dom';
import { StyledLink } from '../SideBar/Styled';

export const Wrapper = styled.div``;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SideBarIcon = css`
  color: ${({ theme }) => theme.textColor};
  -webkit-transition: 0.2s all;
  -o-transition: 0.2s all;
  transition: 0.2s all;
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
    content: '';
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
`;

export const ListItem = styled.li`
  transition: color 0.3s ease 0s;
  -moz-transition: color 0.3s ease 0s;
  -o-transition: color 0.3s ease 0s;

  &:first-child {
    ${StyledNavLink} {
      border-radius: 4px 4px 0 0;
      -moz-border-radius: 4px 4px 0 0;
      -webkit-border-radius: 4px 4px 0 0;
      -khtml-border-radius: 4px 4px 0 0;
    }
  }

  &:hover {
    ${StyledNavLink} {
      color: ${({ theme }) => theme.primary};
      -webkit-transition: 0.2s all;
      -o-transition: 0.2s all;
      transition: 0.2s all;
    }

    ${UserIcon},
    ${PhoneIcon},
    ${BriefcaseIcon},
    ${BookIcon} {
      color: ${({ theme }) => theme.primary};
      -webkit-transition: 0.2s all;
      -o-transition: 0.2s all;
      transition: 0.2s all;
    }
  }
`;
