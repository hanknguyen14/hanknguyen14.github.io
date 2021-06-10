import React from 'react';
import {
  StyledModal,
  Container,
  ModalBody,
  Box,
  Content,
  CloseButton,
  ImageWrapper,
  Image,
  Description,
  WorkTitle,
  InfoList,
  InfoListUL,
  InfoListLI,
  StrongTag,
  WorkContent,
  WorkContentUL,
  WorkContentLI,
  WorkContentImage,
  ViewWorkButton,
  ViewWorkButtonText,
  ViewWorkButtonArrow,
} from './Styled';

export function WorksModal({ isOpen, toggleModal, work }) {
  const {
    image = '',
    title = '',
    techStack = '',
    teamSize = '',
    role = '',
    introduction = '',
    features = [],
    link = '#',
  } = work;
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <Container>
        <ModalBody>
          <Box>
            <Content>
              <ImageWrapper>
                <Image src={image} alt="" width="700" height="478" />
              </ImageWrapper>
              <Description>
                <WorkTitle>{title}</WorkTitle>
                <InfoList>
                  <InfoListUL>
                    <InfoListLI>
                      <StrongTag>Tech stack:</StrongTag>
                      {techStack}
                    </InfoListLI>
                    <InfoListLI>
                      <StrongTag>Team size:</StrongTag>
                      {teamSize}
                    </InfoListLI>
                    <InfoListLI>
                      <StrongTag>Role:</StrongTag>
                      {role}
                    </InfoListLI>
                  </InfoListUL>
                </InfoList>
                <WorkContent>
                  <p>{introduction}</p>
                  <WorkContentUL>
                    {features.map(feature => (
                      <WorkContentLI>{feature}</WorkContentLI>
                    ))}
                  </WorkContentUL>
                  <WorkContentImage
                    src={image}
                    alt=""
                    width="700"
                    height="525"
                  />
                </WorkContent>
                <ViewWorkButton
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ViewWorkButtonText>View Project</ViewWorkButtonText>
                  <ViewWorkButtonArrow></ViewWorkButtonArrow>
                </ViewWorkButton>
              </Description>
            </Content>
            <CloseButton onClick={toggleModal} title="Close (Esc)">
              x
            </CloseButton>
          </Box>
        </ModalBody>
      </Container>
    </StyledModal>
  );
}
