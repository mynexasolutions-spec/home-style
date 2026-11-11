'use client';

import { useEffect, useState } from 'react';

/** Types and deletes a rotating list of words. Shows the first word without JS. */
export default function Typewriter({ words, className = '' }: { words: string[]; className?: string }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        if (charIndex < word.length) {
          charIndex++;
          setText(word.slice(0, charIndex));
          timer = setTimeout(tick, 90);
        } else {
          deleting = true;
          timer = setTimeout(tick, 1700);
        }
      } else if (charIndex > 0) {
        charIndex--;
        setText(word.slice(0, charIndex));
        timer = setTimeout(tick, 45);
      } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timer = setTimeout(tick, 250);
      }
    };

    timer = setTimeout(tick, 2000);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className={`tw ${className}`.trim()}>
      <span>{text}</span>
      <i className="caret" aria-hidden="true" />
    </span>
  );
}
