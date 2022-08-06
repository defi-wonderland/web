import { FC } from "react";
import styled from "styled-components";

import {
  Button,
  DisplayText,
  Section,
  SectionArticle,
} from "@/components/common";

const StepNumber = styled(DisplayText)`
  position: relative;
  font-size: 6rem;
  // font-size: 8rem;
  // top: -2rem;
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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  grid-gap: 6rem;
  // grid-gap: 4rem;
  margin-top: 6.5rem;
`;

const ApproachTitle = styled.strong`
  width: 22.5rem;
  margin-top: 0.5rem;
`;

const ApproachArticle = styled(SectionArticle)`
  width: 100%;
`;

const StyledApproachSection = styled(Section)`
  width: var(--page-max-width);
`;

export interface ApproachSectionProps {}

export const ApproachSection: FC<ApproachSectionProps> = ({ ...props }) => {
  return (
    <StyledApproachSection>
      <ApproachArticle title="OUR APPROACH" center>
        <ApproachTitle>
          We believe there are 3 pillars for any protocol to scale:
        </ApproachTitle>

        <ApproachSteps>
          <Step>
            <StepNumber>Permissionless</StepNumber>
            {/* <p>
              <span>
                Composability, in DeFi, is the ability for applications and
                protocols to interact with one another in a permissionless way —
                meaning they are constantly talking to one another and
                leveraging each other’s code, and therefore each other’s
                utility.
              </span>
            </p> */}
          </Step>

          <Step>
            <StepNumber>Decentralization</StepNumber>
            {/* <p>
              <span>
                Decentralization is a sliding scale and should be applied to all
                aspects of a blockchain application. By decentralizing the
                management of and access to resources in an application, greater
                and fairer service can be achieved.
              </span>
              <span>
                Decentralization typically has some tradeoffs, but ideally, the
                tradeoffs are worth the improved stability and service levels
                they produce.
              </span>
            </p> */}
          </Step>

          <Step>
            <StepNumber>Open-source</StepNumber>
            {/* <p>
              <span>
                Self-sustainability (or how we call it “set and forget”): A
                system is self-sustaining if it can maintain itself by
                independent effort, without any external support.
              </span>
            </p> */}
          </Step>
        </ApproachSteps>
      </ApproachArticle>
    </StyledApproachSection>
  );
};
