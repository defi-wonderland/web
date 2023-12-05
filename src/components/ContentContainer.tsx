import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
export const ContentContainer = ({ children }: Props) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return <>{showContent && children}</>;
};
