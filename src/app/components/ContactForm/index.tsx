import React, { useState } from 'react';
import { Wrapper, Input, TextArea, SendMessageButton, Message } from './Styled';
import { SectionTitle } from '../SectionTitle/Loadable';
import {
  StyledRow,
  StyledCol,
  StyledButtonText,
  StyledButtonArrow,
} from '../Content/Styled';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

type Inputs = {
  userName: string;
  userEmail: string;
  message: string;
  contactNumber: string;
};

const {
  REACT_APP_EMAILJS_SERVICE_ID: EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_USER_ID: EMAILJS_USER_ID,
} = process.env;
const SUCCESS_MESSAGE =
  'Your message has been successfully sent. We will contact you very soon!';
const FAIL_MESSAGE = 'Failed to send message! Please try again later.';

export function ContactForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      userName: '',
      userEmail: '',
      message: '',
    },
  });
  const [contactNumber, setContactNumber] = useState(nanoid());
  const [statusMessage, setStatusMessage] = useState('Message');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleNotifyMessage = (message = '', isSuccess = false) => {
    setStatusMessage(message);
    setIsSuccess(isSuccess);
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 5000);
  };

  const onSubmit = (data: Inputs) => {
    setContactNumber(nanoid());
    const body = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_USER_ID,
      template_params: data,
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(({ ok: isSent }) => {
        if (isSent) {
          return handleNotifyMessage(SUCCESS_MESSAGE, true);
        }
        return handleNotifyMessage(FAIL_MESSAGE, false);
      })
      .catch(error => {
        handleNotifyMessage(FAIL_MESSAGE, false);
      });
    reset();
  };

  return (
    <Wrapper>
      <SectionTitle>Contact Form</SectionTitle>
      <StyledRow>
        <StyledCol sm={12} md={12} lg={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledRow>
              <StyledCol sm={12} md={6} lg={6}>
                <Input
                  type="text"
                  placeholder="Full Name*"
                  {...register('userName', { required: true, maxLength: 40 })}
                  aria-invalid={errors.userName ? 'true' : 'false'}
                />
              </StyledCol>
              <StyledCol sm={12} md={6} lg={6}>
                <Input
                  type="email"
                  placeholder="Email Address*"
                  {...register('userEmail', {
                    required: true,
                    maxLength: 40,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
                  aria-invalid={errors.userEmail ? 'true' : 'false'}
                />
              </StyledCol>
              <StyledCol sm={12} md={12} lg={12}>
                <TextArea
                  {...register('message', {
                    required: true,
                    maxLength: 1400,
                  })}
                  placeholder="Your Message*"
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
              </StyledCol>
            </StyledRow>
            <Input
              {...register('contactNumber')}
              defaultValue={contactNumber}
              type="hidden"
            />
            <SendMessageButton type="submit">
              <StyledButtonText>Send Message</StyledButtonText>
              <StyledButtonArrow></StyledButtonArrow>
            </SendMessageButton>
          </form>
        </StyledCol>
        <StyledCol sm={12} md={12} lg={12}>
          {isShow && <Message isSuccess={isSuccess}>{statusMessage}</Message>}
        </StyledCol>
      </StyledRow>
    </Wrapper>
  );
}
