import * as React from 'react';
import { Wrapper } from './Styled';
import { Content } from '../../components/Content/Loadable';
import { About } from '../../components/About/Loadable';
import { Services } from '../../components/Services/Loadable';

export function HomePage() {
  return (
    <Wrapper>
      <Content>
        <About />
        <Services />
      </Content>
    </Wrapper>
  );
}
