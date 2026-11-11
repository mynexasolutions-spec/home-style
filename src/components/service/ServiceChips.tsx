'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import ServiceIcon from '../ServiceIcon';
import { services } from '@/data/services';

/**
 * Sticky row of every service – quick switching between service pages.
 * Scrolls by touch-swipe, mouse-drag, mouse-wheel or the arrow buttons.
 */
export default function ServiceChips({ current }: { current: string }) {
  const track = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [dragging, setDragging] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  // Centre the active chip (without scrolling the page itself) and track edges
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const active = el.querySelector<HTMLElement>('a.active');
    if (active) {
      el.scrollLeft = active.offsetLeft - el.clientWidth / 2 + active.clientWidth / 2;
    }
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [current, update]);

  const scrollByPage = (dir: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
  };

  // Mouse drag (touch already scrolls natively)
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !track.current) return;
    drag.current = { active: true, startX: e.clientX, startScroll: track.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active || !track.current) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5 && !d.moved) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) track.current.scrollLeft = d.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.active = false;
    setDragging(false);
  };
  // A drag must not count as a click on a chip
  const onClickCapture = (e: MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <nav className="svc-chips" aria-label="All services">
      <div className="container svc-chips-in">
        <button
          type="button"
          className={`chip-arrow chip-arrow--l${canLeft ? ' show' : ''}`}
          onClick={() => scrollByPage(-1)}
          aria-label="Scroll services left"
          tabIndex={canLeft ? 0 : -1}
        >
          <FaChevronLeft aria-hidden="true" />
        </button>

        <div
          className={`svc-track${dragging ? ' dragging' : ''}`}
          ref={track}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={s.slug === current ? 'active' : undefined}
              draggable={false}
            >
              <ServiceIcon name={s.icon} />
              {s.title}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className={`chip-arrow chip-arrow--r${canRight ? ' show' : ''}`}
          onClick={() => scrollByPage(1)}
          aria-label="Scroll services right"
          tabIndex={canRight ? 0 : -1}
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
