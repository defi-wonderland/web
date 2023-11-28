import styled from 'styled-components';
import { Button, FONT_MEDIUM_L, SLink, MOBILE_MAX_WIDTH } from '~/components';

export const CardContainer = styled.div`
  width: 42rem;
  padding-top: 5rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
    padding-top: 40rem;
  }
`;

const PrimaryText = styled.p`
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.1rem;
  line-height: 1.3;
  padding-bottom: 1rem;
  text-transform: uppercase;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 1.7rem;
  }
`;

export const SecondaryText = styled.span`
  font-size: 2.2rem;
  line-height: 1.5;
`;

export const SButton = styled(Button)`
  margin-top: 4.5rem;
  margin-left: 3rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin: 4.5rem auto 6rem;
  }
`;

export default function RightCard() {
  return (
    <>
      <CardContainer>
        <PrimaryText>Our approach</PrimaryText>
        <SecondaryText>
          Our commitment is to a financial future that&apos;s open, decentralized, and accessible to all. To turn this
          vision into reality, we partner with the best teams in the world and support them in any way we can.
        </SecondaryText>
        <SLink to='/ethos'>
          <SButton>Learn more</SButton>
        </SLink>
      </CardContainer>
    </>
  );
}
