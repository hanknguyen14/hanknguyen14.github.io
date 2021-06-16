import * as React from 'react';
import { Wrapper } from './Styled';
import { Content } from '../../components/Content/Loadable';
import { ContactInfo } from '../../components/ContactInfo/Loadable';
import { ContactForm } from '../../components/ContactForm/Loadable';

export function ContactPage() {
  return (
    <Wrapper>
      <Content>
        <ContactInfo />
        <ContactForm />
      </Content>
    </Wrapper>
  );
}
