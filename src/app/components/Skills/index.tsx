import React, { useRef, useState, useEffect } from 'react';
import {
  Wrapper,
  SkillCol,
  SkillTitle,
  KnowledgeIcon,
  CodingIcon,
  PersonalSkillsIcon,
  BorderVerticalCol,
  SkillName,
  SkillUl,
  SkillLi,
  SkillItemName,
  SkillProgress,
  SkillProgressPercent,
  SkillProgressDotted,
  SkillProgressDottedPercent,
  DottedActive,
  DottedActiveChild,
  DottedBackground,
  DottedBackgroundChild,
  SkillListUl,
  SkillListLi,
  SkillListItemName,
  SkillListItemSpan,
  CheckIcon,
} from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';
import { StyledRow } from '../Content/Styled';

type ItemType = {
  id: number;
  name: string;
  percent?: string;
};

const codingItems: ItemType[] = [
  {
    id: 1,
    name: 'Node JS',
    percent: '100%',
  },
  {
    id: 2,
    name: 'PHP',
    percent: '90%',
  },
  {
    id: 3,
    name: 'SQL',
    percent: '90%',
  },
  {
    id: 4,
    name: 'NoSQL',
    percent: '90%',
  },
  {
    id: 5,
    name: 'React JS',
    percent: '70%',
  },
];

const personalSkillsItems: ItemType[] = [
  {
    id: 1,
    name: 'Teamwork',
    percent: '100%',
  },
  {
    id: 2,
    name: 'Communication',
    percent: '100%',
  },
  {
    id: 3,
    name: 'Problem Solving',
    percent: '90%',
  },
  {
    id: 4,
    name: 'Adaptability',
    percent: '80%',
  },
  {
    id: 5,
    name: 'Interpersonal',
    percent: '80%',
  },
];

const summaryItems: ItemType[] = [
  {
    id: 1,
    name: `Strong experience with NodeJS and
    frameworks such as Express, NestJS.`,
  },
  {
    id: 2,
    name: `Strong hands-on experience with
    SQL/NoSQL databases like MongoDB, Redis,
    Postgres, S3.`,
  },
  {
    id: 3,
    name: `Extensive experience in developing API
    using RESTful.`,
  },
  {
    id: 4,
    name: `Strong experience in using Jest unit testing
    framework.`,
  },
  {
    id: 5,
    name: `Hands-on experience with React, Redux.`,
  },
  {
    id: 6,
    name: `Experience in developing Microservices
    architecture.`,
  },
  {
    id: 7,
    name: `Experience in using Docker.`,
  },
  {
    id: 8,
    name: `Strong knowledge on application
    development using Agile/Scrum.`,
  },
  {
    id: 9,
    name: `Excellent team player with good analytical, strategic planning
    and interpersonal and communication skills.`,
  },
  {
    id: 10,
    name: `Experience working on all-English
    environment.`,
  },
];

const LineProgressItems = (items: ItemType[]) => {
  return items.map(({ id, name, percent = '100%' }) => (
    <SkillLi key={id}>
      <SkillItemName>
        <span>{name}</span>
      </SkillItemName>
      <SkillProgress>
        <SkillProgressPercent percent={percent}></SkillProgressPercent>
      </SkillProgress>
    </SkillLi>
  ));
};

const DottedProgressItems = (items: ItemType[]) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const progressOffsetWidth = progressRef?.current?.offsetWidth;
  const [dottedWidth, setDottedWidth] = useState(0);

  useEffect(() => {
    if (progressRef.current) {
      setDottedWidth(progressRef.current.offsetWidth);
    }
  }, [progressOffsetWidth]);

  return items.map(({ id, name, percent = '100%' }: ItemType) => (
    <SkillLi key={id}>
      <SkillItemName>
        <span>{name}</span>
      </SkillItemName>
      <SkillProgressDotted ref={progressRef}>
        <SkillProgressDottedPercent percent={percent}>
          <DottedActive width={dottedWidth}>
            {[...Array(10)].map((value, index) => (
              <DottedActiveChild key={index}>{value}</DottedActiveChild>
            ))}
          </DottedActive>
        </SkillProgressDottedPercent>
        <DottedBackground>
          {[...Array(10)].map((value, index) => (
            <DottedBackgroundChild key={index}>{value}</DottedBackgroundChild>
          ))}
        </DottedBackground>
      </SkillProgressDotted>
    </SkillLi>
  ));
};

const ListItems = (items: ItemType[]) => {
  return items.map(({ id, name }: ItemType) => (
    <SkillListLi key={id}>
      <SkillListItemName>
        <CheckIcon size="25" />
        <SkillListItemSpan>{name}</SkillListItemSpan>
      </SkillListItemName>
    </SkillListLi>
  ));
};

export function Skills() {
  return (
    <Wrapper>
      <SectionTitle>Skills</SectionTitle>
      <StyledRow>
        <SkillCol sm={12} md={6} lg={6}>
          <SkillTitle>
            <PersonalSkillsIcon size="35" />
            <SkillName>
              <span>Personal Skills</span>
            </SkillName>
          </SkillTitle>
          <SkillUl>{LineProgressItems(personalSkillsItems)}</SkillUl>
        </SkillCol>
        <BorderVerticalCol sm={12} md={6} lg={6}>
          <SkillTitle>
            <CodingIcon size="35" />
            <SkillName>
              <span>Coding</span>
            </SkillName>
          </SkillTitle>
          <SkillUl>{DottedProgressItems(codingItems)}</SkillUl>
        </BorderVerticalCol>
        <SkillCol sm={12} md={12} lg={12}>
          <SkillTitle>
            <KnowledgeIcon size="35" />
            <SkillName>
              <span>Summary</span>
            </SkillName>
          </SkillTitle>
          <SkillListUl>{ListItems(summaryItems)}</SkillListUl>
        </SkillCol>
      </StyledRow>
    </Wrapper>
  );
}
