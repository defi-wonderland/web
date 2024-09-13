import styled from 'styled-components';
import { FONT_DISPLAY, MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '~/components';

interface Props {
  text: string; // use '\n' to break lines in a template literal
  sizes: titleSizes;
}

type remUnit = `${number}rem`;
type vwUnit = `${number}vw`;

type titleSizes = {
  lg: remUnit;
  md: remUnit;
  sm: remUnit;
  lgvw: vwUnit;
  mdvw: vwUnit;
  smvw?: vwUnit;
};

export const SquigglyTitle = ({ text, sizes }: Props) => {
  sizes.smvw ??= sizes.mdvw; // fallback to mdvw if smvw is not provided

  return (
    <StyledWrapper>
      <StyledTitle $sizes={sizes}>{text}</StyledTitle>

      <StyledSVG
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        viewBox='0 0 1920 1080'
        version='1.1'
        width='100%'
        height='100%'
      >
        <defs>
          {/* Squiggly filter desktop and tablet */}
          <filter
            id='squiggly-filter'
            x='0'
            y='0'
            width='140%'
            height='140%'
            filterUnits='objectBoundingBox'
            primitiveUnits='userSpaceOnUse'
            colorInterpolationFilters='linearRGB'
          >
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.02 0.0125'
              numOctaves='3'
              seed='2'
              stitchTiles='stitch'
              x='0%'
              y='0%'
              width='200%'
              height='100%'
              scale='1'
              result='turbulence'
            />
            <feDisplacementMap
              in='SourceGraphic'
              in2='turbulence'
              scale='5'
              xChannelSelector='R'
              yChannelSelector='B'
              x='0%'
              y='0%'
              width='100%'
              height='100%'
              result='displacementMap'
            >
              <animate attributeName='scale' values='5;15;5;' dur='2' repeatCount='indefinite' begin='0' />
            </feDisplacementMap>
          </filter>
          {/* Squiggly filter mobile */}
          <filter
            id='squiggly-filter-mobile'
            x='-20%'
            y='-20%'
            width='140%'
            height='140%'
            filterUnits='objectBoundingBox'
            primitiveUnits='userSpaceOnUse'
            colorInterpolationFilters='linearRGB'
          >
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.02 0.0125'
              numOctaves='3'
              seed='0'
              stitchTiles='stitch'
              x='0%'
              y='0%'
              width='200%'
              height='100%'
              scale='1'
              result='turbulence'
            />
            <feDisplacementMap
              in='SourceGraphic'
              in2='turbulence'
              scale='2'
              xChannelSelector='R'
              yChannelSelector='B'
              x='0%'
              y='0%'
              width='100%'
              height='100%'
              result='displacementMap'
            >
              <animate attributeName='scale' values='2;6;2;' dur='2' repeatCount='indefinite' begin='0' />
            </feDisplacementMap>
          </filter>
        </defs>
      </StyledSVG>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1<{ $sizes: titleSizes }>`
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  font-style: italic;
  line-height: 0.9;
  letter-spacing: 0.1rem;
  font-size: ${({ $sizes }) => `clamp(${$sizes.md}, ${$sizes.lgvw}, ${$sizes.lg})`};
  text-transform: uppercase;
  text-align: center;
  white-space: pre;
  z-index: 1;
  padding: 0 0.1em;

  filter: url('#squiggly-filter');

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    font-size: ${({ $sizes }) => `clamp(${$sizes.sm}, ${$sizes.mdvw}, ${$sizes.md})`};
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: ${({ $sizes }) => `clamp(${$sizes.sm}, ${$sizes.smvw}, ${$sizes.md})`};
    filter: url('#squiggly-filter-mobile');
    padding: 0;
  }
`;

const StyledSVG = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
`;
