import * as React from 'react';
import {
  Wrapper,
  BorderCol,
  BorderRow,
  FunFactItem,
  FunFactIcon,
  FunFactName,
} from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';
import {
  Football,
  Cake,
  Music,
  Restaurant,
} from '@styled-icons/boxicons-regular';

const items = [
  {
    id: 1,
    icon: () => <Football size="30" />,
    name: 'Most favorite sport: Football',
  },
  {
    id: 2,
    icon: () => <Cake size="30" />,
    name: 'Most entertaining activity: Baking',
  },
  {
    id: 3,
    icon: () => <Music size="30" />,
    name: 'Most exciting genre: EDM',
  },
  {
    id: 4,
    icon: () => <Restaurant size="30" />,
    name: 'Most endless passion: Cuisine',
  },
];

export function FunFacts() {
  const renderBorderItems = items.map(item => (
    <BorderCol sm={6} md={6} lg={6}>
      <FunFactItem key={item.id}>
        <FunFactIcon>{<item.icon />}</FunFactIcon>
        <FunFactName>{item.name}</FunFactName>
      </FunFactItem>
    </BorderCol>
  ));

  return (
    <Wrapper>
      <SectionTitle>Fun Facts</SectionTitle>
      <BorderRow>{renderBorderItems}</BorderRow>
    </Wrapper>
  );
}
