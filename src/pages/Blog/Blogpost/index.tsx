import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20rem;
`;

const Content = styled.div`
  max-width: 80rem;
  margin-top: 20rem;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.87) !important;
  padding: 1.6rem 3.2rem;
  font-size: 1.9rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    Helvetica, Roboto, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";

  h1 {
    font-size: 4rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  p,
  strong,
  span,
  li {
    padding: 0.8rem 0;
    font-weight: 100;
  }

  li {
    padding: 0.5rem 0;
  }

  [aria-hidden="true"] {
    display: none;
  }

  img {
    width: 100%;
    padding: 1rem 3rem;
  }

  a {
    color: rgba(255, 255, 255, 0.87);
    font-weight: 500;
    text-decoration: underline;
  }
`;

export function Blogpost() {
  const { id } = useParams();
  const [blog, setBlog] = useState("");

  useEffect(() => {
    fetch(`/archives/${id}.md`)
      .then((response) => response.text())
      .then((data) => {
        setBlog(data);
      });
  }, []);

  return (
    <>
      <Background>
        <Content>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {blog}
          </ReactMarkdown>
        </Content>
      </Background>
    </>
  );
}
