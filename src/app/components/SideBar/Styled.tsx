import styled from 'styled-components';

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  -ms-flex-preferred-size: 70px;
  flex-basis: 70px;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
`;

export const DownloadSection = styled.button`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 15px 10px;
  transform: scale(1.35);
`;
