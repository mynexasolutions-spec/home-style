import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Img from '../Img';
import Reveal from '../Reveal';
import { IMG } from '@/data/images';

export default function BannerSection() {
  return (
    <section className="banner">
      <div className="container">
        <Reveal className="banner-card" variant="zoom">
          <div className="banner-text">
            <h2>Complete Home Solutions for Every Space</h2>
            <p>
              From modern kitchens and elegant wardrobes to stunning floors, walls and ceilings – we handle it all.
            </p>
            <Link href="/projects" className="btn btn--gold">
              Explore Projects <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="banner-imgs">
            <div>
              <Img id={IMG.kitchenWhite} alt="Contemporary kitchen with white cabinets" sizes="(max-width: 900px) 33vw, 25vw" />
            </div>
            <div>
              <Img id={IMG.bathroomTub} alt="Bathroom with freestanding tub" sizes="(max-width: 900px) 33vw, 25vw" />
            </div>
            <div>
              <Img id={IMG.sofa} alt="Cosy living room with tufted sofa" sizes="(max-width: 900px) 33vw, 25vw" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
