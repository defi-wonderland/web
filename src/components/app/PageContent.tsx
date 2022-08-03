import styled from "styled-components";

const StyledPageContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10rem;
`;

interface PageContentProps {
  children: any;
}

export const PageContent = ({ children }: PageContentProps) => (
  <StyledPageContent>{children}</StyledPageContent>
);
