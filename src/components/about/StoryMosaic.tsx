import AnimatedHeading from '../AnimatedHeading';
import CountUp from '../CountUp';
import Img from '../Img';
import Reveal from '../Reveal';
import { IMG } from '@/data/images';

const tiles = [
  { cls: 'm1', id: IMG.kitchenIsland, alt: 'Finished kitchen with island and pendant lights', sizes: '(max-width: 900px) 55vw, 28vw' },
  { cls: 'm2', id: IMG.carpenter, alt: 'Carpenter at work on timber', sizes: '(max-width: 900px) 45vw, 24vw' },
  { cls: 'm3', id: IMG.plans, alt: 'Designer sketching plans', sizes: '(max-width: 900px) 30vw, 16vw' },
  { cls: 'm4', id: IMG.paintRoller, alt: 'Paint roller applying colour', sizes: '(max-width: 900px) 15vw, 8vw' },
  { cls: 'm5', id: IMG.bathroomTub, alt: 'Finished spa-style bathroom', sizes: '(max-width: 900px) 55vw, 28vw' },
];

export default function StoryMosaic() {
  return (
    <section className="section">
      <div className="container story">
        <div className="story-text">
          <Reveal as="span" className="eyebrow">
            Our Story
          </Reveal>
          <AnimatedHeading
            as="h2"
            className="about-h"
            text="From a Small Workshop to"
            accent="a Complete Home Team"
          />
          <Reveal as="p" className="txt" delay={150}>
            Home Style began with a simple frustration: renovating a home meant coordinating a carpenter, an
            electrician, a plumber, a painter and a tiler – each with their own schedule, their own price and
            nobody responsible for the whole picture.
          </Reveal>
          <Reveal as="p" className="txt" delay={250}>
            We built the company to fix that. Today our in-house crews handle everything from wiring and
            waterproofing to textures and the final coat of paint, so you talk to one team and get one clear
            plan, one timeline and one quote.
          </Reveal>

          <Reveal className="mini-stats" delay={350}>
            <div>
              <CountUp value={10} suffix="+" />
              <span>Years</span>
            </div>
            <div>
              <CountUp value={500} suffix="+" />
              <span>Projects</span>
            </div>
            <div>
              <CountUp value={100} suffix="+" />
              <span>Happy clients</span>
            </div>
            <div>
              <b>12</b>
              <span>Services</span>
            </div>
          </Reveal>
        </div>

        <div className="mosaic">
          {tiles.map((t, i) => (
            <Reveal key={t.cls} variant="zoom" delay={i * 110} className={`m ${t.cls}`}>
              <Img id={t.id} alt={t.alt} sizes={t.sizes} />
            </Reveal>
          ))}
          <div className="mosaic-badge">
            <b>Since</b>
            <span>2014</span>
          </div>
        </div>
      </div>
    </section>
  );
}
