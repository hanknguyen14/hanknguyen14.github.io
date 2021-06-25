export const colors = {
  primary: '#00c483',
  black: '#000000',
  white: '#ffffff',
  lightBlack: '#121212',
  dark: '#222222',
  semiDark: '#333333',
  semiGrey: '#555555',
  grey: '#888888',
  lightGrey: '#d3d3d3',
  softGrey: '#eeeeee',
  red: '#ff1d15',
  cyan: '#3c787e',
  darkCyan: '#091236',
};

export const lightTheme = {
  colors,
  primaryColor: colors.primary,
  bodyBackground: colors.white,
  textColor: colors.grey,
  headingColor: colors.dark,
  bodyBackgroundGradientFrom: colors.cyan,
  toggleThemeBorder: colors.white,
  toggleThemeBackground: 'linear-gradient(#39598A, #79D7ED)',
  buttonBackground: colors.softGrey,
};

export const darkTheme = {
  colors,
  primaryColor: colors.primary,
  bodyBackground: colors.lightBlack,
  textColor: colors.lightGrey,
  headingColor: colors.softGrey,
  bodyBackgroundGradientFrom: colors.darkCyan,
  toggleThemeBorder: '#6B8096',
  toggleThemeBackground: `linear-gradient(${colors.darkCyan}, #1E215D)`,
  buttonBackground: colors.semiDark,
};
