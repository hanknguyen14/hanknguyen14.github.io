import styled, { css } from 'styled-components';
import {
  Firefox,
  Linkedin,
  Github,
  Codepen,
  Gmail,
} from '@styled-icons/simple-icons';
import ITyped from 'react-ityped';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Name = styled.h2`
  line-height: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.headingColor};
  text-align: center;
  font-size: 34px;
`;

export const StyledITyped = styled(ITyped)`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-top: 10px;
  line-height: normal;
  margin: 0;
  display: inline-block;
`;

export const Social = styled.div``;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin: 15px 0 70px;
`;

export const SocialItem = styled.li`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const SocialLink = styled.button`
  -o-transition: 0.2s all;
  transition: 0.2s all;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.textColor};
`;

const SocialIcon = css`
  color: ${({ theme }) => theme.textColor};
  -o-transition: 0.2s all;
  -moz-transition: 0.2s all;
  transition: 0.2s all;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
  }
`;

export const WebsiteIcon = styled(Firefox)`
  ${SocialIcon}
`;

export const LinkedinIcon = styled(Linkedin)`
  ${SocialIcon}
`;

export const GithubIcon = styled(Github)`
  ${SocialIcon}
`;

export const CodepenIcon = styled(Codepen)`
  ${SocialIcon}
`;

export const GmailIcon = styled(Gmail)`
  ${SocialIcon}
`;
