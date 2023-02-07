import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { POSTS } from "~/constants/posts";
import { Distortion } from "~/components/common/DistortionText";
import { FONT_DEFAULT, FONT_MEDIUM } from "~/components/common";

const Title = styled.div`
  margin-top: 12rem;
  margin-bottom: 4rem;
`;

const BlogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 120rem;
  justify-content: start;
  margin: 0 auto;
`;

const BlogPost = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: #1a2137;
  margin: 1rem;
  border-radius: 1.6rem;
  cursor: pointer;

  &:hover {
    opacity: 0.87;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 1.6rem 1.6rem 0 0;
`;

const DetailsContainer = styled.div`
  padding: 1rem;

  h1 {
    font-family: ${FONT_DEFAULT};
    font-size: 1.8rem;
    line-height: 1.5;
  }

  p {
    font-family: ${FONT_MEDIUM};
    font-size: 1.4rem;
  }

  strong {
    opacity: 0.87;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 7px;
    padding: 0 0.4rem;
    font-size: 1.4rem;
    line-height: 0.9;
    font-weight: 100;
    margin-right: 0.4rem;
  }
`;

export function Blog() {
  const navigate = useNavigate();

  return (
    <>
      <Title>
        <Distortion text="Wonderland Blog" />
      </Title>
      <BlogsContainer>
        {POSTS.map((post) => (
          <BlogPost key={post.id} onClick={() => navigate(`/blog/${post.id}`)}>
            <Image src={post.image} />
            <DetailsContainer>
              <h1>{post.name}</h1>
              <p>{post.description}</p>
              {post.tags.map((tag) => (
                <strong>{tag}</strong>
              ))}
            </DetailsContainer>
          </BlogPost>
        ))}
      </BlogsContainer>
    </>
  );
}
