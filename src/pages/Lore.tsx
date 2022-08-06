import styled from "styled-components";

import {
  ApproachSection,
  Footer,
  HeroSection,
  PageContent,
} from "@/components/app";
import {
  Ball,
  Button,
  Ring,
  Section,
  SectionArticle,
} from "@/components/common";

const LoreSectionArticle = styled(SectionArticle)``;

const LoreSection = styled(Section)`
  width: calc(var(--page-max-width) + 11rem);
  grid-gap: 4.6rem;

  @media screen and (max-width: 900px) {
    flex-directon: column;

    ${LoreSectionArticle} {
      order: 1;
    }
  }
`;

const LeftSection = styled(LoreSection)`
  justify-content: flex-start;
`;
const RightSection = styled(LoreSection)`
  justify-content: flex-end;
`;

export function Lore() {
  return (
    <PageContent>
      <Ball />

      <HeroSection />

      <LeftSection>
        <LoreSectionArticle title="WHO WE ARE">
          <div>
            <strong>
              We started as a small group of activists with diverse backgrounds.
              Coding, Big Data, Finance and VC are our cup of tea.
            </strong>

            <span>
              We met while collaborating with several DeFi protocols in the
              early days and decided to join forces into one organization that
              would let us scale and make a much bigger impact which would
              become DeFi Wonderland.
            </span>

            <Button>Team</Button>
          </div>
        </LoreSectionArticle>

        <Ring type="1" />
      </LeftSection>

      <RightSection>
        <Ring type="2" />

        <LoreSectionArticle title="OUR MISSION">
          <div>
            <span>
              We currently work as an activist fund but we share the ethos of
              the ecosystem, creating much more value than the one we take: we
              grow projects, communities, markets in a more decentralized and
              self-sustainable manner, only proffiting when the value we add is
              exponentially higher than the one we’ll extract.
            </span>

            <Button>Portfolio</Button>
          </div>
        </LoreSectionArticle>
      </RightSection>

      <LeftSection>
        <LoreSectionArticle title="OUR VALUES">
          <div>
            <strong>
              We're value creators, always seeking to understand the ecosystem
              needs and interests, providing valuable propositions that address
              them, and that's how we will remain, it's our ethos.
            </strong>

            <span>
              We believe DeFi is mind boggling and will open an array of
              possibilities all around the world, but especially for people that
              have been left behind by the current financial system.
            </span>

            <span>We will help DeFi achieve scale through our code.</span>

            <Button>Join us</Button>
          </div>
        </LoreSectionArticle>

        <Ring type="1" />
      </LeftSection>

      <ApproachSection />

      <Footer />
    </PageContent>
  );
}
