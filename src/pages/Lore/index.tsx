import styled from "styled-components";

import { PageContent } from "~/components/app";
import { ApproachSection } from "./ApproachSection";
import { Ball } from "~/components/common";
import TITLE from "~/assets/lore_text.png";
import CONE from "~/assets/Cono_bola.png";
import TextSection from "./TextSection";

const StyledApproachSection = styled(ApproachSection)`
  padding: "3rem 0";
`;

const SCone = styled.img`
  width: 517px;
  height: 695px;
  margin-right: 15%;
  margin-top: 189px;
`;

const STitle = styled.img`
  width: 1021px;
  height: 344px;
`;

const HeroDivider = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 320px;
`;

export function Lore() {
  return (
    <PageContent>
      <Ball />

      <HeroDivider>
        <STitle src={TITLE} alt="starts background" />
      </HeroDivider>
      <SCone src={CONE} alt="starts background" />

      <TextSection />

      <StyledApproachSection />
    </PageContent>
  );
}
