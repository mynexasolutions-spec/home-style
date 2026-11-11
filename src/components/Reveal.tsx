'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Variant = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade' | 'wipe';

type Props = {
  children: ReactNode;
  variant?: Variant;
  /** Delay in ms – use it to stagger siblings */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'p' | 'aside' | 'figure';
  threshold?: number;
};

/**
 * Fades / slides its children in when they scroll into view.
 * Once the animation is done the animation classes are removed again, so they
 * never interfere with the element's own hover transitions.
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  style,
  as = 'div',
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cleanup: ReturnType<typeof setTimeout> | undefined;
    const reveal = () => {
      el.classList.add('in');
      cleanup = setTimeout(() => {
        el.classList.remove('reveal', `rv-${variant}`, 'in');
        el.style.transitionDelay = '';
      }, delay + 1200);
    };

    if (!('IntersectionObserver' in window)) {
      reveal();
      return () => clearTimeout(cleanup);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(cleanup);
    };
  }, [variant, delay, threshold]);

  const Tag = as as 'div';
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal rv-${variant} ${className}`.trim()}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
