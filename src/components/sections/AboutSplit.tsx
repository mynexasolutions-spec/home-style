import Link from 'next/link';
import { FaArrowRight, FaCheck, FaPhoneVolume } from 'react-icons/fa6';
import AnimatedHeading from '../AnimatedHeading';
import Img from '../Img';
import Reveal from '../Reveal';
import { IMG } from '@/data/images';
import { site } from '@/data/site';

const checks = [
  'Single point of contact',
  'Detailed, itemised quotes',
  'Clean, tidy job sites',
  'Branded & tested materials',
  'Home & commercial spaces',
  'Post-work support',
];

/** Photo collage + intro copy. Used on the home and about pages. */
export default function AboutSplit({ showCta = true }: { showCta?: boolean }) {
  return (
    <div className="container about-grid">
      <Reveal variant="left" className="collage">
        <div className="c1">
          <Img id={IMG.kitchenIsland} alt="Finished modern kitchen with island and pendant lights" sizes="(max-width: 900px) 80vw, 40vw" />
        </div>
        <div className="c3">
          <Img id={IMG.drill} alt="Power drill resting on a wooden surface" sizes="160px" />
        </div>
        <div className="c2">
          <Img id={IMG.plans} alt="Designer sketching a plan on paper" sizes="(max-width: 900px) 40vw, 20vw" />
        </div>
        <div className="exp-badge">
          <b>10+</b>
          <span>
            YEARS OF
            <br />
            EXPERIENCE
          </span>
        </div>
      </Reveal>

      <div>
        <Reveal as="span" className="eyebrow">
          About Home Style
        </Reveal>
        <AnimatedHeading
          as="h2"
          className="about-h"
          text="One Team. One Roof."
          accent="Every Home Improvement Need."
          breakBeforeAccent
        />
        <Reveal as="p" className="txt" delay={200}>
          From the first measurement to the final polish, Home Style brings carpenters, electricians, tilers,
          plumbers, painters and finishing specialists together so you deal with one trusted team, not five contractors.
          We plan carefully, use quality materials and keep you informed at every step.
        </Reveal>
        <ul className="checks">
          {checks.map((c, i) => (
            <Reveal as="li" key={c} delay={250 + i * 70} variant="left">
              <FaCheck aria-hidden="true" />
              {c}
            </Reveal>
          ))}
        </ul>
        {showCta && (
          <Reveal className="about-actions" delay={300}>
            <Link href="/contact#quote" className="btn btn--gold">
              Get Free Estimate <FaArrowRight aria-hidden="true" />
            </Link>
            <div className="call-box">
              <span className="ic">
                <FaPhoneVolume aria-hidden="true" />
              </span>
              <div>
                <small>Call us anytime</small>
                <strong>
                  <a href={site.phoneHref}>{site.phone}</a>
                </strong>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
