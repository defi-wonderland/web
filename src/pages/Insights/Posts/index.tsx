import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { CSSTransition } from 'react-transition-group';

import { Background, Title, Date, Content, BackgroundImage } from './Posts.styles';
import { DocumentHead } from '~/components/common';
import posts from '~/data/blog.json';

interface BlogData {
  id: string;
  name: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
}

export function Posts() {
  const { id } = useParams();
  const [blog, setBlog] = useState('');
  const [blogData, setBlogData] = useState<BlogData>();

  useEffect(() => {
    fetch(`/blog-posts/${id}.md`)
      .then((response) => response.text())
      .then((data) => {
        const post = posts.filter((post) => post.id == id);

        setBlogData(post[0]);
        setBlog(data);
      });
  }, []);

  return (
    <CSSTransition in={!!blog} classNames='fade' timeout={200} appear unmountOnExit>
      <>
        <DocumentHead name={blogData?.name} description={blogData?.description} />

        <Title>{blogData?.name}</Title>
        <BackgroundImage type='3' align='center' />
        <Background>
          <Content>
            <Date>{blogData?.date}</Date>
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
              {blog}
            </ReactMarkdown>
          </Content>
        </Background>
      </>
    </CSSTransition>
  );
}
