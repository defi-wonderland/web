import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import { FONT_MEDIUM, FONT_MEDIUM_L, MOBILE_MAX_WIDTH, SectionBackground } from '~/components';

import posts from '~/data/blog.json';
import VIDEO_CHROME from '~/assets/videos/insights.webm';
import VIDEO_SAFARI from '~/assets/videos/insights.mp4';
import { TitleContainer } from '../landing/HeroSection';
import StarIcon from '~/public/img/footer/star-icon.svg';
import Meatadata from '~/components/Meatadata';

export default function Insights() {
  const router = useRouter();

  return (
    <>
      <Meatadata title='Insights' />
      <PageContainer>
        <Title>
          <BlogTitleContainer>
            <video autoPlay loop muted playsInline>
              <source src={VIDEO_CHROME} type='video/webm' />
              <source src={VIDEO_SAFARI} type='video/mp4; codecs="hvc1"' />
            </video>
          </BlogTitleContainer>
        </Title>
        <BgContainer>
          <BackgroundImage type='1' align='center' />
        </BgContainer>
        <BlogsContainer>
          {posts.map((post) => (
            <BlogPost key={post.id} onClick={() => router.push(`/insights/${post.id}`)}>
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
          ))}
        </BlogsContainer>
      </PageContainer>
    </>
  );
}

const BlogTitleContainer = styled(TitleContainer)`
  & video {
    max-width: 450px;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: 5rem;
    & video {
      max-width: 300px;
    }
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

  & div:nth-child(1) {
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

const BlogPost = styled.div`
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
