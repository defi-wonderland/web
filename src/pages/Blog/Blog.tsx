import { useNavigate } from 'react-router-dom';

import { posts } from '~/data/posts.json';
import {
  PageContainer,
  Title,
  BgContainer,
  TagsContainer,
  DescriptionContainer,
  DetailsContainer,
  BlogPost,
  Date,
  BackgroundImage,
  BlogsContainer,
  Image,
  Tags,
  TitleContainer as PostTitle,
} from './Blog.styles';
import VIDEO_CHROME from '~/assets/videos/blog.webm';
import VIDEO_SAFARI from '~/assets/videos/blog.mp4';
import { TitleContainer } from '../Landing/HeroSection';
import StarIcon from '/img/footer/star-icon.svg';
import styled from 'styled-components';

const BlogTitleContainer = styled(TitleContainer)`
  & video {
    max-width: 450px;
  }
`;

export const Star = styled.img.attrs({ loading: 'lazy' })`
  width: 3.2rem;
  pointer-events: none;
`;

export function Blog() {
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
                pathname: `/blog/${post.id}`,
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
              <TagsContainer>
                <Date>
                  <p>{post.date}</p>
                </Date>
                {post.tags.map((tag) => (
                  <Tags key={tag}>
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
