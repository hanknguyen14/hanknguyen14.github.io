import React, { useState } from 'react';
import {
  Wrapper,
  WorkCol,
  BoxItem,
  BoxItemImageWrapper,
  BoxItemImageLink,
  BoxItemImage,
  BoxItemImageInfo,
  ShowIcon,
  Description,
  DescriptionLink,
} from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';
import { StyledRow } from '../Content/Styled';
import { WorksModal } from '../WorksModal/Loadable';

const works = [
  {
    id: 0,
    title: 'Clickvoyant Analytics',
    image: 'work-clickvoyant.png',
    techStack: 'Node, React, MongoDB',
    teamSize: '5+',
    role: 'Backend Developer',
    introduction:
      'Clickvoyant is an AI-powered analytics software that automates presentations in a single click.',
    features: [
      'Create a system that allows scheduling to send periodic reports.',
      'Process data to export to Powerpoint files.',
      'Integrate with data source analytics.',
    ],
    link: 'https://clickvoyant.com',
  },
  {
    id: 1,
    title: 'Rappler News Website',
    image: 'work-rappler.png',
    techStack: 'Node, React, CMS, Elasticsearch, Microservices',
    teamSize: '10+',
    role: 'Fullstack Developer',
    introduction: `Rappler is the Philippines's leading digital news website with millions of views per day.`,
    features: [
      'Build a system that can serve thousands of people at once and millions of visits in a day.',
      'Set up an online writing system that allows hundreds of journalists, reporters and editors to work at the same time.',
      'Implement data search system containing thousands of articles to both serve readers and journalists in the most optimal way.',
    ],
    link: 'https://rappler.com',
  },
  {
    id: 2,
    title: 'Coconene',
    image: 'work-coconene.png',
    techStack: 'Wordpress',
    teamSize: '5+',
    role: 'Developer',
    introduction:
      'CocoNene is a Hawaii lifestyle brand offering locally made gifts and home decor.',
    features: [
      'Build an e-commerce site with an eye-catching and user-friendly interface.',
      'Provide a simple and convenient product management system.',
      `Implement a feature to customize products according to customer's preferences and provide visual preview images.`,
    ],
    link: 'https://coconene.com',
  },
  {
    id: 3,
    title: 'Asteroid Day',
    image: 'work-asteroidday.png',
    techStack: 'Wordpress',
    teamSize: '5+',
    role: 'Developer',
    introduction:
      'Asteroid Day is a UN-sanctioned global awareness campaign participated annually on 30 June.',
    features: [
      'Implement a system that allows searching, organizing and RSVP event.',
      'Create a friendly UI to help users follow live stream events, events information such as news, timing and speakers in an intuitive way.',
      'Provide a system for administrators to easily manage event information.',
    ],
    link: 'https://asteroidday.org',
  },
];

export function Works() {
  const [isOpen, setIsOpen] = useState(false);
  const [work, setWork] = useState({});

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (workId: number) => {
    toggleModal();
    setWork(works[workId]);
  };

  const renderWorkItems = works.map(({ id, image, title }) => (
    <WorkCol sm={12} md={6} lg={6} key={id}>
      <BoxItem>
        <BoxItemImageWrapper>
          <BoxItemImageLink onClick={() => handleClick(id)}>
            <BoxItemImage src={image} />
            <BoxItemImageInfo>
              <ShowIcon size="32" />
            </BoxItemImageInfo>
          </BoxItemImageLink>
        </BoxItemImageWrapper>
        <Description>
          <DescriptionLink>{title}</DescriptionLink>
        </Description>
      </BoxItem>
    </WorkCol>
  ));

  return (
    <Wrapper>
      <SectionTitle>Works</SectionTitle>
      <StyledRow>{renderWorkItems}</StyledRow>
      <WorksModal isOpen={isOpen} toggleModal={toggleModal} work={work} />
    </Wrapper>
  );
}
