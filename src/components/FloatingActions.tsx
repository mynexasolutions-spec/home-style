'use client';

import { useEffect, useState } from 'react';
import { FaChevronUp, FaWhatsapp } from 'react-icons/fa6';
import { site } from '@/data/site';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href={site.whatsappQuote}
        className="float-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
      <button
        className={`to-top${showTop ? ' show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <FaChevronUp aria-hidden="true" />
      </button>
    </>
  );
}
