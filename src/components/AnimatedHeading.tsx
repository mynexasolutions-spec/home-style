'use client';

import { Fragment, useEffect, useRef } from 'react';

type Props = {
  text: string;
  /** Extra words shown in the brand gold colour after `text` */
  accent?: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  /** Put the accent words on their own line */
  breakBeforeAccent?: boolean;
  /** Adds the gold lines either side of the heading (section headings) */
  decor?: boolean;
  /** ms between each word */
  stagger?: number;
  id?: string;
};

/**
 * Heading whose words slide up one after another when it scrolls into view.
 * Screen readers get the full sentence through aria-label.
 */
export default function AnimatedHeading({
  text,
  accent,
  as = 'h2',
  className = '',
  breakBeforeAccent = false,
  decor = false,
  stagger = 70,
  id,
}: Props) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = [
    ...text.split(' ').map((t) => ({ t, accent: false })),
    ...(accent ? accent.split(' ').map((t) => ({ t, accent: true })) : []),
  ];
  const firstAccent = words.findIndex((w) => w.accent);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      id={id}
      className={`split${decor ? ' split--decor' : ''} ${className}`.trim()}
      aria-label={[text, accent].filter(Boolean).join(' ')}
    >
      {decor && <i className="hl" aria-hidden="true" />}
      <span className="si" aria-hidden="true">
        {words.map((w, i) => (
          <Fragment key={i}>
            {breakBeforeAccent && i === firstAccent && <br />}
            <span className={`w${w.accent ? ' gold' : ''}`}>
              <span style={{ transitionDelay: `${i * stagger}ms` }}>{w.t}</span>
            </span>{' '}
          </Fragment>
        ))}
      </span>
      {decor && <i className="hl" aria-hidden="true" />}
    </Tag>
  );
}
