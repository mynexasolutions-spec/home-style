'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaExpand, FaLocationDot, FaXmark } from 'react-icons/fa6';
import Img from './Img';
import { categories, categoryLabel, type CategoryKey, type GalleryItem } from '@/data/projects';

type Props = {
  items: GalleryItem[];
  /**
   * grid    – uniform tiles (home page)
   * masonry – staggered heights (gallery page)
   * cards   – image + text card (projects page)
   */
  variant?: 'grid' | 'masonry' | 'cards';
  /**
   * Show only this many photos under "All", picked evenly across every
   * category so each service is represented (e.g. on the home page).
   * Selecting a tab still shows that category's photos.
   */
  allLimit?: number;
  /** Max photos shown once a category tab is selected (default: all). */
  tabLimit?: number;
  /** Under "All", interleave the categories instead of grouping them. */
  mixAll?: boolean;
};

/** Round-robin across categories so a short list still covers every service. */
function balanced(items: GalleryItem[]): GalleryItem[] {
  const groups = categories.map((c) => items.filter((i) => i.category === c.key)).filter((g) => g.length);
  const out: GalleryItem[] = [];
  for (let n = 0; out.length < items.length; n++) {
    for (const g of groups) if (g[n]) out.push(g[n]);
  }
  return out;
}

const masonryRatios = ['4 / 5', '1 / 1', '4 / 3', '3 / 4', '5 / 4', '4 / 5', '1 / 1', '3 / 4'];

export default function GalleryBrowser({ items, variant = 'grid', allLimit, tabLimit, mixAll }: Props) {
  const [filter, setFilter] = useState<'all' | CategoryKey>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(() => {
    if (filter === 'all') {
      if (allLimit) return balanced(items).slice(0, allLimit);
      return mixAll ? balanced(items) : items;
    }
    const inTab = items.filter((i) => i.category === filter);
    return tabLimit ? inTab.slice(0, tabLimit) : inTab;
  }, [items, filter, allLimit, tabLimit, mixAll]);
  const available = useMemo(
    () => categories.filter((c) => items.some((i) => i.category === c.key)),
    [items],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpenIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  // Keyboard controls + page scroll lock while the lightbox is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex !== null ? visible[openIndex] : null;

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by category">
        <button className={`filter${filter === 'all' ? ' active' : ''}`} onClick={() => setFilter('all')}>
          All Projects
        </button>
        {available.map((c) => (
          <button
            key={c.key}
            className={`filter${filter === c.key ? ' active' : ''}`}
            onClick={() => setFilter(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className={`gallery gallery--${variant}`}>
        {visible.map((item, i) => (
          <figure
            key={item.id}
            className="g-item"
            style={variant === 'masonry' ? { aspectRatio: masonryRatios[i % masonryRatios.length] } : undefined}
          >
            <button className="g-open" onClick={() => setOpenIndex(i)} aria-label={`View ${item.title}`}>
              <Img
                id={item.id}
                alt={item.title}
                sizes={
                  variant === 'cards'
                    ? '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw'
                    : '(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw'
                }
              />
              {variant !== 'cards' && (
                <span className="g-cap">
                  <span className="g-cat">{categoryLabel(item.category)}</span>
                  <b>{item.title}</b>
                  <i className="g-zoom">
                    <FaExpand aria-hidden="true" />
                  </i>
                </span>
              )}
            </button>
            {variant === 'cards' && (
              <figcaption className="g-card-body">
                <span className="g-cat">{categoryLabel(item.category)}</span>
                <h3>{item.title}</h3>
                {item.location && (
                  <p className="g-loc">
                    <FaLocationDot aria-hidden="true" />
                    {item.location}
                  </p>
                )}
                {item.description && <p>{item.description}</p>}
                {item.scope && (
                  <ul className="g-tags">
                    {item.scope.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
                <button className="g-more" onClick={() => setOpenIndex(i)}>
                  View photo <FaArrowRight aria-hidden="true" />
                </button>
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {current && (
        <div
          className="lb open"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button className="lb-x" onClick={close} aria-label="Close">
            <FaXmark aria-hidden="true" />
          </button>
          <button className="lb-p" onClick={() => step(-1)} aria-label="Previous image">
            <FaChevronLeft aria-hidden="true" />
          </button>
          <div className="lb-frame" onClick={(e) => e.target === e.currentTarget && close()}>
            <Img id={current.id} alt={current.title} sizes="100vw" className="contain" />
          </div>
          <button className="lb-n" onClick={() => step(1)} aria-label="Next image">
            <FaChevronRight aria-hidden="true" />
          </button>
          <p className="lb-cap">
            {current.title} – {categoryLabel(current.category)}
            <span>
              {(openIndex ?? 0) + 1} / {visible.length}
            </span>
          </p>
        </div>
      )}
    </>
  );
}
