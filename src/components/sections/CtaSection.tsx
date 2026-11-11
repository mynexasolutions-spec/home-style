import Link from 'next/link';
import { FaArrowRight, FaPhone } from 'react-icons/fa6';
import AnimatedHeading from '../AnimatedHeading';
import Img from '../Img';
import Parallax from '../Parallax';
import Reveal from '../Reveal';
import { IMG } from '@/data/images';
import { site } from '@/data/site';

type Props = {
  title?: string;
  accent?: string;
  text?: string;
};

export default function CtaSection({
  title = "Let's Build Your",
  accent = 'Dream Space Together!',
  text = 'Share your requirements and get a free, no-obligation quote from our team.',
}: Props) {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta-card" variant="zoom">
          <Parallax speed={0.15}>
            <Img id={IMG.ctaLiving} alt="" sizes="(max-width: 1240px) 100vw, 1240px" />
          </Parallax>
          <div className="inner">
            <div>
              <AnimatedHeading as="h2" text={title} accent={accent} breakBeforeAccent />
              <p>{text}</p>
            </div>
            <div className="cta-actions">
              <Link href="/contact#quote" className="btn btn--gold">
                Get a Free Quote <FaArrowRight aria-hidden="true" />
              </Link>
              <a href={site.phoneHref} className="btn btn--light">
                <FaPhone aria-hidden="true" /> {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
