import styled from "styled-components";
import { MOBILE_MAX_WIDTH } from "~/components/common";

export const Background = styled.div`
  max-width: 105rem;
  padding: 1rem 6rem;
  border-radius: 2rem;
  margin-top: 18rem;
  background-color: rgba(10, 13, 23, 1);
  z-index: 1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: unset;
    padding: 8rem 0;
  }
`;

export const Content = styled.div`
  margin-top: 20rem;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.87) !important;
  font-size: 1.75rem;
  font-family: Inter, sans-serif;
  line-height: 1.625;
  font-weight: 375;

  h1 {
    font-family: Inter, sans-serif !important;
    font-size: 4.8rem;
    font-weight: 600;
    letter-spacing: -0.05px;
    padding: 0 2.4rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Inter, sans-serif !important;
    margin: 3.6rem 0 1.2rem;
    padding: 0 2.4rem;
    font-weight: 600;
  }

  p,
  strong,
  span,
  li {
    font-family: Inter, sans-serif;
    line-height: 1.625;
    font-size: 1.75rem;
    font-weight: 375;
    margin: 2.4rem 0;
    letter-spacing: -0.004px;
    color: #ffffffb3;
    padding: 0 2.4rem;
  }

  strong {
    font-weight: 700;
    padding: unset;
  }

  li {
    padding: unset;
    margin: unset;
    margin-top: 0.8rem;
  }

  [aria-hidden="true"] {
    display: none;
  }

  img {
    width: 100%;
  }

  a {
    color: white;
    font-weight: 375;
    border-bottom: 1px solid rgba(255, 255, 255, 0.87);
    transition: all 200ms linear;
  }

  blockquote {
    margin: 1.2rem 0;
    font-style: italic;
  }

  blockquote p {
    border-left: 2px solid rgba(255, 255, 255, 0.87);
    font-family: Inter-italic;
  }

  & .date {
    background-color: unset;
  }

  math {
    font-size: 1.8rem;
  }
`;
