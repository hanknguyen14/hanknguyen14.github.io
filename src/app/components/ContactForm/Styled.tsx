import styled, { css } from 'styled-components/macro';
import { Section, StyledCol, StyledButton } from '../Content/Styled';

type MessageType = {
  theme: object;
  isSuccess: boolean;
};

export const Wrapper = styled(Section)``;

export const ContactCol = styled(StyledCol)``;

const StyledField = css`
  margin: 0;
  padding: 0 15px;
  display: block;
  font-size: 16px;
  font-family: 'Poppins';
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.dark};
  background: 0 0;
  border: 2px solid ${({ theme }) => theme.colors.softGrey};
  resize: none;
  outline: 0;
  transition: all 0.3s ease 0s;
  border-radius: 0;
  appearance: none;

  &[aria-invalid='true'] {
    border: 2px solid ${({ theme }) => theme.colors.red};
  }

  &:focus {
    color: ${({ theme }) => theme.primaryColor};
    border: 2px solid ${({ theme }) => theme.primaryColor};
  }
`;

export const Input = styled.input`
  ${StyledField}
`;

export const TextArea = styled.textarea`
  ${StyledField}
  padding: 15px;
  height: 94px;
`;

export const SendMessageButton = styled.button`
  ${StyledButton}
`;

export const Message = styled.p<MessageType>`
  margin: 2em 0.5em 1em;
  padding: 0.2em 1em;
  border: 2px solid
    ${({ theme, isSuccess }) =>
      isSuccess ? theme.primaryColor : theme.colors.red};
`;
