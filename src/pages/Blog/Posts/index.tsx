import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import ReactMarkdown from 'react-markdown';
import { CSSTransition } from 'react-transition-group';

import { Background, Banner, Content } from './Posts.styles';
import { POSTS } from '~/constants/posts';

export function Posts() {
  const { id } = useParams();
  const [blog, setBlog] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    fetch(`/archives/${id}.md`)
      .then((response) => response.text())
      .then((data) => {
        const post = POSTS.filter((post) => post.id == id);
        setImgUrl(post[0].image);

        setBlog(data);
      });
  }, []);

  return (
    <CSSTransition in={!!blog} classNames='fade' timeout={200} appear unmountOnExit>
      <Background>
        <Banner src={imgUrl} />
        <Content>
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {blog}
          </ReactMarkdown>
        </Content>
      </Background>
    </CSSTransition>
  );
}
