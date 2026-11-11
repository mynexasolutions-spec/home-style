import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Img from '../Img';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';
import { IMG } from '@/data/images';

const spaces = [
  { title: 'Living Rooms', text: 'Panelling, lighting & feature walls', id: IMG.livingGreen, alt: 'Living room with a deep green feature wall' },
  { title: 'Kitchens', text: 'Modular cabinets & stone worktops', id: IMG.kitchenModular, alt: 'White modular kitchen with marble counter' },
  { title: 'Bedrooms', text: 'Wardrobes, beds & ceilings', id: IMG.bedroom, alt: 'Calm bedroom with bed bench and large window' },
  { title: 'Bathrooms', text: 'Tiles, fittings & plumbing', id: IMG.bathroomTub, alt: 'Spa-style bathroom with freestanding bathtub' },
];

export default function SpacesSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          title="Spaces We"
          accent="Transform"
          sub="Whichever room you have in mind, we bring the craftsmanship, finish and detail it deserves."
        />
        <div className="spaces-grid">
          {spaces.map((s, i) => (
            <Reveal key={s.title} className="fill" variant="zoom" delay={i * 120}>
              <Link href="/contact#quote" className="space">
                <Img id={s.id} alt={s.alt} sizes="(max-width: 640px) 50vw, (max-width: 1100px) 50vw, 25vw" />
                <div className="space-info">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="more">
                    Get a quote <FaArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
