import * as React from 'react';
import styled from 'styled-components/macro';
import { StyledContainer, StyledRow } from './Styled';

type Props = {
  children: React.ReactNode;
};

export function MainWrapper({ children }: Props) {
  return (
    <SiteContent>
      <SiteContentInner>
        <StyledContainer>
          <StyledRow>{children}</StyledRow>
        </StyledContainer>
      </SiteContentInner>
    </SiteContent>
  );
}

const SiteContent = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

const SiteContentInner = styled.div`
  height: 100%;
  padding-top: 0;

  @media (min-width: 767px) and (max-width: 992px) {
    height: 98%;
    padding-top: 1%;
  }

  @media (min-width: 992px) and (max-width: 1440px) {
    height: 94%;
    padding-top: 3%;
  } ;
`;
