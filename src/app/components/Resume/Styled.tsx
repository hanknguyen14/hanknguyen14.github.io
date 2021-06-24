import styled, { css } from 'styled-components';
import { Section, BorderHorizontalLine, StyledCol } from '../Content/Styled';
import { Briefcase, BuildingHouse } from '@styled-icons/boxicons-regular';

export const Wrapper = styled(Section)``;

export const ResumeCol = styled(StyledCol)`
  padding-top: 0;
`;

export const ResumeTitle = styled.div`
  ${BorderHorizontalLine}

  padding: 10px 0 30px;
  position: relative;
  margin-top: 20px;
`;

const ResumeIcon = css`
  position: relative;
  top: -12px;
  float: left;
  color: ${({ theme }) => theme.primaryColor};
`;

export const ResumeItem = styled.div`
  ${BorderHorizontalLine}

  position: relative;
  padding: 30px 0;
`;

export const ResumeImageWrapper = styled.div`
  margin-left: 15px;
  position: relative;
  width: 80px;
  height: 80px;
  float: right;
  display: flex;
  align-items: center;
  font-size: 0;
`;

export const ResumeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
`;

export const ResumeDate = styled.div`
  margin: 0 0 11px;
  padding: 0 5px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.semiGrey};
  color: ${({ theme }) => theme.colors.semiGrey};

  &.active {
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const ResumeName = styled.div`
  margin: 0 0 0 45px;
  line-height: 14px;
  color: ${({ theme }) => theme.headingColor};
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const ResumeItemName = styled.div`
  margin: 0;
  font-size: 17px;
  color: ${({ theme }) => theme.headingColor};
  font-weight: 500;
`;

export const ResumeItemCompany = styled.div`
  margin: 0 0 11px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
`;

export const ResumeDescription = styled.div`
  &:first-child {
    margin-top: 0;
  }

  p {
    margin: 0;
    clear: both;
    font-size: 16px;
    line-height: 1.8em;
    padding: 0;
    color: ${({ theme }) => theme.textColor};
  }

  &:after {
    content: '';
    position: relative;
    clear: both;
    display: block;
  }
`;

export const ExperienceIcon = styled(Briefcase)`
  ${ResumeIcon}
`;

export const EducationIcon = styled(BuildingHouse)`
  ${ResumeIcon}
`;

export const ResumeChildItems = styled.div``;
