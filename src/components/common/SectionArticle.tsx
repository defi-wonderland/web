import { FC } from "react";
import styled from "styled-components";

import {
  CONTENT_INDEX,
  DisplayText,
  FONT_MEDIUM_L,
  FONT_SIZE_18,
  MOBILE_MAX_WIDTH,
  SPACING_530,
} from "~/components/common";
import STAR from "~/assets/lore-stars.svg";

const sectionBorderOffset = "3rem";

export const TextContainer = styled.p`
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  display: inline;
  position: relative;
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
      width: calc(100% + ${sectionBorderOffset} + 1.5rem);
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
      top: calc(-${sectionBorderOffset} - 1.5rem);
    }
  }

  strong {
    font-family: ${FONT_MEDIUM_L};
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

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    strong,
    span {
      font-size: 1.6rem;
    }

    div:after {
      top: calc(-${sectionBorderOffset});
    }

    .bottom-star {
      display: none;
    }
  }

  ${({ center }) =>
    !center &&
    `
    &:first-child {
      padding-left: ${sectionBorderOffset};

      ${ArticleTitle}:after {
        left: calc(-${sectionBorderOffset} - 1.5rem);
      }

      div:after {
        left: 0;
      }

      .base-star {
        left: calc(-${sectionBorderOffset} - 1.5rem);
      }

      .mid-star {
        left: 45%;
        width: 2rem;
        top: 0.5rem;
      }

      .last-star {
        left: 105%;
        width: 3rem;
        top: 4rem;
      }

      .bottom-star {
       top: 45rem;
       width: 2.5rem;
       left: 60%;
      }

      @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
        ${ArticleTitle}:after {
          width: calc(100% + ${sectionBorderOffset});
          left: -${sectionBorderOffset}; 
        }

        .base-star {
          width: 2.5rem;
          left: -3rem;
          top: 3.5rem;
        }

        .mid-star {
          top: 0rem;
          width: 1.5rem;
        }

        .last-star {
          top: 2rem;
          width: 2rem;
        }
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

      .base-star {
        right: calc(-${sectionBorderOffset} - 1.5rem);
      }

      .mid-star {
        right: 45%;
        width: 2rem;
        top: 0.5rem;
      }

      .last-star {
        right: 105%;
        width: 3rem;
        top: 4rem;
      }

      .bottom-star {
       top: 31rem;
       width: 2.5rem;
       right: 72%;
      }

      @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
        ${ArticleTitle}:after {
          width: calc(100% + ${sectionBorderOffset});
        }

        .base-star {
          width: 2.5rem;
          right: -3rem;
          top: 3.5rem;
        }
        
        .mid-star {
          top: 0rem;
          width: 1.5rem;
        }

        .last-star {
          top: 2rem;
          width: 2rem;
        }

        .bottom-star {
          top: 31rem;
          width: 2.5rem;
          right: 72%;
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

    .base-star {
        right: calc(-${sectionBorderOffset} - 2rem);
    }

    .mid-star {
      right: 45%;
      width: 2rem;
      top: 0.5rem;
    }

    .last-star {
      right: 105%;
      width: 3rem;
      top: 4rem;
    }

    .bottom-star {
      display: none;
    }

    @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
      .mid-star {
        top: -0.3rem;
        width: 1.5rem;
      }

      .base-star {
        top: 17rem;
        left: -1rem;
        width: 4rem;
      }

      .last-star {
        right: -3.5rem;
        width: 2rem;
        top: 1.2rem;
      }
    }
  `}
`;

export interface SectionArticleProps {
  title: string;
  center?: boolean;
  children: any;
}

const Star = styled.img.attrs({ src: STAR })`
  position: absolute;
  width: 3.5rem;
  top: 8.3rem;
`;

export const SectionArticle: FC<SectionArticleProps> = ({
  title,
  center,
  children,
  ...props
}) => {
  return (
    <StyledSectionArticle center={center} {...props}>
      <ArticleTitle gradient>
        <Star className="base-star" />
        <Star className="bottom-star" />
        <TextContainer>
          <Star className="mid-star" />
          <Star className="last-star" />
          {title}
        </TextContainer>
      </ArticleTitle>

      {children}
    </StyledSectionArticle>
  );
};
