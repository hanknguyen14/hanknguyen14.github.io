import * as React from 'react';
import { Wrapper } from './Styled';
import { Content } from '../../components/Content/Loadable';
import { About } from '../../components/About/Loadable';

export function SkillsPage() {
  return (
    <Wrapper>
      <Content>
        <About />
      </Content>
    </Wrapper>
  );
}
