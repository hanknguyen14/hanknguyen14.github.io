export const colors = {
  primary: '#00c483',
  black: '#000000',
  white: '#ffffff',
  lightBlack: '#0a0000',
  dark: '#222222',
  semiDark: '#333333',
  semiGrey: '#555555',
  grey: '#888888',
  lightGrey: '#bfbfbf',
  softGrey: '#eeeeee',
};

export const lightTheme = {
  colors,
  primary: colors.primary,
  bodyBackground: colors.white,
  textColor: colors.grey,
  headingColor: colors.dark,
};

export const darkTheme = {
  colors,
  primary: colors.primary,
  bodyBackground: colors.lightBlack,
  textColor: colors.softGrey,
  headingColor: colors.dark,
};
