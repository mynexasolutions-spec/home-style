import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Img from '../Img';
import Parallax from '../Parallax';
import Reveal from '../Reveal';
import { IMG } from '@/data/images';

/** Full-width parallax photo with a single big promise. */
export default function StatementBand() {
  return (
    <section className="statement">
      <Parallax speed={0.2}>
        <Img id={IMG.heroLiving} alt="" sizes="100vw" />
      </Parallax>
      <div className="container">
        <Reveal as="span" className="eyebrow eyebrow--light">
          Our Promise
        </Reveal>
        <Reveal as="p" className="statement-text" delay={150}>
          “One team. One plan. One quote. And a home you are proud to live in.”
        </Reveal>
        <Reveal delay={300}>
          <Link href="/projects" className="btn btn--gold">
            See Our Work <FaArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
