import * as React from 'react';
import { Wrapper } from './Styled';
import { Content } from '../../components/Content/Loadable';
import { Resume } from '../../components/Resume/Loadable';
import { Skills } from '../../components/Skills/Loadable';

export function SkillsPage() {
  return (
    <Wrapper>
      <Content>
        <Resume />
        <Skills />
      </Content>
    </Wrapper>
  );
}
