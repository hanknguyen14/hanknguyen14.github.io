import * as React from 'react';
import { Wrapper } from './Styled';
import { MenuList } from '../MenuList/Loadable';

const STICKY_HEADER_OFFSET = 70;

export function SideBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > STICKY_HEADER_OFFSET) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Wrapper isScrolled={isScrolled}>
      <MenuList />
    </Wrapper>
  );
}
