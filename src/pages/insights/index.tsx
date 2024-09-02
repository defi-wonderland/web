import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import {
  ContentContainer,
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  MOBILE_MAX_WIDTH,
  SectionBackground,
  SquigglyTitle,
} from '~/components';
import CustomHead from '~/components/CustomHead';

import posts from '~/data/blog.json';
import { TitleContainer } from '../landing/HeroSection';
import StarIcon from '~/public/img/footer/star-icon.svg';

export default function Insights() {
  return (
    <>
      <CustomHead title='Insights' />

      <ContentContainer>
        <PageContainer>
          <Title>
            <BlogTitleContainer>
              <SquigglyTitle
                text={`WHAT'S NEW?`}
                sizes={{
                  lg: '20rem',
                  md: '14rem',
                  sm: '10rem',
                  lgvw: '12vw',
                  mdvw: '16vw',
                }}
              />
            </BlogTitleContainer>
          </Title>

          <BgContainer>
            <BackgroundImage type='1' align='center' />
          </BgContainer>

          <BlogsContainer>
            {posts.map((post) => (
              <React.Fragment key={post.id}>
                {post.public && (
                  <BlogPost href={`/insights/${post.id}`}>
                    <Image src={post.image} alt='' />

                    <PostTitle>
                      <Star src={StarIcon.src} alt='' />
                      <h1>{post.name}</h1>
                      <Star src={StarIcon.src} alt='' />
                    </PostTitle>

                    <DetailsContainer>
                      <DescriptionContainer>
                        <p>{post.description}</p>
                      </DescriptionContainer>

                      <BlogFooter>
                        <Date>
                          <p>{post.date}</p>
                        </Date>

                        <TagsContainer>
                          {post.tags.map((tag) => (
                            <Tag key={tag}>
                              <strong>{tag}</strong>
                            </Tag>
                          ))}
                        </TagsContainer>
                      </BlogFooter>
                    </DetailsContainer>
                  </BlogPost>
                )}
              </React.Fragment>
            ))}
          </BlogsContainer>
        </PageContainer>
      </ContentContainer>
    </>
  );
}

const BlogTitleContainer = styled(TitleContainer)`
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: 3.8rem;
    position: relative;
    top: 0;
  }
`;

const Star = styled.img.attrs({ loading: 'lazy' })`
  width: 3.2rem;
  pointer-events: none;
`;

const PageContainer = styled.div`
  position: relative;
`;

const BgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: -1;
`;

const BackgroundImage = styled(SectionBackground)`
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
  height: 22rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 10rem;
    margin-bottom: 5rem;
    height: unset;
  }
`;

const BlogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 119rem;
  justify-content: space-between;
  margin: 0 auto;

  & a:nth-child(1) {
    width: 100%;

    & img {
      object-fit: cover;
    }
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    justify-content: center;
    width: 100%;

    & img {
      max-height: 27rem;
    }
  }
`;

const BlogPost = styled(Link)`
  color: inherit;
  width: calc(50% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #262c41;
  margin: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 200ms linear;
  overflow: hidden;

  &:hover {
    transform: scale(1.005);
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 95vw;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 31rem;
  object-fit: cover;
  min-height: 31rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    min-height: unset;
    height: 55%;
  }
`;

const DetailsContainer = styled.div`
  padding: 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
  width: 100%;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0;
  }
`;

const PostTitle = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  padding: 1.5rem 2rem;
  width: 100%;

  & h1 {
    font-family: ${FONT_MEDIUM_L};
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 1.6rem;
    gap: 1rem;

    & h1 {
      white-space: unset;
      text-overflow: unset;
      overflow: unset;
      font-size: 1.8rem;
    }
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  margin: 1rem 0 2rem;
  flex: 1;

  & p {
    font-family: ${FONT_MEDIUM};
    font-size: 2.2rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2rem 2rem 0;

    & p {
      font-size: 1.8rem;
    }
  }
`;

const BlogFooter = styled.div`
  padding-top: 1.5rem;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${FONT_MEDIUM};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 1.6rem 2rem;
    max-width: 95vw;

    & div strong {
      font-size: 1.8rem;
    }
  }
`;

const Date = styled.div`
  max-width: 30%;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #373737;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: flex-end;

  & strong {
    width: max-content;
    text-transform: capitalize;
    margin: 0 1rem;
    font-size: 2.2rem;
  }
`;
