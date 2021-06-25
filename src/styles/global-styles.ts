import { createGlobalStyle } from 'styled-components';
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf';
import PoppinsLight from './fonts/Poppins-Light.ttf';
import PoppinsLightItalic from './fonts/Poppins-LightItalic.ttf';
import PoppinsRegular from './fonts/Poppins-Regular.ttf';
import PoppinsMedium from './fonts/Poppins-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: #888888;
    letter-spacing: 0em;
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Poppins', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  a {
    text-decoration: none;
    opacity: 1;
    outline: none;
  }

  // Animation Content
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-70%, 0, 0);
      transform: translate3d(-70%, 0, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      -webkit-transform: translate3d(-70%, 0, 0);
      transform: translate3d(-70%, 0, 0);
    }
  }

  .fade-enter,
  .fade-exit {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .fade-enter,
  .fade-exit-active {
    animation-name: fadeOutLeft;
  }

  .fade-enter-active {
    animation-name: fadeInLeft;
  }
`;
