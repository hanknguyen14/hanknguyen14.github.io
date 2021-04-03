import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bodyBackground};
  flex-basis: 70px;
  flex-grow: 0;
  flex-shrink: 0;
  width: 72px;
  z-index: 100;
  text-align: center;
  border-radius: 4px;
`;

export const StyledLink = css`
  padding: 13px 3px;
  position: relative;
  overflow: hidden;
  display: block;
  height: auto;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor};
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
`;

export const DownloadSection = styled.button`
  ${StyledLink}
  margin-bottom: 5px;
  color: ${({ theme }) => theme.primary};
`;
