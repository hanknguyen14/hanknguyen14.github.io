import * as React from 'react';
import {
  Wrapper,
  BorderCol,
  BorderRow,
  ClientItem,
  ClientImage,
} from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';

const items = [
  {
    id: 1,
    href: '#',
    src: '/client-oven-logo.png',
    alt: 'Oven client',
  },
  {
    id: 2,
    href: '#',
    src: 'client-oven-logo.png',
    alt: 'Oven client',
  },
  {
    id: 3,
    href: '#',
    src: 'client-oven-logo.png',
    alt: 'Oven client',
  },
  {
    id: 4,
    href: '#',
    src: 'client-oven-logo.png',
    alt: 'Oven client',
  },
];

export function Clients() {
  const renderBorderItems = items.map(item => (
    <BorderCol sm={12} md={6} lg={3} key={item.id}>
      <ClientItem>
        <a href={item.href}>
          <ClientImage src={item.src} alt={item.alt} />
        </a>
      </ClientItem>
    </BorderCol>
  ));

  return (
    <Wrapper>
      <SectionTitle>Clients</SectionTitle>
      <BorderRow>{renderBorderItems}</BorderRow>
    </Wrapper>
  );
}
