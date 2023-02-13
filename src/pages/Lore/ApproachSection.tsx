import { FC } from "react";
import styled from "styled-components";

import {
  DisplayText,
  MOBILE_MAX_WIDTH,
  Section,
  SectionArticle,
  SectionBackground,
} from "~/components/common";

const StepNumber = styled(DisplayText)`
  position: relative;
  font-size: 6rem;
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

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
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
  font-size: 1.8rem;
`;

export interface ApproachSectionProps {}

export const ApproachSection: FC<ApproachSectionProps> = ({ ...props }) => {
  return (
    <StyledApproachSection {...props}>
      <SectionBackground type="2" align="center" />

      <ApproachArticle title="OUR APPROACH" center>
        <ApproachTitle>
          WE BELIEVE THERE ARE 3 PILLARS FOR ANY PROTOCOL TO SCALE:
        </ApproachTitle>

        <ApproachSteps>
          <Step>
            <StepNumber>1</StepNumber>
            <p>
              <SecondaryText>
                Composability, in DeFi, is the ability for applications and
                protocols to interact with one another in a permissionless way —
                meaning they are constantly talking to one another and
                leveraging each other’s code, and therefore each other’s
                utility.
              </SecondaryText>
            </p>
          </Step>

          <Step>
            <StepNumber>2</StepNumber>
            <p>
              <SecondaryText>
                Decentralization is a sliding scale and should be applied to all
                aspects of a blockchain application. By decentralizing the
                management of and access to resources in an application, greater
                and fairer service can be achieved.
              </SecondaryText>
              <SecondaryText>
                Decentralization typically has some tradeoffs, but ideally, the
                tradeoffs are worth the improved stability and service levels
                they produce.
              </SecondaryText>
            </p>
          </Step>

          <Step>
            <StepNumber>3</StepNumber>
            <p>
              <SecondaryText>
                Self-sustainability (or how we call it “set and forget”): A
                system is self-sustaining if it can maintain itself by
                independent effort, without any external support.
              </SecondaryText>
            </p>
          </Step>
        </ApproachSteps>
      </ApproachArticle>
    </StyledApproachSection>
  );
};
