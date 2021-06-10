import * as React from 'react';
import { Wrapper } from './Styled';
import { Content } from '../../components/Content/Loadable';
import { Works } from '../../components/Works/Loadable';

export function WorksPage() {
  return (
    <Wrapper>
      <Content>
        <Works />
      </Content>
    </Wrapper>
  );
}
