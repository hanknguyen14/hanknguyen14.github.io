import * as React from 'react';
import styled from 'styled-components/macro';
import { Col } from 'styled-bootstrap-grid';

type Props = {
  children: React.ReactNode;
};

export function RightLayout({ children }: Props) {
  return (
    <Wrapper sm={6} noGutter>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled(Col)`
  border: 1px solid black;
`;
