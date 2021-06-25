import React from 'react';
import { ToggleThemeWrapper, SunIcon, MoonIcon } from './Styled';

export function ToggleTheme({ theme, toggleTheme }) {
  const isLight = theme === 'light';
  return (
    <ToggleThemeWrapper onClick={toggleTheme} isLight={isLight}>
      <SunIcon isLight={isLight} src="./sun.svg" />
      <MoonIcon isLight={isLight} src="./moon.svg" />
    </ToggleThemeWrapper>
  );
}
