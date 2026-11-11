import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import AnimatedHeading from './AnimatedHeading';
import Img from './Img';
import Parallax from './Parallax';
import Reveal from './Reveal';

type Props = {
  title: string;
  accent?: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  crumbs: { label: string; href?: string }[];
  /** `lg` = taller banner (used on service pages) */
  size?: 'md' | 'lg';
  /** Extra content under the subtitle, e.g. buttons */
  children?: ReactNode;
};

/** Banner shown at the top of every inner page. */
export default function PageHero({
  title,
  accent,
  subtitle,
  image,
  imageAlt,
  crumbs,
  size = 'md',
  children,
}: Props) {
  return (
    <section className={`page-hero${size === 'lg' ? ' page-hero--lg' : ''}`}>
      <Parallax speed={0.25}>
        <Img id={image} alt={imageAlt} sizes="100vw" priority />
      </Parallax>
      <div className="container">
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <FaChevronRight aria-hidden="true" />
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <AnimatedHeading as="h1" text={title} accent={accent} />
        {subtitle && (
          <Reveal as="p" className="ph-sub" delay={300}>
            {subtitle}
          </Reveal>
        )}
        {children && (
          <Reveal className="ph-actions" delay={450}>
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
