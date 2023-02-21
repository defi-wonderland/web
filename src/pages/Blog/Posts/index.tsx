import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import ReactMarkdown from "react-markdown";

import { Background, Content } from "./Posts.styles";

export function Posts() {
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
  );
}
