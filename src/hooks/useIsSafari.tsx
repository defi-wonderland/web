import { useEffect, useState } from 'react';

// Check if the browser is Safari, includes iOS Safari browser wrappers
const checkIsSafariBrowser = () => {
  const ua = navigator.userAgent.toLowerCase();

  // Chrome also includes 'Safari' in the userAgent in some apple devices
  return ua.includes('safari') && !ua.includes('chrome');
};

export const useIsSafari = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(checkIsSafariBrowser());
  }, []);

  return isSafari;
};
