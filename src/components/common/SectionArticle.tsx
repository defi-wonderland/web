import { FC } from "react";
import styled from "styled-components";

import {
  CONTENT_INDEX,
  DisplayText,
  FONT_SIZE_18,
  SPACING_530,
} from "~/components/common";

const sectionBorderOffset = "2.5rem";

export const TextContainer = styled.p`
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
`;

export const ArticleTitle = styled(DisplayText)``;

const StyledSectionArticle = styled.div<{ center?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${SPACING_530};
  max-width: calc(100% - var(--page-padding));
  z-index: ${CONTENT_INDEX};
  color: var(--text-light);

  ${ArticleTitle} {
    position: relative;
    padding: 0 1rem;

    &:after {
      content: "";
      height: 1px;
      width: calc(100% + ${sectionBorderOffset});
      position: absolute;
      background: white;
      bottom: 0;
      left: 0;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
    position: relative;

    &:after {
      content: "";
      height: calc(100% + ${sectionBorderOffset});
      width: 1px;
      position: absolute;
      background: white;
      top: -${sectionBorderOffset};
    }
  }

  strong {
    font-family: var(--font-medium-l);
    font-size: ${FONT_SIZE_18};
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-transform: uppercase;
  }

  strong,
  span {
    margin: 0.5rem 0;

    &:first-child {
      margin-top: 0;
    }
  }

  button {
    margin: 0 3.75rem;
    margin-top: 2.75rem;
    width: fit-content;
  }

  ${({ center }) =>
    !center &&
    `
    &:first-child {
      padding-left: ${sectionBorderOffset};

      ${ArticleTitle}:after {
        left: -${sectionBorderOffset};
      }

      div:after {
        left: 0;
      }
    }

    &:last-child {
      text-align: right;
      padding-right: ${sectionBorderOffset};

      ${ArticleTitle} {
        align-self: flex-end;

        &:after {
          right: -${sectionBorderOffset};
        }
      }

      div {
        align-items: flex-end;

        &:after {
          right: 0;
        }
      }
    }
  `}

  ${({ center }) =>
    center &&
    `
    text-align: center;
    align-items: center;

    ${ArticleTitle}:after,
    div:after {
      content: none;
    }
  `}
`;

export interface SectionArticleProps {
  title: string;
  center?: boolean;
  children: any;
}

export const SectionArticle: FC<SectionArticleProps> = ({
  title,
  center,
  children,
  ...props
}) => {
  return (
    <StyledSectionArticle center={center} {...props}>
      <ArticleTitle gradient>
        <TextContainer>{title}</TextContainer>
      </ArticleTitle>

      {children}
    </StyledSectionArticle>
  );
};
