import { useNavigate } from 'react-router-dom';

import { POSTS } from '~/constants/posts';
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
} from './Blog.styles';
import VIDEO_CHROME from '~/assets/videos/video_chrome.webm';
import VIDEO_SAFARI from '~/assets/videos/video_safari.mp4';
import { TitleContainer } from '../Landing/HeroSection';

export function Blog() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>
        <TitleContainer>
          <video autoPlay loop muted playsInline>
            <source src={VIDEO_CHROME} type='video/webm' />
            <source src={VIDEO_SAFARI} type='video/mp4; codecs="hvc1"' />
          </video>
        </TitleContainer>
      </Title>
      <BgContainer>
        <BackgroundImage type='1' align='center' />
      </BgContainer>
      <BlogsContainer>
        {POSTS.map((post) => (
          <BlogPost
            key={post.id}
            onClick={() =>
              navigate({
                pathname: `/blog/${post.id}`,
                search: `?${post.name.toLowerCase().replaceAll(' ', '-')}`,
              })
            }
          >
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
