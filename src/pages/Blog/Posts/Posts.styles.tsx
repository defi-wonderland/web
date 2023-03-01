import styled from "styled-components";
import { MOBILE_MAX_WIDTH } from "~/components/common";

export const Background = styled.div`
  max-width: 105rem;
  overflow: hidden;
  border-radius: 1rem;
  margin-top: 12rem;
  background-color: rgba(10, 13, 23, 1);
  z-index: 1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: unset;
    padding-bottom: 5rem;
    background-color: unset;
    background-image: linear-gradient(
      to bottom,
      rgba(10, 13, 23, 1) calc(100% - 5rem),
      rgba(10, 13, 23, 0)
    );
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 20rem;
  }
`;

export const Content = styled.div`
  margin-top: 20rem;
  padding: 4rem 6rem;
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

  span {
    padding: unset;
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

  p > img {
    display: flex;
    max-width: 72rem;
    width: 100%;
    margin: 0 auto;
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

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2rem 0 0;

    h1 {
      font-size: 3rem;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0 1.6rem;
    }

    blockquote {
      padding-left: 1.6rem;
    }

    ul {
      padding-right: 1.6rem;
    }
  }
`;
