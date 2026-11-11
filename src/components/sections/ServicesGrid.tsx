import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Img from '../Img';
import Reveal from '../Reveal';
import ServiceIcon from '../ServiceIcon';
import { services } from '@/data/services';

type Props = {
  /** Slug of a service to leave out (e.g. the page you are on) */
  exclude?: string;
  /** Show only this many – starting from the service after `exclude` */
  limit?: number;
};

export default function ServicesGrid({ exclude, limit }: Props) {
  let list = services.filter((s) => s.slug !== exclude);
  if (limit) {
    const start = Math.max(0, services.findIndex((s) => s.slug === exclude));
    // next services after the current one, wrapping round to the start
    list = [...services.slice(start + 1), ...services.slice(0, start)].filter((s) => s.slug !== exclude).slice(0, limit);
  }
  return (
    <div className="services-grid">
      {list.map((s, i) => (
        <Reveal key={s.slug} className="fill" delay={(i % 3) * 120}>
          <Link href={`/services/${s.slug}`} className="s-card">
            <div className="s-img">
              <Img
                id={s.image}
                alt={s.title}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
            <div className="s-body">
              <span className="s-badge">
                <ServiceIcon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="s-arrow">
                <FaArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
