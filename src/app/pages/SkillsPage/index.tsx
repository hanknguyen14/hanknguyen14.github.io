import * as React from 'react';
import { Wrapper } from './Styled';
import { Content } from '../../components/Content/Loadable';
import { Resume } from '../../components/Resume/Loadable';

export function SkillsPage() {
  return (
    <Wrapper>
      <Content>
        <Resume />
      </Content>
    </Wrapper>
  );
}
