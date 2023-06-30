import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { CSSTransition } from 'react-transition-group';

import { Background, Title, Date, Content, BackgroundImage } from './Posts.styles';
import { posts } from '~/data/posts.json';

export function Posts() {
  const { id } = useParams();
  const [blog, setBlog] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch(`/blog-posts/${id}.md`)
      .then((response) => response.text())
      .then((data) => {
        const post = posts.filter((post) => post.id == id);
        setName(post[0].name);
        setDate(post[0].date);

        setBlog(data);
      });
  }, []);

  return (
    <CSSTransition in={!!blog} classNames='fade' timeout={200} appear unmountOnExit>
      <>
        <Title>{name}</Title>
        <BackgroundImage type='3' align='center' />
        <Background>
          <Content>
            <Date>{date}</Date>
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
              {blog}
            </ReactMarkdown>
          </Content>
        </Background>
      </>
    </CSSTransition>
  );
}
