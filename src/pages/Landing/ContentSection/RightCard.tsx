import styled from "styled-components";
import {
  Button,
  FONT_SIZE_18,
  Link,
  MOBILE_MAX_WIDTH,
} from "~/components/common";

export const CardContainer = styled.div`
  width: 30rem;
  padding-top: 5rem;
`;

const PrimaryText = styled.p`
  font-size: 2.1rem;
  line-height: 1.3;
  padding-bottom: 1rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: ${FONT_SIZE_18};
  }
`;

export const SecondaryText = styled.span`
  font-size: 1.8rem;
  line-height: 1.5;
`;

export const SButton = styled(Button)`
  margin-top: 4.5rem;
  margin-left: 3rem;
`;

export function RightCard() {
  return (
    <>
      <CardContainer>
        <PrimaryText>
          We are DeFi Wonderland, our main goal is to make decentralized finance
          more accessible and scalable
        </PrimaryText>
        <SecondaryText>
          We believe we're living in the early stages of a technology revolution
          and together we have the optimal skillset to help it grow. We know
          many opportunities will arise on the way, and plan on leveraging them
          all.
        </SecondaryText>
        <SButton>
          <Link to="/">DISCOVER MORE</Link>
        </SButton>
      </CardContainer>
    </>
  );
}
