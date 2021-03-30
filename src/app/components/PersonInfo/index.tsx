import * as React from 'react';
import {
  Wrapper,
  Name,
  Position,
  Social,
  SocialList,
  SocialItem,
  SocialLink,
  WebsiteIcon,
  LinkedinIcon,
  CodepenIcon,
  GmailIcon,
} from './Styled';

const socials = [
  {
    id: 1,
    title: 'Website',
    href: '/',
    icon: () => <WebsiteIcon size="20">Website</WebsiteIcon>,
  },
  {
    id: 2,
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/hung-nguyen-manh-developer/',
    icon: () => <LinkedinIcon size="20">Linkedin</LinkedinIcon>,
  },
  {
    id: 3,
    title: 'CodePen',
    href: 'https://codepen.io/hanknguyen14',
    icon: () => <CodepenIcon size="20">Codepen</CodepenIcon>,
  },
  {
    id: 4,
    title: 'Gmail',
    href: 'mailto:hungnguyen.dhg@gmail.com',
    icon: () => <GmailIcon size="20">Email</GmailIcon>,
  },
];

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
      <Position>
        <span>Developer</span>
      </Position>
      <Social>
        <SocialList>{renderListItems}</SocialList>
      </Social>
    </Wrapper>
  );
}
