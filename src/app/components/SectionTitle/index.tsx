import * as React from 'react';
import { Wrapper, FirstWord } from './Styled';

type Props = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: Props) {
  return (
    <Wrapper>
      <FirstWord />
      <span>{children}</span>
    </Wrapper>
  );
}
