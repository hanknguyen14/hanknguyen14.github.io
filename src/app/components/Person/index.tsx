import * as React from 'react';
import { PersonInfo } from '../PersonInfo/Loadable';
import {
  Wrapper,
  Profile,
  ProfileContent,
  Avatar,
  AvatarImage,
} from './Styled';

export function Person() {
  return (
    <Wrapper>
      <Profile>
        <ProfileContent>
          <Avatar>
            <AvatarImage src="/avatar.jpg"></AvatarImage>
          </Avatar>
          <PersonInfo />
        </ProfileContent>
      </Profile>
    </Wrapper>
  );
}
