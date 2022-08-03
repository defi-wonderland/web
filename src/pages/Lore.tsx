import styled from "styled-components";

import { Footer, PageContent } from "@/components/app";
import { Ball, Button } from "@/components/common";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &.left {
    align-items: flex-start;
  }
  &.right {
    align-items: flex-end;
    text-align: right;
  }

  article {
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--text-light);
    padding: 1rem 0 0 1rem;
    width: 45rem;
    max-width: 100%;
  }

  button {
    width: auto;
  }
`;

export function Lore() {
  return (
    <PageContent>
      <Ball />

      <Section className="left">
        <h1>WHO WE ARE</h1>
        <article>
          <p>
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum
          </p>
          <span>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </span>
          <Button>Team</Button>
        </article>
      </Section>

      <Section className="right">
        <h1>OUR MISSION</h1>
        <article>
          <span>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </span>
          <Button>Portfolio</Button>
        </article>
      </Section>

      <Section className="left">
        <h1>OUR VALUES</h1>
        <article>
          <p>
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum
          </p>
          <span>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </span>
          <span>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </span>
          <Button>Join us</Button>
        </article>
      </Section>

      <Section>
        <h1>OUR APPROACH</h1>
        <article>
          <p>
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          </p>
          <div className="steps"></div>
          <Button>Join us</Button>
        </article>
      </Section>

      <Footer />
    </PageContent>
  );
}
