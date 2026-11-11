'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { value: number; suffix?: string; duration?: number };

/** Counts from 0 up to `value` the first time it scrolls into view. */
export default function CountUp({ value, suffix = '', duration = 1700 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  // Start at the real value so the page is correct without JavaScript.
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <b ref={ref}>
      {n}
      {suffix}
    </b>
  );
}
