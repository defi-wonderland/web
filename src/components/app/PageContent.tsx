import styled from "styled-components";

const StyledPageContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface PageContentProps {
  children: any;
}

export const PageContent = ({ children }: PageContentProps) => (
  <StyledPageContent>{children}</StyledPageContent>
);
