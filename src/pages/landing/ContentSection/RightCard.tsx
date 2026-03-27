import styled from 'styled-components';
import { Button, FONT_MEDIUM_L, SLink, MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '~/components';

export const CardContainer = styled.div`
  width: 42rem;
  padding-top: 5rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
    <CardWrapper>
      <CardContainer>
        <PrimaryText>Our approach</PrimaryText>
        <SecondaryText>
          We envision a world where the systems that matter are secure, verifiable, and reliable by default. Our
          approach is simple: We work on problems that matter, with teams we believe in, and own the outcomes.
        </SecondaryText>
        <SLink to='/ethos'>
          <SButton>Learn more</SButton>
        </SLink>
      </CardContainer>
    </CardWrapper>
  );
}
