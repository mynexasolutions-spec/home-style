import { FaClock, FaHammer, FaHeart, FaScaleBalanced } from 'react-icons/fa6';
import Img from '../Img';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';
import { valueCards } from '@/data/team';

const icons = {
  craft: FaHammer,
  honesty: FaScaleBalanced,
  care: FaHeart,
  time: FaClock,
} as const;

export default function ValueCards() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHead
          title="What We"
          accent="Stand For"
          sub="Four principles that guide every site visit, quote and handover."
        />
        <div className="value-grid">
          {valueCards.map((v, i) => {
            const Icon = icons[v.icon];
            return (
              <Reveal key={v.title} className="fill" variant="zoom" delay={i * 120}>
                <article className="value">
                  <Img id={v.image} alt="" sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 25vw" />
                  <div className="value-in">
                    <span className="value-ic">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
