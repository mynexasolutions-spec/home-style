import Link from 'next/link';
import { FaArrowRight, FaRegCalendarCheck } from 'react-icons/fa6';
import AnimatedHeading from '../AnimatedHeading';
import Img from '../Img';
import Reveal from '../Reveal';
import ServiceIcon from '../ServiceIcon';
import type { Service } from '@/data/services';

/** Big photo composite on one side, intro copy + highlights on the other. */
export default function ServiceIntro({ service }: { service: Service }) {
  return (
    <section className="section">
      <div className="container svc-intro">
        <Reveal variant="left" className="svc-visual">
          <div className="v1">
            <Img
              id={service.gallery[1]}
              alt={`${service.title} by Home Style`}
              sizes="(max-width: 900px) 90vw, 45vw"
            />
          </div>
          <div className="v2">
            <Img id={service.gallery[2]} alt={`${service.title} detail`} sizes="(max-width: 900px) 45vw, 22vw" />
          </div>
          <div className="svc-badge">
            <FaRegCalendarCheck aria-hidden="true" />
            <div>
              <b>Free site visit</b>
              <span>No-obligation quote</span>
            </div>
          </div>
        </Reveal>

        <div className="svc-intro-text">
          <Reveal as="span" className="eyebrow">
            What we do
          </Reveal>
          <AnimatedHeading as="h2" className="about-h" text={service.title} accent="Done Right" />
          <Reveal as="p" className="txt" delay={150}>
            {service.intro}
          </Reveal>

          <div className="svc-points">
            {service.highlights.map((h, i) => (
              <Reveal key={h.title} variant="left" delay={200 + i * 120} className="svc-point">
                <span className="pillar-ic">
                  <ServiceIcon name={service.icon} />
                </span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={450}>
            <Link href="#quote" className="btn btn--gold">
              Get a Free Quote <FaArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
