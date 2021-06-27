import React from 'react';
import {
  Wrapper,
  ContactCol,
  InfoList,
  UnorderedList,
  ListItem,
  Strong,
} from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';
import { StyledRow } from '../Content/Styled';

const items = [
  { id: 1, title: 'Email', value: 'hungnguyen.dhg@gmail.com' },
  { id: 2, title: 'Phone', value: '(+84) 908 235 318' },
  { id: 3, title: 'Address', value: 'Danang, Vietnam' },
  { id: 4, title: 'Freelance', value: 'Available' },
];

export function ContactInfo() {
  const renderListItems = items.map(item => (
    <ListItem key={item.id}>
      <Strong>
        {' '}
        <span>{item.title}:</span>{' '}
      </Strong>{' '}
      <span>{item.value}</span>
    </ListItem>
  ));

  return (
    <Wrapper>
      <SectionTitle>Get in Touch</SectionTitle>
      <StyledRow>
        <ContactCol sm={12} md={12} lg={12}>
          <InfoList>
            <UnorderedList>{renderListItems}</UnorderedList>
          </InfoList>
        </ContactCol>
      </StyledRow>
    </Wrapper>
  );
}
