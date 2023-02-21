import { useNavigate } from "react-router-dom";

import { POSTS } from "~/constants/posts";
import { Distortion } from "~/components/common/DistortionText";
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
} from "./Blog.styles";

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
