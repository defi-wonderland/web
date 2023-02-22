import styled from "styled-components";
import { MOBILE_MAX_WIDTH } from "~/components/common";

export const Background = styled.div`
  padding: 1rem 5rem;
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
  max-width: 80rem;
  margin-top: 20rem;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.87) !important;
  padding: 1.6rem 3.2rem;
  font-size: 1.9rem;
  font-family: Inter, sans-serif;

  h1 {
    font-family: Inter, sans-serif !important;
    padding: 1rem 0;
    font-size: 3.6rem;
    margin-bottom: 1rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Inter, sans-serif !important;
    padding: 1rem 0;
  }

  p,
  strong,
  span,
  li {
    font-family: Inter, sans-serif;
    font-size: 1.4rem;
    padding: 0.8rem 0;
    font-weight: 300;
  }

  strong {
    font-weight: 600;
  }

  li {
    padding: 0.5rem 0;
  }

  [aria-hidden="true"] {
    display: none;
  }

  img {
    width: 100%;
    padding: 1rem 3rem;
  }

  a {
    color: white;
    opacity: 0.87;
    font-weight: 300;
    border-bottom: 1px solid rgba(255, 255, 255, 0.87);
    transition: all 200ms linear;

    &:hover {
      opacity: 1;
    }
  }

  blockquote {
    margin: 1rem 0;
    border-left: 2px solid rgba(255, 255, 255, 0.87);
    padding-left: 1rem;
    font-style: italic;
  }

  blockquote p {
    font-family: Inter-italic;
  }

  & .date {
    background-color: unset;
  }

  math {
    font-size: 1.8rem;
    display: none;
  }
  img {
    display: none;
  }
`;
