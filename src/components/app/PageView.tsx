import styled from "styled-components";

const StyledPageView = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

interface PageViewProps {
  children: any;
}

export const PageView = ({ children }: PageViewProps) => (
  <StyledPageView>{children}</StyledPageView>
);
