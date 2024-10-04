import { useCallback, useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const getWindowSize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    getWindowSize();

    window.addEventListener('resize', getWindowSize);
    return () => window.removeEventListener('resize', getWindowSize);
  }, [getWindowSize]);

  return windowSize;
};
