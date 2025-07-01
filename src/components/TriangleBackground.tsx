import styled from 'styled-components';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from './Variables';

const TriangleBackground = () => {
  return (
    <TriangleBackgroundContainer>
      <TriangleClipper>
        <TriangleBackgroundSvg
          width='317'
          height='829'
          viewBox='0 0 343 897'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path opacity='0.5' d='M171.5 0L0 897H343L171.5 0Z' fill='url(#paint0_linear_228_18031)' />
          <defs>
            <linearGradient
              id='paint0_linear_228_18031'
              x1='154.842'
              y1='2.029e-06'
              x2='155.418'
              y2='897.024'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.09819' stopColor='#1C1A27' />
              <stop offset='0.301424' stopColor='#3C2986' />
              <stop offset='0.501195' stopColor='#1F55D5' />
              <stop offset='0.702149' stopColor='#E95B9B' />
              <stop offset='0.904241' stopColor='#FECC40' />
            </linearGradient>
          </defs>
        </TriangleBackgroundSvg>
      </TriangleClipper>
    </TriangleBackgroundContainer>
  );
};

export default TriangleBackground;

const TriangleBackgroundContainer = styled.div`
  position: absolute;
  top: -10rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1000;
  filter: blur(100px);

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    top: 4rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: -8rem;
  }
`;

const TriangleClipper = styled.div`
  border-radius: 0 0 100% 100%;
  overflow: hidden;
`;

const TriangleBackgroundSvg = styled.svg`
  display: block;
`;
