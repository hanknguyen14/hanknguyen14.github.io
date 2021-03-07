import * as React from 'react';
import styled from 'styled-components/macro';

type Props = {
  children: React.ReactNode;
};

export function RightLayout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  border: 1px solid black;
`;
