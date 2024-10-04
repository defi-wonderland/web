import { useEffect, useState } from 'react';
import { useWindowSize } from '~/hooks/useWindowsSize';
import { BREAKPOINTS } from '~/components';

export const useBreakpoints = () => {
  const [breakpointStatus, setBreakpointStatus] = useState({
    isMobile: false,
    isTablet: false,
  });

  const { width } = useWindowSize();

  useEffect(() => {
    setBreakpointStatus({
      isMobile: width <= BREAKPOINTS.mobile,
      isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
    });
  }, [width]);

  return breakpointStatus;
};
