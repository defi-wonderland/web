import { Distortion } from "~/components/common/DistortionText";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { FONT_DISPLAY, FONT_SIZE_40 } from "~/components/common";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const Title = styled.div`
  margin-top: 12rem;
`;

const Content = styled.div`
  max-width: 80rem;

  h1 {
    font-family: ${FONT_DISPLAY};
    font-size: ${FONT_SIZE_40};
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

export function Blog() {
  const [blog, setBlog] = useState("");
  fetch("/blog/test.md")
    .then((response) => response.text())
    .then((data) => {
      setBlog(data);
    });

  return (
    <>
      <Title>
        <Distortion text="Blog" />
      </Title>
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
