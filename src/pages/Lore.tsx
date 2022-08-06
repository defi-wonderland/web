import styled, { css } from "styled-components";

import {
  ApproachSection,
  Footer,
  HeroSection,
  PageContent,
} from "@/components/app";
import {
  Ball,
  // Button,
  Ring,
  Section,
  SectionArticle,
} from "@/components/common";

const LoreSectionArticle = styled(SectionArticle)``;

const LoreSection = styled(Section)`
  width: calc(var(--page-max-width) + 11rem);
  grid-gap: 4.6rem;

  @media screen and (max-width: 1023px) {
    flex-direction: column;

    ${LoreSectionArticle} {
      order: 1;
    }
  }
`;

const sectionMediaStyles = css`
  @media screen and (max-width: 1023px) {
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

export function Lore() {
  return (
    <PageContent>
      <Ball />

      <HeroSection />

      <LeftSection>
        <LoreSectionArticle title="WHO WE ARE">
          <div>
            <span>
              We started as a small group of contributors with diverse
              backgrounds in software engineering, game theory, and venture
              capital.
            </span>

            <span>
              We met while contributing to several DeFi protocols in their early
              days and decided to join forces into one organization that allowed
              us to scale faster and make a much bigger impact within the
              ecosystem.
            </span>

            {/* <Button>Team</Button> */}
          </div>
        </LoreSectionArticle>

        <Ring type="1" />
      </LeftSection>

      <RightSection>
        <Ring type="2" />

        <LoreSectionArticle title="OUR MISSION">
          <div>
            <span>
              We were beginning to get very tired of sitting on the sidelines,
              and of having nothing to do: once or twice we peeped into what
              Paradigm was reading, but it had no pictures or conversations in
              it,“ and what is the use of a book,” we thought, “ without
              pictures or conversations?”
            </span>
            <span>
              So we were considering in our own mind, (as well as we could, for
              the hot day made us feel very sleepy and stupid) whether the
              pleasure of making a daisy-chain would be worth the trouble of
              getting up and picking the daisies, when suddenly a white rabbit
              with pink eyes ran close by us.
            </span>
            <span>
              Wonderland is an activist fund, as such, our goal is to join
              forces with the best builders in the world to shape the future of
              the web. We believe this future needs to be open-source,
              permissionless, and decentralized, and we strive towards that
              goal.
            </span>

            {/* <Button>Portfolio</Button> */}
          </div>
        </LoreSectionArticle>
      </RightSection>

      <LeftSection>
        <LoreSectionArticle title="OUR VALUES">
          <div>
            <span>
              We believe in the ethos of the ecosystem, and our sole goal is to
              preserve those values, we are activist investors in this
              ecosystem.
            </span>

            <span>
              Decentralized systems will ultimately open an array of
              possibilities worldwide, but specifically for people that have
              been left behind by the current financial system.
            </span>

            {/* <Button>Join us</Button> */}
          </div>
        </LoreSectionArticle>

        <Ring type="1" />
      </LeftSection>

      <ApproachSection />

      <Footer />
    </PageContent>
  );
}
