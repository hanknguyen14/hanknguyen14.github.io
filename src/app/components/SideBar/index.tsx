import * as React from 'react';
import { Wrapper } from './Styled';
import { MenuList } from '../MenuList/Loadable';

export function SideBar() {
  return (
    <Wrapper>
      <MenuList />
    </Wrapper>
  );
}
