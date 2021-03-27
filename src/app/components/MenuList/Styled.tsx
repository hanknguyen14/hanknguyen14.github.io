import styled, { css } from 'styled-components';
import {
  User,
  Phone,
  Briefcase,
  Glasses,
} from '@styled-icons/boxicons-regular';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div``;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 270px;
  overflow: hidden;
`;

export const ListItem = styled.li`
  text-align: center;
  padding: 16px;
`;

const SideBarIcon = css`
  color: ${({ theme }) => theme.colors.lightGrey};
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

export const GlassesIcon = styled(Glasses)`
  ${SideBarIcon}
`;

export const StyledNavLink = styled(NavLink)`
  &.selected {
    ${UserIcon},
    ${PhoneIcon},
    ${BriefcaseIcon},
    ${GlassesIcon} {
      color: ${({ theme }) => theme.colors.primary};
      transform: scale(1.35);
    }
  }
`;
