import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

interface AnimationProps {
  children: any;
}

export function AnimationIn({ children }: AnimationProps) {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} classNames='fade' timeout={500} unmountOnExit>
      <>{children}</>
    </CSSTransition>
  );
}
