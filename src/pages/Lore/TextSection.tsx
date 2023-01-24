import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  Button,
  Ring,
  Section,
  SectionArticle,
  SectionBackground,
} from "~/components/common";
const sectionPadding = "3rem 0";

const LoreSectionArticle = styled(SectionArticle)``;

const LoreSection = styled(Section)`
  width: calc(var(--page-max-width) + 12rem);
  max-width: 100%;
  grid-gap: 4.6rem;

  @media screen and (max-width: 1400px) {
    flex-direction: column;

    ${LoreSectionArticle} {
      order: 1;
    }
  }

  @media screen and (max-width: 500px) {
    padding: ${sectionPadding};
  }
`;

const sectionMediaStyles = css`
  @media screen and (max-width: 1200px) {
    justify-content: center;
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
`;

export const SecondaryText = styled.span`
  font-size: 1.8rem;
`;

function TextSection() {
  return (
    <>
      <LeftSection>
        <LoreSectionArticle title="WHO WE ARE">
          <div>
            <PrimaryText>
              We started as a small group of activists with diverse backgrounds.
              Coding, Big Data, Finance and VC are our cup of tea.
            </PrimaryText>

            <SecondaryText>
              We met while collaborating with several DeFi protocols in the
              early days and decided to join forces into one organization that
              would let us scale and make a much bigger impact which would
              become DeFi Wonderland.
            </SecondaryText>

            <Link to="/team">
              <Button>Team</Button>
            </Link>
          </div>
        </LoreSectionArticle>
        <Ring type="1" />

        <SectionBackground type="4" align="right" />
      </LeftSection>

      <RightSection>
        <SectionBackground type="1" align="left" />

        <Ring type="2" />

        <LoreSectionArticle title="OUR MISSION">
          <div>
            <SecondaryText>
              We currently work as an activist fund but we share the ethos of
              the ecosystem, creating much more value than the one we take: we
              grow projects, communities, markets in a more decentralized and
              self-sustainable manner, only proffiting when the value we add is
              exponentially higher than the one we’ll extract.
            </SecondaryText>

            <Link to="/portfolio">
              <Button>Portfolio</Button>
            </Link>
          </div>
        </LoreSectionArticle>
      </RightSection>

      <LeftSection>
        <LoreSectionArticle title="OUR VALUES">
          <div>
            <PrimaryText>
              We're value creators, always seeking to understand the ecosystem
              needs and interests, providing valuable propositions that address
              them, and that's how we will remain, it's our ethos.
            </PrimaryText>

            <SecondaryText>
              We believe DeFi is mind boggling and will open an array of
              possibilities all around the world, but especially for people that
              have been left behind by the current financial system.
            </SecondaryText>

            <SecondaryText>
              We will help DeFi achieve scale through our code.
            </SecondaryText>
            <Link to="/contact">
              <Button>Join us</Button>
            </Link>
          </div>
        </LoreSectionArticle>

        <Ring type="1" />

        <SectionBackground type="2" align="right" />
      </LeftSection>
    </>
  );
}

export default TextSection;
