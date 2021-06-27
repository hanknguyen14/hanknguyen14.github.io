import styled from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.header`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: center;
  background-color: ${({ theme }) => theme.bodyBackground};
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  z-index: 20;
  text-align: center;
  border-radius: 4px;
  margin-right: 10px;
  height: max-content;
  position: absolute;

  ${media.medium`
    width: 72px;
    flex-basis: 70px;
    flex-direction: column;
    position: unset;
    justify-content: space-between;
  `}
`;
