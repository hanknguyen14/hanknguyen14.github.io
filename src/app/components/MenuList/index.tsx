import * as React from 'react';
import {
  Wrapper,
  UnorderedList,
  ListItem,
  UserIcon,
  PhoneIcon,
  BriefcaseIcon,
  BookIcon,
  StyledNavLink,
} from './Styled';

const routes = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: () => <UserIcon size="30" />,
  },
  {
    id: 2,
    title: 'Contact',
    path: '/contact',
    icon: () => <PhoneIcon size="30" />,
  },
  {
    id: 3,
    title: 'Works',
    path: '/works',
    icon: () => <BriefcaseIcon size="30" />,
  },
  {
    id: 4,
    title: 'Skills',
    path: '/skills',
    icon: () => <BookIcon size="30" />,
  },
];

export function MenuList() {
  const renderListItems = routes.map(route => (
    <ListItem key={route.id}>
      <StyledNavLink exact to={route.path} activeClassName="selected">
        {<route.icon />}
        {route.title}
      </StyledNavLink>
    </ListItem>
  ));

  return (
    <Wrapper>
      <UnorderedList>{renderListItems}</UnorderedList>
    </Wrapper>
  );
}
