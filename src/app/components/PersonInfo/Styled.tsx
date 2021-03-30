import styled, { css } from 'styled-components';
import { Firefox, Linkedin, Codepen, Gmail } from '@styled-icons/simple-icons';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Name = styled.h2`
  font-weight: 900;
  line-height: 1.17;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 54px;
`;

export const Position = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-top: 10px;
  line-height: normal;
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
  color: ${({ theme }) => theme.colors.white};
`;

const SocialIcon = css`
  color: ${({ theme }) => theme.colors.lightGrey};
  -o-transition: 0.2s all;
  transition: 0.2s all;
`;

export const WebsiteIcon = styled(Firefox)`
  ${SocialIcon}
`;

export const LinkedinIcon = styled(Linkedin)`
  ${SocialIcon}
`;

export const CodepenIcon = styled(Codepen)`
  ${SocialIcon}
`;

export const GmailIcon = styled(Gmail)`
  ${SocialIcon}
`;
