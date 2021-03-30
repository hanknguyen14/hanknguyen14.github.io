import * as React from 'react';
import { PersonInfo } from '../PersonInfo/Loadable';
import { Wrapper, Avatar, AvatarImage } from './Styled';

export function Person() {
  return (
    <Wrapper>
      <Avatar>
        <AvatarImage src="/avatar.jpg"></AvatarImage>
      </Avatar>
      <PersonInfo />
    </Wrapper>
  );
}
