import { useEffect, useState } from 'react';
import styled from 'styled-components';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { CSSTransition } from 'react-transition-group';
import type { InferGetStaticPropsType } from 'next';

import posts from '~/data/blog.json';
import { MOBILE_MAX_WIDTH, SectionBackground } from '~/components';
import CustomHead from '~/components/CustomHead';

const paths = posts.map((post) => ({
  params: {
    post: post.id,
  },
}));

export const getStaticPaths = async () => {
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: { params: { post: string } }) => {
  const path = context.params?.post;
  return { props: { path } };
};

export default function Posts({ path }: InferGetStaticPropsType<typeof getStaticProps>) {
  const id = path;
  const postData = posts.filter((post) => post.id === path)[0];

  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(`/blog-posts/${id}.md`)
      .then((response) => response.text())
      .then((data) => {
        setBlog(data);
      });
  }, [id]);

  return (
    <>
      <CustomHead
        title={postData?.name}
        image={`/img/blog-posts/${id}/cover.jpg`}
        description={postData?.description}
      />
      <CSSTransition in={!!blog} classNames='fade' timeout={200} appear unmountOnExit>
        <>
          <Title>{postData?.name}</Title>
          <BackgroundImage type='3' align='center' />
          <Background>
            <Content>
              <Date>{postData?.date}</Date>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
                {blog}
              </ReactMarkdown>
            </Content>
          </Background>
        </>
      </CSSTransition>
    </>
  );
}

const Title = styled.h1`
  font-family: SharpGrotesk-10;
  margin-top: 22rem;
  font-size: 10rem;
  text-align: center;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 12rem;
    margin-bottom: 4rem;
  }
`;

const Date = styled.p`
  margin-top: 2rem;
  font-weight: bold !important;
`;

const BackgroundImage = styled(SectionBackground)`
  width: 100%;
  max-width: 90rem;
  z-index: -1;
`;

const Background = styled.div`
  max-width: 105rem;
  overflow: hidden;
  border-radius: 1rem;
  margin-top: 5rem;
  background-color: #2d3345;
  z-index: 1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: unset;
    padding-bottom: 5rem;
    background-color: unset;
    background-image: linear-gradient(to bottom, rgba(10, 13, 23, 1) calc(100% - 5rem), rgba(10, 13, 23, 0));
  }
`;

const Content = styled.div`
  margin-top: 20rem;
  padding: 4rem 6rem;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.87) !important;
  font-size: 1.75rem;
  font-family: Inter, sans-serif;
  line-height: 1.625;
  font-weight: 375;

  .twitter-player {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
  }

  .ytplayer {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    .twitter-player iframe {
      width: 90%;
      height: 80vh;
    }
    .ytplayer {
      padding: 1rem;
    }
  }

  h1 {
    font-family: SharpGrotesk-10, sans-serif !important;
    font-size: 4.8rem;
    font-weight: 600;
    letter-spacing: -0.05px;
    padding: 0 2.4rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Inter, sans-serif !important;
    margin: 3.6rem 0 1.2rem;
    padding: 0 2.4rem;
    font-weight: 600;
  }

  p,
  strong,
  span,
  li {
    font-family: Inter, sans-serif;
    line-height: 1.625;
    font-size: 1.75rem;
    font-weight: 375;
    margin: 2.4rem 0;
    letter-spacing: -0.004px;
    color: #ffffffb3;
    padding: 0 2.4rem;
  }

  span {
    padding: unset;
  }

  strong {
    font-weight: 700;
    padding: unset;
  }

  li {
    padding: unset;
    margin: unset;
    margin-top: 0.8rem;
  }

  [aria-hidden='true'] {
    display: none;
  }

  p > img {
    display: flex;
    max-width: 72rem;
    width: 100%;
    margin: 0 auto;
  }

  a {
    color: white;
    font-weight: 375;
    border-bottom: 1px solid rgba(255, 255, 255, 0.87);
    transition: all 200ms linear;
    cursor: pointer;
  }

  blockquote {
    margin: 1.2rem 0;
    font-style: italic;
  }

  blockquote p {
    border-left: 2px solid rgba(255, 255, 255, 0.87);
    font-family: Inter-italic;
  }

  & .date {
    background-color: unset;
  }

  math {
    font-size: 2.2rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2rem 1rem 0;

    h1 {
      font-size: 3rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0 1.6rem;
    }

    blockquote {
      padding-left: 1.6rem;
    }

    ul {
      padding-right: 1.6rem;
    }
    pre {
      display: flex;
      width: fit-content;
      margin: 0 auto;
    }

    pre code {
      width: 350px;
      transform: scale(0.9);
      overflow-y: hidden;
      overflow-x: auto;
    }

    .math .math-inline {
      max-width: 80vw;
      height: 100%;
      width: 100%;
      overflow-y: hidden;
      overflow-x: auto;
    }

    p {
      max-width: 100vw;
      padding: 0 1.8rem;
    }

    li {
      max-width: 90vw;
    }

    mrow {
      max-width: 90vw;
      overflow-x: auto;
    }

    aside {
      padding: 0 2.2rem;
    }
  }
`;
