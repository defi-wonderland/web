import styled from "styled-components";

import { Footer, HeroHeading, PageContent } from "@/components/app";
import {
  Ball,
  Button,
  Ring,
  Section,
  SectionArticle,
} from "@/components/common";

export function Lore() {
  return (
    <PageContent>
      <Ball />

      <Section backgroundImage="/src/assets/img/hero/hero-bg.jpg">
        <HeroHeading text="TO HELP THE WEB3 ECOSYSTEM THRIVE" />
      </Section>

      <Section>
        <Ring type="1" />
        <SectionArticle className="left">
          <h1 className="gradient">WHO WE ARE</h1>
          <div>
            <p>
              We started as a small group of activists with diverse backgrounds.
              Coding, Big Data, Finance and VC are our cup of tea.
            </p>

            <span>
              We met while collaborating with several DeFi protocols in the
              early days and decided to join forces into one organization that
              would let us scale and make a much bigger impact which would
              become DeFi Wonderland.
            </span>

            <Button>Team</Button>
          </div>
        </SectionArticle>
      </Section>

      <Section>
        <Ring type="2" />
        <SectionArticle className="right">
          <h1 className="gradient">OUR MISSION</h1>
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
        </SectionArticle>
      </Section>

      <Section>
        <Ring type="1" />
        <SectionArticle className="left">
          <h1 className="gradient">OUR VALUES</h1>
          <div>
            <p>
              We're value creators, always seeking to understand the ecosystem
              needs and interests, providing valuable propositions that address
              them, and that's how we will remain, it's our ethos.
            </p>

            <span>
              We believe DeFi is mind boggling and will open an array of
              possibilities all around the world, but especially for people that
              have been left behind by the current financial system.
            </span>

            <span>We will help DeFi achieve scale through our code.</span>

            <Button>Join us</Button>
          </div>
        </SectionArticle>
      </Section>

      <Section className="center">
        <SectionArticle>
          <h1>OUR APPROACH</h1>
          <div>
            <p>We believe there are 3 pillars for any protocol to scale:</p>
            <div className="steps">
              <div className="step">
                <strong>1</strong>
                <span>
                  Composability, in DeFi, is the ability for applications and
                  protocols to interact with one another in a permissionless way
                  — meaning they are constantly talking to one another and
                  leveraging each other’s code, and therefore each other’s
                  utility.
                </span>
              </div>

              <div className="step">
                <strong>2</strong>
                <span>
                  Decentralization is a sliding scale and should be applied to
                  all aspects of a blockchain application. By decentralizing the
                  management of and access to resources in an application,
                  greater and fairer service can be achieved.
                </span>

                <span>
                  Decentralization typically has some tradeoffs, but ideally,
                  the tradeoffs are worth the improved stability and service
                  levels they produce.
                </span>
              </div>

              <div className="step">
                <strong>3</strong>
                <span>
                  Self-sustainability (or how we call it “set and forget”): A
                  system is self-sustaining if it can maintain itself by
                  independent effort, without any external support.
                </span>
              </div>
            </div>
            <Button>Join us</Button>
          </div>
        </SectionArticle>
      </Section>

      <Footer />
    </PageContent>
  );
}
