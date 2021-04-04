import styled from 'styled-components';

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
  margin-right: 10px;
  height: max-content;
`;
