import * as React from 'react';
import {
  Wrapper,
  TextBox,
  InfoList,
  UnorderedList,
  ListItem,
  Strong,
  IntroCol,
  InfoCol,
} from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';
import { Row } from 'styled-bootstrap-grid';

const greeting = 'Hello! I’m Hung Nguyen.';
const introduction = `Full stack developer from Vietnam. I have rich experience in
analysis, development and testing of web applications. I love to talk with you about our unique.`;
const items = [
  { id: 1, title: 'Age', value: '2x' },
  { id: 2, title: 'Residence', value: 'Vietnam' },
  { id: 3, title: 'Freelance', value: 'Available' },
  { id: 4, title: 'Address', value: 'Danang, Vietnam' },
];

export function About() {
  const renderListItems = items.map(item => (
    <ListItem key={item.id}>
      <Strong>
        {' '}
        <span> {item.title}: </span>{' '}
      </Strong>{' '}
      <span> {item.value} </span>
    </ListItem>
  ));

  return (
    <Wrapper>
      <SectionTitle>About Me</SectionTitle>
      <Row>
        <IntroCol sm={12} md={12} lg={6}>
          <TextBox>
            <strong>{greeting}</strong>
            <br /> {introduction}
          </TextBox>
        </IntroCol>
        <InfoCol sm={12} md={12} lg={6}>
          <InfoList>
            <UnorderedList>{renderListItems}</UnorderedList>
          </InfoList>
        </InfoCol>
      </Row>
    </Wrapper>
  );
}
