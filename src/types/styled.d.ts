import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors;
    primaryColor: string;
    bodyBackground: string;
    textColor: string;
    headingColor: string;
    bodyBackgroundGradientFrom: string;
    toggleThemeBackground: string;
    toggleThemeBorder: string;
    buttonBackground: string;

    colors: {
      primary: string;
      black: string;
      white: string;
      lightBlack: string;
      dark: string;
      semiDark: string;
      semiGrey: string;
      grey: string;
      lightGrey: string;
      softGrey: string;
      red: string;
      cyan: string;
      darkGreen: string;
    };
  }
}
