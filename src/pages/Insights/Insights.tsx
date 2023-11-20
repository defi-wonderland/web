import { useNavigate } from 'react-router-dom';

import posts from '~/data/blog.json';
import {
  PageContainer,
  Title,
  BgContainer,
  BlogFooter,
  DescriptionContainer,
  DetailsContainer,
  BlogPost,
  Date,
  BackgroundImage,
  BlogsContainer,
  Image,
  Tag,
  TitleContainer as PostTitle,
  TagsContainer,
} from './Insights.styles';
import VIDEO_CHROME from '~/assets/videos/insights.webm';
import VIDEO_SAFARI from '~/assets/videos/insights.mp4';
import { TitleContainer } from '../Landing/HeroSection';
import { MOBILE_MAX_WIDTH } from '~/components/common';
import StarIcon from '/img/footer/star-icon.svg';
import styled from 'styled-components';

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

export const Star = styled.img.attrs({ loading: 'lazy' })`
  width: 3.2rem;
  pointer-events: none;
`;

export function Insights() {
  const navigate = useNavigate();

  return (
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
          <BlogPost
            key={post.id}
            onClick={() =>
              navigate({
                pathname: `/insights/${post.id}`,
              })
            }
          >
            <Image src={post.image} />
            <PostTitle>
              <Star src={StarIcon} alt='' />
              <h1>{post.name}</h1>
              <Star src={StarIcon} alt='' />
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
  );
}
