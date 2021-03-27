import * as React from 'react';
import { ColWrapper, ContentWrapper } from './Styled';

type Props = {
  children: React.ReactNode;
};

export function LeftLayout({ children }: Props) {
  return (
    <ColWrapper sm={6} noGutter>
      <ContentWrapper>{children}</ContentWrapper>
    </ColWrapper>
  );
}
