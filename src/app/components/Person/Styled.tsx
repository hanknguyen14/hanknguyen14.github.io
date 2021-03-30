import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  -webkit-box-shadow: 0 32px 84px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 32px 84px 0 rgba(0, 0, 0, 0.5);
`;

export const Avatar = styled.div`
  background-image: url('/avatar.jpg');
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const AvatarImage = styled.img`
  border-style: none;
  clear: both;
  max-width: 100%;
  display: none;
`;
