import { useState, useEffect } from 'react';

import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '~/components/common';

export interface Dimension {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const mobileWidth = Number(MOBILE_MAX_WIDTH.slice(0, -2));
const tabletWidth = Number(TABLET_MAX_WIDTH.slice(0, -2));

function getWindowDimensions(): Dimension {
  const dimensions: Dimension = {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth <= mobileWidth,
    isTablet: window.innerWidth <= tabletWidth,
    isDesktop: window.innerWidth > tabletWidth,
  };
  return dimensions;
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  return windowDimensions;
};
