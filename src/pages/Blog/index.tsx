import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { POSTS } from "~/constants/posts";
import { Distortion } from "~/components/common/DistortionText";
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

const Title = styled.div`
  margin-top: 16rem;
  margin-bottom: 10rem;
`;

const BlogsContainer = styled.div`
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

const BlogPost = styled.div`
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
    transform: scale(1.01);
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: calc(100% - 3rem);
    height: 36rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 21rem;
  border-radius: 1.6rem 1.6rem 0 0;
  object-fit: cover;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 65%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

const TitleContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.4rem;
  text-align: center;

  & h1 {
    font-family: ${FONT_MEDIUM_L};
    font-size: 2rem;
  }
`;

const DescriptionContainer = styled.div`
  padding: 4rem 4rem 0;
  height: 12rem;
  width: 100%;
  & p {
    font-family: ${FONT_MEDIUM};
    font-size: 1.8rem;
  }
`;

const TagsContainer = styled.div`
  padding: 2.4rem 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${FONT_MEDIUM};
`;

const Date = styled.div``;

const Tags = styled.div`
  display: flex;
  justify-content: end;

  & strong {
    width: max-content;
    text-transform: capitalize;
    margin: 0 1rem;

    font-size: 1.8rem;
  }
`;

export function Blog() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>
        <Distortion text="News, stories and updates from Wonderland" />
      </Title>
      <BgContainer>
        <BackgroundImage type="1" align="center" />
      </BgContainer>
      <BlogsContainer>
        {POSTS.map((post) => (
          <BlogPost key={post.id} onClick={() => navigate(`/blog/${post.id}`)}>
            <Image src={post.image} />
            <DetailsContainer>
              <TitleContainer>
                <h1>{post.name}</h1>
              </TitleContainer>
              <DescriptionContainer>
                <p>{post.description}</p>
              </DescriptionContainer>
              <TagsContainer>
                <Date>
                  <p>{post.date}</p>
                </Date>
                {post.tags.map((tag) => (
                  <Tags>
                    <strong>{tag}</strong>
                  </Tags>
                ))}
              </TagsContainer>
            </DetailsContainer>
          </BlogPost>
        ))}
      </BlogsContainer>
    </PageContainer>
  );
}
