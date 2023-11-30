import React from 'react';

interface Props {
  chromeSrc: string;
  safariSrc: string;
}

export const AnimatedTitle = ({ chromeSrc, safariSrc }: Props) => {
  return (
    <video autoPlay loop muted playsInline>
      <source src={chromeSrc} type='video/webm' />
      <source src={safariSrc} type='video/mp4; codecs="hvc1"' />
    </video>
  );
};
