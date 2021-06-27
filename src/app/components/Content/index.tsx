import * as React from 'react';
import { Wrapper } from './Styled';
import { Container, Row, Col } from 'styled-bootstrap-grid';

type Props = {
  children: React.ReactNode;
};

export function Content({ children }: Props) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col sm={12}>{children}</Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
