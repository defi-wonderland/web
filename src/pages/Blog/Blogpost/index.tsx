import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { FONT_DISPLAY, FONT_SIZE_40 } from "~/components/common";

const Content = styled.div`
  max-width: 80rem;
  margin-top: 20rem;

  h1 {
    font-family: ${FONT_DISPLAY};
    font-size: ${FONT_SIZE_40};
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  p {
    padding: 0.8rem 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
      Helvetica, Roboto, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 100;
  }

  [aria-hidden="true"] {
    display: none;
  }

  img {
    width: 100%;
    padding: 1rem 3rem;
  }
`;

export function Blogpost() {
  const { id } = useParams();
  const [blog, setBlog] = useState("");

  useEffect(() => {
    // temporary fixed value:
    const id = 1;

    fetch(`/archives/${id}.md`)
      .then((response) => response.text())
      .then((data) => {
        setBlog(data);
      });
  }, []);

  return (
    <>
      <Content>
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {blog}
        </ReactMarkdown>
      </Content>
    </>
  );
}
