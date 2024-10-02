import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '~/components';

const mobileMaxWidth = Number(MOBILE_MAX_WIDTH.slice(0, -2));
const tabletMaxWidth = Number(TABLET_MAX_WIDTH.slice(0, -2));
const getWindowWidth = () => window.innerWidth;

export const isMobile = () => {
  if (typeof window === 'undefined') {
    console.error('isMobile() called when window is not defined');
    return false;
  }

  return getWindowWidth() <= mobileMaxWidth;
};

export const isTablet = () => {
  if (typeof window === 'undefined') {
    console.error('isTablet() called when window is not defined');
    return false;
  }

  const width = getWindowWidth();

  return width > mobileMaxWidth && width <= tabletMaxWidth;
};
