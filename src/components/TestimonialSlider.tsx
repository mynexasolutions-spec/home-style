'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa6';
import { testimonials } from '@/data/content';

export default function TestimonialSlider() {
  const track = useRef<HTMLDivElement | null>(null);

  const slide = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.t-card');
    const gap = 24;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir > 0 && atEnd) return el.scrollTo({ left: 0, behavior: 'smooth' });
    if (dir < 0 && el.scrollLeft <= 4) return el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + gap), behavior: 'smooth' });
  };

  return (
    <div className="t-wrap">
      <button className="t-btn t-prev" onClick={() => slide(-1)} aria-label="Previous testimonials">
        <FaChevronLeft aria-hidden="true" />
      </button>
      <div className="t-track" ref={track}>
        {testimonials.map((t) => (
          <article className="t-card" key={t.name}>
            <FaQuoteRight className="q" aria-hidden="true" />
            <div className="stars" role="img" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p>“{t.text}”</p>
            <div className="t-user">
              <Image src={t.avatar} alt={`Portrait of ${t.name}`} width={54} height={54} />
              <div>
                <b>{t.name}</b>
                <small>{t.place}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className="t-btn t-next" onClick={() => slide(1)} aria-label="Next testimonials">
        <FaChevronRight aria-hidden="true" />
      </button>
    </div>
  );
}
