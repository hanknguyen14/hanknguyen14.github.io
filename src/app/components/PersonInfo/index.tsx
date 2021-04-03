import * as React from 'react';
import {
  Wrapper,
  Name,
  StyledITyped,
  Social,
  SocialList,
  SocialItem,
  SocialLink,
  WebsiteIcon,
  LinkedinIcon,
  GithubIcon,
  CodepenIcon,
  GmailIcon,
} from './Styled';

const socials = [
  {
    id: 1,
    title: 'Website',
    href: '/',
    icon: () => <WebsiteIcon size="20" />,
  },
  {
    id: 2,
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/hung-nguyen-manh-developer/',
    icon: () => <LinkedinIcon size="20" />,
  },
  {
    id: 3,
    title: 'Github',
    href: 'https://github.com/hanknguyen14',
    icon: () => <GithubIcon size="20" />,
  },
  {
    id: 4,
    title: 'CodePen',
    href: 'https://codepen.io/hanknguyen14',
    icon: () => <CodepenIcon size="20" />,
  },
  {
    id: 5,
    title: 'Gmail',
    href: 'mailto:hungnguyen.dhg@gmail.com',
    icon: () => <GmailIcon size="20" />,
  },
];

const positions = [
  'Software Engineer',
  'Full Stack Developer',
  'Node Developer',
  'React Developer',
  'Web Developer',
];

const Position = () => {
  return (
    <StyledITyped
      showCursor={false}
      strings={positions}
      typeSpeed={50}
      backDelay={1500}
    />
  );
};

export function PersonInfo() {
  const renderListItems = socials.map(social => (
    <SocialItem key={social.id}>
      <SocialLink as="a" href={social.href} target="_blank">
        {<social.icon />}
      </SocialLink>
    </SocialItem>
  ));

  return (
    <Wrapper>
      <Name>Manh Hung Nguyen</Name>
      <Position />
      <Social>
        <SocialList>{renderListItems}</SocialList>
      </Social>
    </Wrapper>
  );
}
