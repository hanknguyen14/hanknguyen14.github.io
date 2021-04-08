import * as React from 'react';
import { ColWrapper, ContentWrapper, CardInner, CardWrapper } from './Styled';

type Props = {
  children: React.ReactNode;
};

export function RightLayout({ children }: Props) {
  return (
    <ColWrapper sm={6} noGutter>
      <ContentWrapper>
        <CardInner>
          <CardWrapper>{children}</CardWrapper>
        </CardInner>
      </ContentWrapper>
    </ColWrapper>
  );
}
