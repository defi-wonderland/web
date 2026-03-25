import { FC } from 'react';
import styled from 'styled-components';

import {
  DisplayText,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  Section,
  SectionArticle,
  SectionBackground,
} from '~/components';

const StepNumber = styled(DisplayText)`
  position: relative;
  font-size: 8rem;
  top: -2rem;
`;

const Step = styled.article`
  display: flex;
  align-items: flex-start;
  // TODO Remove
  justify-content: center;
  // width: 25rem;
  text-align: left;

  grid-gap: 1.5rem;

  span {
    display: inline-block;
  }
`;

const ApproachSteps = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  grid-gap: 6rem;
  margin-top: 6.5rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    grid-template-columns: 1fr;
    padding: 0 1.2rem;
  }
`;

const ApproachTitle = styled.strong`
  width: 40rem;
  margin-top: 0.5rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: auto;
    font-size: 2.4rem !important;
    padding: 0 3rem;
  }
`;

const ApproachArticle = styled(SectionArticle)`
  width: 100%;
`;

const StyledApproachSection = styled(Section)`
  max-width: 140rem;
  margin-top: 4rem;
  margin-bottom: 7rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0 0.7rem;
  }
`;

const PillarTitle = styled.strong`
  display: block;
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
`;

export const SecondaryText = styled.span`
  font-size: 2.2rem;
`;

const ApproachSection: FC = ({ ...props }) => {
  return (
    <StyledApproachSection {...props}>
      <SectionBackground type='2' align='center' />

      <ApproachArticle title='HOW WE WORK' center>
        <ApproachTitle>The Three Pillars we Build On:</ApproachTitle>

        <ApproachSteps>
          <Step>
            <StepNumber>1</StepNumber>
            <p>
              <PillarTitle>Excellence is the floor, not the ceiling</PillarTitle>
              <SecondaryText>
                We don&apos;t ship to spec. We ship to a standard, one we set for ourselves. Good enough is not good
                enough.
              </SecondaryText>
            </p>
          </Step>

          <Step>
            <StepNumber>2</StepNumber>
            <p>
              <PillarTitle>Efficiency without shortcuts</PillarTitle>
              <SecondaryText>
                Speed matters. So does not having to redo the work in six months. We move fast by being precise.
              </SecondaryText>
            </p>
          </Step>

          <Step>
            <StepNumber>3</StepNumber>
            <p>
              <PillarTitle>Security as a first principle</PillarTitle>
              <SecondaryText>
                Security is not a final review or a box to check. It is the lens through which we design everything.
                When we build systems that carry real stakes, we treat every assumption as a potential vulnerability
                until proven otherwise.
              </SecondaryText>
            </p>
          </Step>
        </ApproachSteps>
      </ApproachArticle>
    </StyledApproachSection>
  );
};

export default ApproachSection;
