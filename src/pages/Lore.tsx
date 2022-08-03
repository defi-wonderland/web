import styled from "styled-components";

import { Footer, PageContent } from "@/components/app";
import { Ball, Button } from "@/components/common";

const sectionBorderOffset = "4rem";

const SectionArticle = styled.div`
  display: flex;
  flex-direction: column;
  width: 55rem;
  max-width: 100%;

  h1 {
    position: relative;
    width: 100%;
    padding: 0 1rem;

    &:after {
      content: "";
      height: 1px;
      width: calc(100% + ${sectionBorderOffset});
      position: absolute;
      background: white;
      bottom: 0;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
    position: relative;

    &:after {
      content: "";
      height: calc(100% + ${sectionBorderOffset});
      width: 1px;
      position: absolute;
      background: white;
      top: -${sectionBorderOffset};
    }
  }

  button {
    width: auto;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &.left {
    align-items: flex-start;

    ${SectionArticle} {
      h1 {
        margin-left: ${sectionBorderOffset};

        &:after {
          left: -${sectionBorderOffset};
        }
      }

      div {
        margin-left: ${sectionBorderOffset};

        &:after {
          left: 0;
        }
      }
    }
  }
  &.right {
    align-items: flex-end;

    ${SectionArticle} {
      text-align: right;

      h1 {
        margin-right: ${sectionBorderOffset};

        &:after {
          right: -${sectionBorderOffset};
        }
      }

      div {
        margin-right: ${sectionBorderOffset};

        &:after {
          right: 0;
        }
      }
    }
  }

  &.center ${SectionArticle} {
    h1:after,
    div:after {
      content: none;
    }
  }
`;

export function Lore() {
  return (
    <PageContent>
      <Ball />

      <Section className="left">
        <SectionArticle>
          <h1>WHO WE ARE</h1>
          <div>
            <p>
              Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum
            </p>
            <span>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </span>
            <Button>Team</Button>
          </div>
        </SectionArticle>
      </Section>

      <Section className="right">
        <SectionArticle>
          <h1>OUR MISSION</h1>
          <div>
            <span>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </span>
            <Button>Portfolio</Button>
          </div>
        </SectionArticle>
      </Section>

      <Section className="left">
        <SectionArticle>
          <h1>OUR VALUES</h1>
          <div>
            <p>
              Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum
            </p>
            <span>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </span>
            <span>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </span>
            <Button>Join us</Button>
          </div>
        </SectionArticle>
      </Section>

      <Section className="center">
        <SectionArticle>
          <h1>OUR APPROACH</h1>
          <div>
            <p>
              Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem
            </p>
            <div className="steps"></div>
            <Button>Join us</Button>
          </div>
        </SectionArticle>
      </Section>

      <Footer />
    </PageContent>
  );
}
