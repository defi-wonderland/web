import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { POSTS } from "~/constants/posts";

const Background = styled.div`
  padding: 1rem 5rem;
  border-radius: 2rem;
  margin-top: 18rem;
  background-color: rgba(10, 13, 23, 1);
  z-index: 1;
`;

const Content = styled.div`
  max-width: 80rem;
  margin-top: 20rem;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.87) !important;
  padding: 1.6rem 3.2rem;
  font-size: 1.9rem;
  font-family: Inter, sans-serif;

  h1 {
    font-family: Inter, sans-serif !important;
    padding: 1rem 0;
    font-size: 3.6rem;
    margin-bottom: 1rem;
  }

  p,
  strong,
  span,
  li {
    font-size: 1.4rem;
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
    font-weight: 300;
    border-bottom: 1px solid rgba(255, 255, 255, 0.87);
  }

  blockquote {
    margin: 1rem 0;
    border-left: 2px solid rgba(255, 255, 255, 0.87);
    padding-left: 1rem;
    font-style: italic;
    font-family: Inter-italic;
  }

  & .date {
    background-color: unset;
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const date = document.getElementsByClassName("date");
    if (blog && !date[0]) {
      const blogNumber = location.pathname.split("/");
      const result = POSTS.filter((post) => post.id === blogNumber[2]);
      const title = document.getElementsByTagName("h1");

      const date = document.createElement("p");
      date.classList.add("date");
      date.innerHTML = result[0].date;

      title[0].append(date);
    }
  }, [blog]);

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
