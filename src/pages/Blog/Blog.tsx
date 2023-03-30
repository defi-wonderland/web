import { useNavigate } from 'react-router-dom';

import { POSTS } from '~/constants/posts';
import { Distortion, MainTitle } from '~/components/common';
import {
  PageContainer,
  Title,
  BgContainer,
  TagsContainer,
  DescriptionContainer,
  DetailsContainer,
  BlogPost,
  Date,
  TitleContainer,
  BackgroundImage,
  BlogsContainer,
  Image,
  Tags,
} from './Blog.styles';
import { useWindowDimensions } from '~/hooks/windowDimensions';

export function Blog() {
  const navigate = useNavigate();
  const { isMobile } = useWindowDimensions();

  return (
    <PageContainer>
      <Title>
        {!isMobile && (
          <>
            <Distortion text='NEWS, STORIES AND' />
            <Distortion text='UPDATES FROM WONDERLAND' />
          </>
        )}
        {isMobile && (
          <>
            <MainTitle fontSize={5.5}>NEWS, STORIES AND</MainTitle>
            <MainTitle fontSize={5.5}>UPDATES FROM WONDERLAND</MainTitle>
          </>
        )}
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
