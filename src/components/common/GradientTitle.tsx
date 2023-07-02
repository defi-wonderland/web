import styled from 'styled-components';
import { ArticleTitle, TextContainer } from './SectionArticle';

const SContainer = styled(ArticleTitle)`
  position: relative;
  z-index: 100;
`;

export function GradientTitle({ title }: { title: string }) {
  return (
    <SContainer gradient>
      <TextContainer>{title}</TextContainer>
    </SContainer>
  );
}
