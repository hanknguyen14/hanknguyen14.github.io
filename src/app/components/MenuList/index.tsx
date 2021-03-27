import * as React from 'react';
import {
  Wrapper,
  UnorderedList,
  ListItem,
  UserIcon,
  PhoneIcon,
  BriefcaseIcon,
  GlassesIcon,
  StyledNavLink,
} from './Styled';

const routes = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: () => <UserIcon size="30">Home</UserIcon>,
  },
  {
    id: 2,
    title: 'Contact',
    path: '/contact',
    icon: () => <PhoneIcon size="30">Contact</PhoneIcon>,
  },
  {
    id: 3,
    title: 'My works',
    path: '/my-works',
    icon: () => <BriefcaseIcon size="30">My works</BriefcaseIcon>,
  },
  {
    id: 4,
    title: 'My skills',
    path: '/my-skills',
    icon: () => <GlassesIcon size="30">My skills</GlassesIcon>,
  },
];

export function MenuList() {
  const renderListItems = routes.map(route => (
    <ListItem key={route.id}>
      <StyledNavLink exact to={route.path} activeClassName="selected">
        {<route.icon />}
      </StyledNavLink>
    </ListItem>
  ));

  return (
    <Wrapper>
      <UnorderedList>{renderListItems}</UnorderedList>
    </Wrapper>
  );
}
