import * as React from 'react';
import { Wrapper, DownloadSection } from './Styled';
import { MenuList } from '../MenuList/Loadable';
import { CloudDownload } from '@styled-icons/boxicons-regular';

export function SideBar() {
  return (
    <Wrapper>
      <MenuList />
      <DownloadSection
        as="a"
        href="/CV-Nguyen-Manh-Hung.pdf"
        target="_blank"
        download
      >
        <CloudDownload size="40" />
      </DownloadSection>
    </Wrapper>
  );
}
