import * as React from 'react';
import {
  Wrapper,
  ResumeCol,
  ResumeTitle,
  ExperienceIcon,
  ResumeName,
  ResumeChildItems,
  ResumeItem,
  ResumeImageWrapper,
  ResumeImage,
  ResumeDate,
  ResumeItemName,
  ResumeItemCompany,
  ResumeDescription,
  EducationIcon,
} from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';
import { StyledRow } from '../Content/Styled';

const experienceItems = [
  {
    id: 1,
    dateRange: '2018 - Present',
    title: 'Full Stack Developer',
    companyLogo: '/ces-experience.png',
    companyName: 'Code Engine Studio',
    description: `
    <p>
    - Full development life cycle involvement including
    requirements review, design, coding, implementation, testing
    optimization web application.
    </p>
    <p>
    - Developing high-volume, low-latency applications for
    systems, delivering high- availability and performance API.
    </p>
    <p>
    - Ensuring that non-functional requirements such as security,
    performance, scalability, usability, and reliability are being
    considered when architecting solutions.
    </p>`,
    isActive: true,
  },
];

const educationItems = [
  {
    id: 1,
    dateRange: '2013 - 2018',
    title: 'Software Engineering',
    companyLogo: '/dut-education.png',
    companyName: 'Danang University of Science and Technology',
    description: `
    <p>
    - Bachelor of Science in Software Engineering, Information Technology.
    </p>
    <p>
    - Achieved Encourage Scholarships for recognition of academic excellence.
    </p>`,
  },
];

export function Resume() {
  const renderItems = items => {
    return items.map(item => (
      <ResumeItem key={item.id}>
        <ResumeImageWrapper>
          <ResumeImage src={item.companyLogo} />
        </ResumeImageWrapper>
        <ResumeDate className={item.isActive ? 'active' : ''}>
          <span>{item.dateRange}</span>
        </ResumeDate>
        <ResumeItemName>
          <span>{item.title}</span>
        </ResumeItemName>
        <ResumeItemCompany>
          <span>{item.companyName}</span>
        </ResumeItemCompany>
        <ResumeDescription
          dangerouslySetInnerHTML={{
            __html: item.description,
          }}
        ></ResumeDescription>
      </ResumeItem>
    ));
  };
  return (
    <Wrapper>
      <SectionTitle>Resume</SectionTitle>
      <StyledRow>
        <ResumeCol sm={12} md={12} lg={12}>
          <ResumeTitle>
            <ExperienceIcon size="35" />
            <ResumeName>
              <span>Experience</span>
            </ResumeName>
          </ResumeTitle>
          <ResumeChildItems>{renderItems(experienceItems)}</ResumeChildItems>
          <ResumeTitle>
            <EducationIcon size="35" />
            <ResumeName>
              <span>Education</span>
            </ResumeName>
          </ResumeTitle>
          <ResumeChildItems>{renderItems(educationItems)}</ResumeChildItems>
        </ResumeCol>
      </StyledRow>
    </Wrapper>
  );
}
