import styled, { css } from 'styled-components';

import {
  SLink,
  Button,
  FONT_SIZE_18,
  MOBILE_MAX_WIDTH,
  PAGE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  Ring,
  Section as BaseSection,
  SectionArticle,
  SectionBackground,
} from '~/components';

const LoreSectionArticle = styled(SectionArticle)``;

const Section = styled(BaseSection)`
  min-height: 70vh;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    min-height: 65vh;
  }

  @media screen and (max-width: 665px) {
    min-height: 60vh;
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

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    padding: 0 1.6rem;
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
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: ${FONT_SIZE_18};
  }
`;

export const SecondaryText = styled.span`
  font-size: 2.2rem;

  & b {
    font-weight: bold;
  }
`;

export const FirstLoreSectionArticle = styled(LoreSectionArticle)`
  margin-top: 24rem;
  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    margin-top: 8rem;
  }
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 0rem;
  }
`;

function TextSection() {
  return (
    <>
      <RightSection>
        <SectionBackground type='4' align='left' />

        <Ring type='2' />

        <FirstLoreSectionArticle title='Who we are'>
          <div>
            <SecondaryText>
              We&apos;re a team of engineers, researchers, data scientists, investors and leaders who go deeper than
              most are willing to go. Different backgrounds, one thing in common: an obsession with building the
              impossible, right.
            </SecondaryText>

            <SLink to='/squad'>
              <Button>Meet the squad</Button>
            </SLink>
          </div>
        </FirstLoreSectionArticle>
      </RightSection>

      <LeftSection>
        <LoreSectionArticle title='What we do'>
          <div>
            <SecondaryText>
              Wonderland focuses on foundational engineering for frontier technologies, with deep expertise in applied
              cryptography. We work on the hardest technical problems alongside teams we believe in and stay involved
              for the long term.
            </SecondaryText>

            <SecondaryText>
              We&apos;ve worked across privacy, DeFi, bridges, L2s, payments, AI, and stablecoins. We go wherever new
              primitives need to be defined.
            </SecondaryText>

            <SLink to='/creations'>
              <Button>Creations</Button>
            </SLink>
          </div>
        </LoreSectionArticle>

        <Ring type='1' />

        <SectionBackground type='1' align='right' />
      </LeftSection>

      <RightSection>
        <SectionBackground type='3' align='left' />

        <Ring type='2' />

        <LoreSectionArticle title='Our mission'>
          <div>
            <SecondaryText>
              Our mission is to make sure the most ambitious ideas in the world are not limited by technology. Ideas are
              abundant. What&apos;s scarce is the ability to build what has never been built before. That&apos;s what
              Wonderland brings to the table.
            </SecondaryText>

            <SLink to='https://handbook.wonderland.xyz/'>
              <Button>Handbooks</Button>
            </SLink>
          </div>
        </LoreSectionArticle>
      </RightSection>

      <LeftSection>
        <LoreSectionArticle title='Our values'>
          <div>
            <PrimaryText>Curiosity without ceiling</PrimaryText>
            <SecondaryText>
              We go deeper than anyone else is willing to go. The more unknown the territory, the more interested we
              are.
            </SecondaryText>

            <PrimaryText>Rigor meets wonder</PrimaryText>
            <SecondaryText>
              We hold two things at once: the discipline of engineering and the instinct to ask what if. Neither cancels
              the other out.
            </SecondaryText>

            <PrimaryText>Earned confidence</PrimaryText>
            <SecondaryText>
              We say what we know, know what we don&apos;t, and never pretend otherwise. Our credibility is the work.
            </SecondaryText>

            <PrimaryText>Own the outcome, build to last</PrimaryText>
            <SecondaryText>
              We are accountable for what we build. We stay involved and build systems meant to last.
            </SecondaryText>

            <PrimaryText>Work hard, stay human</PrimaryText>
            <SecondaryText>We communicate directly, understand context, and take care of each other.</SecondaryText>

            <SLink to='https://apply.wonderland.xyz/' external>
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
