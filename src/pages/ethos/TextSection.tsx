import styled, { css } from 'styled-components';

import {
  SLink,
  Button,
  FONT_SIZE_18,
  MOBILE_MAX_WIDTH,
  PAGE_MAX_WIDTH,
  Ring,
  Section as BaseSection,
  SectionArticle,
  SectionBackground,
} from '~/components/common';

const LoreSectionArticle = styled(SectionArticle)``;

const Section = styled(BaseSection)`
  min-height: 70vh;

  @media screen and (max-width: 665px) {
    min-height: 80vh;
  }
`;

const LoreSection = styled(Section)`
  width: calc(${PAGE_MAX_WIDTH} + 13rem);
  max-width: 100%;
  grid-gap: 4.6rem;
  margin-top: 0rem;

  @media screen and (max-width: 1400px) {
    flex-direction: column;

    ${LoreSectionArticle} {
      order: 1;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 3rem 0;
    margin-top: 12rem;
  }
`;

const sectionMediaStyles = css`
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0 0.7rem;
  }
`;

const LeftSection = styled(LoreSection)`
  justify-content: flex-start;

  ${sectionMediaStyles}
`;

const RightSection = styled(LoreSection)`
  justify-content: flex-end;

  ${sectionMediaStyles}
`;

const PrimaryText = styled.p`
  font-size: 2rem;
  text-transform: uppercase;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: ${FONT_SIZE_18};
  }
`;

export const SecondaryText = styled.span`
  font-size: 2.2rem;
  padding-top: 1rem;

  & b {
    font-weight: bold;
  }
`;

export const FirstLoreSectionArticle = styled(LoreSectionArticle)`
  margin-top: 24rem;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 0rem;
  }
`;

function TextSection() {
  return (
    <>
      <LeftSection>
        <FirstLoreSectionArticle title='Who we are'>
          <div>
            <PrimaryText>&quot;&apos;Who in the world am I?&apos; Ah, that&apos;s the great puzzle!&quot;</PrimaryText>

            <SecondaryText>
              We&apos;re a group of developers, researchers, data scientists, investors, and executive leaders. We have
              something in common though, we all love building cool sh*t.
            </SecondaryText>

            <SLink to='/squad'>
              <Button>Meet the squad</Button>
            </SLink>
          </div>
        </FirstLoreSectionArticle>
        <Ring type='1' />

        <SectionBackground type='4' align='right' />
      </LeftSection>

      <RightSection>
        <SectionBackground type='1' align='left' />

        <Ring type='2' />

        <LoreSectionArticle title='Our mission'>
          <div>
            <SecondaryText>
              Our mission is to discover, partner, and empower innovators in the creation of open, permissionless, and
              decentralized financial solutions.{' '}
              <b>Our pledge is to stand by our partners, supporting them in every way we can.</b>
            </SecondaryText>

            <SLink to='/creations'>
              <Button>Creations</Button>
            </SLink>
          </div>
        </LoreSectionArticle>
      </RightSection>

      <LeftSection>
        <LoreSectionArticle title='Our values'>
          <div>
            <PrimaryText>Building together</PrimaryText>

            <SecondaryText>
              We champion public good creation and believe in the invincibility of protocols backed by the right talent
              and incentives. We deeply believe in fostering a supportive community, where collaboration trumps
              competition, and building together is the norm, not the exception.
            </SecondaryText>

            <SecondaryText>Long term, long term, long term…</SecondaryText>
            <SLink to='https://docs.google.com/forms/d/1n70jsL4sFkOwPNBTdciPqlWF2RirgQwejjztpS4-2L8/viewform' external>
              <Button>Join us</Button>
            </SLink>
          </div>
        </LoreSectionArticle>

        <Ring type='1' />

        <SectionBackground type='2' align='right' />
      </LeftSection>
    </>
  );
}

export default TextSection;
