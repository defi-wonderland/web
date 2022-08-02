import styled from "styled-components";

const StyledPageView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface PageViewProps {
  children: any;
}

export const PageView = ({ children }: PageViewProps) => (
  <StyledPageView>{children}</StyledPageView>
);
