import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  float: left;
  width: 480px;
  height: 100%;
  z-index: 11;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -khtml-border-radius: 4px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 4px;
    -moz-border-radius: 0 0 4px;
    -khtml-border-radius: 0 0 4px;
  }

  &:after {
    content: '';
    position: absolute;
    left: -15px;
    top: -15px;
    width: 100%;
    height: 100%;
    background: -moz-linear-gradient(
      -45deg,
      rgba(0, 196, 131, 0.15) 0%,
      rgba(0, 196, 131, 0.01) 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      rgba(0, 196, 131, 0.15) 0%,
      rgba(0, 196, 131, 0.01) 100%
    );
    background: linear-gradient(
      135deg,
      rgba(0, 196, 131, 0.15) 0%,
      rgba(0, 196, 131, 0.01) 100%
    );
    border-radius: 4px;
    -moz-border-radius: 4px;
    -khtml-border-radius: 4px;
  }
`;

export const Profile = styled.div`
  padding: 0;
  position: relative;
  overflow: hidden;
  height: 100%;
  background-color: ${({ theme }) => theme.bodyBackground};
  text-align: center;
  z-index: 10;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -khtml-border-radius: 4px;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  position: relative;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.02s ease 1s;
  -moz-transition: all 0.02s ease 1s;
  -o-transition: all 0.02s ease 1s;
`;

export const Avatar = styled.div`
  background-image: url('/avatar.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 4px 4px 0 0;
  -moz-border-radius: 4px 4px 0 0;
  -khtml-border-radius: 4px 4px 0 0;
  z-index: 0;
  height: 57%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -25%;
    bottom: -63%;
    width: 100%;
    height: 70%;
    background: ${({ theme }) => theme.bodyBackground};
    transform: rotate(8deg);
    -moz-transform: rotate(8deg);
    -o-transform: rotate(8deg);
    z-index: 3;
  }

  &:after {
    left: auto;
    right: -25%;
    transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    -o-transform: rotate(-8deg);
  }
`;

export const AvatarImage = styled.img`
  border-style: none;
  clear: both;
  max-width: 100%;
  display: none;
`;
