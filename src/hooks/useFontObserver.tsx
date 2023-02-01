import { useEffect, useState } from "react";
import FontFaceObserver from "fontfaceobserver";

export function useFontObserver() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const font = new FontFaceObserver("SharpGrotesk-10");

  font.load().then(() => {
    setFontLoaded(true);
  });

  useEffect(() => {
    document.fonts.ready.then(() => {
      setReady(true);
    });
  }, [fontLoaded]);

  return { ready };
}
