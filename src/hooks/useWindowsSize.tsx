import { useEffect, useMemo, useState } from 'react';
import { BREAKPOINTS } from '~/components';

type State = {
  windowSize: {
    width: number;
    height: number;
  };
  isMobile: boolean;
  isTablet: boolean;
};

interface Props {
  onResize?: (state: State) => void;
}

export const useWindowSize = ({ onResize }: Props) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const isMobile = windowSize.width <= BREAKPOINTS.mobile;
  const isTablet = windowSize.width > BREAKPOINTS.mobile && windowSize.width <= BREAKPOINTS.tablet;

  const state = useMemo(() => ({ windowSize, isMobile, isTablet }), [windowSize, isMobile, isTablet]);

  const getWindowSize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    getWindowSize();

    window.addEventListener('resize', getWindowSize);
    return () => window.removeEventListener('resize', getWindowSize);
  }, []);

  useEffect(() => {
    if (onResize) {
      onResize(state);
    }
  }, [state, onResize]);

  return state;
};
