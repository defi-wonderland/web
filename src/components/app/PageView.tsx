import styled from "styled-components";

const StyledPageView = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding 0 5%;
  margin: 0 auto;
  max-width: var(--page-max-width);
`;

interface PageViewProps {
  children: any;
}

export const PageView = ({ children }: PageViewProps) => (
  <StyledPageView>{children}</StyledPageView>
);
