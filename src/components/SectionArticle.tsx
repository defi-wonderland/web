import styled from 'styled-components';
import Image from 'next/image';

import { CONTENT_INDEX, FONT_MEDIUM_L, FONT_SIZE_18, MOBILE_MAX_WIDTH, SPACING_530 } from './Variables';
import { DisplayText } from './DisplayText';

import STAR from '~/assets/ethos-stars.svg';

export interface SectionArticleProps {
  title: string;
  center?: boolean;
  children: any;
}

const Star = styled(Image)`
  position: absolute;
  width: 3.5rem;
  top: 8.3rem;
  pointer-events: none;
`;

export const SectionArticle = ({ title, center, children, ...props }: SectionArticleProps) => {
  return (
    <StyledSectionArticle center={center} {...props}>
      <ArticleTitle gradient>
        <Star className='base-star' width={35} height={35} alt='' src={STAR.src} />
        <Star className='bottom-star' width={35} height={35} alt='' src={STAR.src} />
        <TextContainer>
          <Star className='mid-star' width={35} height={35} alt='' src={STAR.src} />
          <Star className='last-star' width={35} height={35} alt='' src={STAR.src} />
          {title}
        </TextContainer>
      </ArticleTitle>

      {children}
    </StyledSectionArticle>
  );
};

export const TextContainer = styled.p`
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  display: inline;
  position: relative;
  text-transform: uppercase;
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
      content: '';
      height: 1px;
      width: calc(100% + 4.5rem);
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
      content: '';
      height: calc(100% + 3rem);
      width: 1px;
      position: absolute;
      background: white;
      top: -4.5rem;
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
      top: -3rem;
    }

    .bottom-star {
      display: none;
    }
  }

  ${({ center }) =>
    !center &&
    `
    &:first-child {
      padding-left: 3rem;

      ${ArticleTitle}:after {
        left: -4.5rem;
      }

      div:after {
        left: 0;
      }

      .base-star {
        left: -4.5rem;
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
          width: calc(100% + 3rem);
          left: -3rem; 
        }

        .base-star {
          width: 2.5rem;
          left: -3rem;
          top: 3.5rem;
        }

        .mid-star {
          top: -1.5rem;
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
      padding-right: 3rem;

      ${ArticleTitle} {
        align-self: flex-end;

        &:after {
          right: -3rem;
        }
      }

      div {
        align-items: flex-end;

        &:after {
          right: 0;
        }
      }

      .base-star {
        right: -4.5rem;
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
          width: calc(100% + 3rem);
        }

        .base-star {
          width: 2.5rem;
          right: -3rem;
          top: 3.5rem;
        }
        
        .mid-star {
          top: -1.5rem;
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
        right: -5rem;
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
        top: -1.5rem;
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
