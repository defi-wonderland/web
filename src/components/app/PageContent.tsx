import styled from "styled-components";
import { MOBILE_MAX_WIDTH } from "../common";

const StyledPageContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-bottom: 6rem;
  }
`;

interface PageContentProps {
  children: any;
}

export const PageContent = ({ children }: PageContentProps) => (
  <StyledPageContent>{children}</StyledPageContent>
);
