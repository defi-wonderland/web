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

export const SecondaryText = styled.span`
  font-size: 2.2rem;
`;

const ApproachSection: FC = ({ ...props }) => {
  return (
    <StyledApproachSection {...props}>
      <SectionBackground type='2' align='center' />

      <ApproachArticle title='OUR APPROACH' center>
        <ApproachTitle>The three pillars we build on:</ApproachTitle>

        <ApproachSteps>
          <Step>
            <StepNumber>1</StepNumber>
            <p>
              <SecondaryText>
                Open-Source: We believe in transparency, accessibility, and collaboration, and this is best embodied by
                an open-source approach.
              </SecondaryText>
            </p>
          </Step>

          <Step>
            <StepNumber>2</StepNumber>
            <p>
              <SecondaryText>
                Decentralization: We champion a system where no single entity has control, leading to a more secure and
                fair environment.
              </SecondaryText>
            </p>
          </Step>

          <Step>
            <StepNumber>3</StepNumber>
            <p>
              <SecondaryText>
                Permissionless: We advocate for a world where anyone, anywhere can participate without the need for an
                intermediary or permission from an authority.
              </SecondaryText>
            </p>
          </Step>
        </ApproachSteps>
      </ApproachArticle>
    </StyledApproachSection>
  );
};

export default ApproachSection;
