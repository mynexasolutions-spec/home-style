import { FaCheck } from 'react-icons/fa6';
import Img from '../Img';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';
import type { Service } from '@/data/services';

/** Every thing we offer as a photo card. */
export default function OfferCards({ service }: { service: Service }) {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHead
          title="What's"
          accent="Included"
          sub={`Everything we can do for you under ${service.title.toLowerCase()}.`}
        />
        <div className="offer-grid">
          {service.offerings.map((o, i) => (
            <Reveal key={o} className="fill" variant="zoom" delay={(i % 3) * 120}>
              <article className="offer">
                <Img
                  id={service.gallery[i % service.gallery.length]}
                  alt=""
                  sizes="(max-width: 640px) 90vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span className="offer-tick">
                  <FaCheck aria-hidden="true" />
                </span>
                <div className="offer-in">
                  <span className="offer-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{o}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
