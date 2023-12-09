import { useEffect, useState } from 'react';
import StyledPageView from './StyledPageView';

interface Props {
  children: React.ReactNode;
}
export const ContentContainer = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <StyledPageView className={isMounted ? 'content-visible fade-in' : 'content-hidden fade-in'}>
      {children}
    </StyledPageView>
  );
};
