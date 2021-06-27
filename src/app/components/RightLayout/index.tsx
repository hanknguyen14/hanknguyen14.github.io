import * as React from 'react';
import { ColWrapper, ContentWrapper, CardInner, CardWrapper } from './Styled';

type Props = {
  children: React.ReactNode;
};

export function RightLayout({ children }: Props) {
  return (
    <ColWrapper sm={12} md={12} lg={6} noGutter>
      <ContentWrapper>
        <CardInner>
          <CardWrapper>{children}</CardWrapper>
        </CardInner>
      </ContentWrapper>
    </ColWrapper>
  );
}
