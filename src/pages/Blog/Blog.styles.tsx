import styled from "styled-components";

import {
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  MOBILE_MAX_WIDTH,
  SectionBackground,
} from "~/components/common";

export const PageContainer = styled.div`
  position: relative;
`;

export const BgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: -1;
`;

export const BackgroundImage = styled(SectionBackground)`
  position: absolute;
  width: 70%;
  margin: 0 auto;
  z-index: -1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin-top: 16rem;
  margin-bottom: 10rem;
`;

export const BlogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 116rem;
  justify-content: space-between;
  margin: 0 auto;

  & div:nth-child(1) {
    width: 100%;

    & img {
      object-fit: cover;
    }
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    justify-content: center;
  }
`;

export const BlogPost = styled.div`
  width: 56rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  margin: 1rem;
  border-radius: 1.6rem;
  cursor: pointer;
  transition: all 200ms linear;

  &:hover {
    transform: scale(1.005);
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: calc(100% - 3rem);
    height: 36rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 21rem;
  border-radius: 1.6rem 1.6rem 0 0;
  object-fit: cover;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 65%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  text-align: center;

  & h1 {
    font-family: ${FONT_MEDIUM_L};
    font-size: 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 4rem 4rem 0;
  height: 12rem;
  width: 100%;
  & p {
    font-family: ${FONT_MEDIUM};
    font-size: 1.8rem;
  }
`;

export const TagsContainer = styled.div`
  padding: 2.4rem 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${FONT_MEDIUM};
`;

export const Date = styled.div``;

export const Tags = styled.div`
  display: flex;
  justify-content: end;

  & strong {
    width: max-content;
    text-transform: capitalize;
    margin: 0 1rem;

    font-size: 1.8rem;
  }
`;
