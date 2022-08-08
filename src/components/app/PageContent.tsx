import styled from "styled-components";

const StyledPageContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 10rem;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    padding-bottom: 3rem;
  }
`;

interface PageContentProps {
  children: any;
}

export const PageContent = ({ children }: PageContentProps) => (
  <StyledPageContent>{children}</StyledPageContent>
);
