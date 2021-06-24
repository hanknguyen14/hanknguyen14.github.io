import * as React from 'react';
import {
  Wrapper,
  BorderCol,
  BorderRow,
  ServiceItem,
  ServiceIcon,
  ServiceName,
  ServiceDescription,
} from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';
import {
  CodeAlt,
  Cog,
  WindowAlt,
  CopyAlt,
} from '@styled-icons/boxicons-regular';

const items = [
  {
    id: 1,
    icon: () => <CodeAlt size="30" />,
    name: 'Web Development',
    description:
      'Modern and mobile-ready website that will help you reach all of your marketing.',
  },
  {
    id: 2,
    icon: () => <Cog size="30" />,
    name: 'Backend Development',
    description:
      'Building a product that works seamlessly, meet market needs and creating an enjoyable user experience.',
  },
  {
    id: 3,
    icon: () => <WindowAlt size="30" />,
    name: 'Frontend Development',
    description:
      'Providing front-end architecture and design services to build top-class solutions to meet your business needs.',
  },
  {
    id: 4,
    icon: () => <CopyAlt size="30" />,
    name: 'CMS Development',
    description:
      'Delivering prompt and professional theming services for popular CMS platforms.',
  },
];

export function Services() {
  const renderBorderItems = items.map(item => (
    <BorderCol sm={12} md={6} lg={6} key={item.id}>
      <ServiceItem>
        <ServiceIcon>{<item.icon />}</ServiceIcon>
        <ServiceName>{item.name}</ServiceName>
        <ServiceDescription>{item.description}</ServiceDescription>
      </ServiceItem>
    </BorderCol>
  ));

  return (
    <Wrapper>
      <SectionTitle>My Services</SectionTitle>
      <BorderRow>{renderBorderItems}</BorderRow>
    </Wrapper>
  );
}
