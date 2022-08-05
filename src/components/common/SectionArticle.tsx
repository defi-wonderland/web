import { FC } from "react";
import styled from "styled-components";

const sectionBorderOffset = "2.5rem";

const StyledSectionArticle = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
  z-index: var(--content-index);

  h1 {
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

  button {
    width: auto;
  }

  &.left {
    h1 {
      margin-left: ${sectionBorderOffset};

      &:after {
        left: -${sectionBorderOffset};
      }
    }

    div {
      margin-left: ${sectionBorderOffset};

      &:after {
        left: 0;
      }
    }
  }

  &.right {
    text-align: right;

    h1 {
      margin-right: ${sectionBorderOffset};

      &:after {
        right: -${sectionBorderOffset};
      }
    }

    div {
      margin-right: ${sectionBorderOffset};

      &:after {
        right: 0;
      }
    }
  }

  &.center {
    h1:after,
    div:after {
      content: none;
    }
  }
`;

export interface SectionArticleProps {
  className?: any;
  children: any;
}

export const SectionArticle: FC<SectionArticleProps> = ({
  className,
  children,
  ...props
}) => {
  return <StyledSectionArticle {...props}>{children}</StyledSectionArticle>;
};
