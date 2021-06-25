import styled, { css } from 'styled-components/macro';

type ToggleThemeWrapperType = {
  isLight: boolean;
};

export const ToggleThemeWrapper = styled.button<ToggleThemeWrapperType>`
  background: ${({ theme }) => theme.toggleThemeBackground};
  border: 2px solid ${({ theme }) => theme.toggleThemeBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 2px auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 5rem;
  height: 2.5rem;
  z-index: 1;
`;

const StyledIcon = css`
  height: auto;
  width: 1.5rem;
  transition: all 0.3s linear;
`;
export const SunIcon = styled.img<ToggleThemeWrapperType>`
  ${StyledIcon}
  transform: ${({ isLight }) =>
    isLight ? 'translateY(0)' : 'translateY(100px)'};
`;

export const MoonIcon = styled.img<ToggleThemeWrapperType>`
  ${StyledIcon}
  transform: ${({ isLight }) =>
    isLight ? 'translateY(-100px)' : 'translateY(0)'};
`;
