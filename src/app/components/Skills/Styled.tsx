import styled, { css } from 'styled-components';
import {
  Section,
  BorderHorizontalLine,
  BorderVerticalLineBefore,
  StyledCol,
} from '../Content/Styled';
import { CodeAlt, ListUl, Brain, Check } from '@styled-icons/boxicons-regular';

type ProgressPercentType = {
  percent: string;
};

type DottedActiveType = {
  width: number;
};

export const Wrapper = styled(Section)``;

export const SkillCol = styled(StyledCol)`
  padding-top: 0;
`;

export const BorderVerticalCol = styled(SkillCol)`
  ${BorderVerticalLineBefore}
`;

export const SkillTitle = styled.div`
  ${BorderHorizontalLine}

  padding: 10px 0 30px;
  position: relative;
  margin-top: 20px;
`;

const SkillIcon = css`
  position: relative;
  top: -12px;
  float: left;
  color: ${({ theme }) => theme.primary};
`;

export const SkillName = styled.div`
  margin: 0 0 0 45px;
  line-height: 14px;
  color: ${({ theme }) => theme.headingColor};
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const SkillUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SkillLi = styled.li`
  position: relative;
  padding: 30px 0 0;
  font-size: 16px;
`;

export const SkillItemName = styled.div`
  margin: 0 0 11px;
  line-height: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor}; ;
`;

export const SkillProgress = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.textColor};
`;

export const SkillProgressDotted = styled(SkillProgress)`
  background-color: transparent;
`;

export const SkillProgressPercent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  width: ${(props: ProgressPercentType) => props.percent};
  background-color: ${({ theme }) => theme.primary};
`;

export const SkillProgressDottedPercent = styled(SkillProgressPercent)`
  position: relative;
  overflow: hidden;
  top: -2px;
  height: 14px;
  background-color: transparent;
  z-index: 2;
  width: ${(props: ProgressPercentType) => props.percent};
`;

export const Dotted = css`
  position: absolute;
  left: 0;
  top: -2px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 14px;
`;

export const DottedBackground = styled.span`
  ${Dotted}
`;

export const DottedBackgroundChild = styled.span`
  display: block;
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.textColor};
  border-radius: 14px;
`;

export const DottedActive = styled(DottedBackground)`
  top: 0;
  width: ${(props: DottedActiveType) => `${props.width}px`};
`;

export const DottedActiveChild = styled(DottedBackgroundChild)`
  background: ${({ theme }) => theme.primary};
`;

export const SkillListUl = styled(SkillUl)`
  padding-top: 20px;
`;

export const SkillListLi = styled(SkillLi)`
  padding-top: 10px;
`;

export const SkillListItemName = styled(SkillItemName)`
  position: relative;
`;

export const SkillListItemSpan = styled.span`
  padding-left: 5px;
`;

export const CheckIcon = styled(Check)`
  display: inline-block;
  color: ${({ theme }) => theme.primary};
`;

export const CodingIcon = styled(CodeAlt)`
  ${SkillIcon}
`;

export const PersonalSkillsIcon = styled(Brain)`
  ${SkillIcon}
`;

export const KnowledgeIcon = styled(ListUl)`
  ${SkillIcon}
`;
