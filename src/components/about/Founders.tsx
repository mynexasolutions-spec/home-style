import { FaQuoteLeft } from 'react-icons/fa6';
import AnimatedHeading from '../AnimatedHeading';
import Img from '../Img';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';
import { founders } from '@/data/team';

export default function Founders() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHead
          title="Meet the"
          accent="Founder"
          sub="The person who started Home Style and stays involved in every project."
        />

        <div className="founders">
          {founders.map((f, i) => (
            <div className={`founder${i % 2 ? ' founder--rev' : ''}`} key={f.name}>
              <Reveal variant={i % 2 ? 'right' : 'left'} className="f-photo-wrap">
                <div className="f-photo">
                  <Img
                    id={f.photo}
                    alt={`Portrait of ${f.name}`}
                    sizes="(max-width: 900px) 90vw, 40vw"
                    className="face"
                  />
                </div>
                <div className="f-tag">
                  <b>{f.name}</b>
                  <span>{f.role}</span>
                </div>
              </Reveal>

              <div className="f-body">
                <Reveal as="span" className="eyebrow">
                  {f.role}
                </Reveal>
                <AnimatedHeading as="h3" className="f-name" text={f.name.split(' ')[0]} accent={f.name.split(' ').slice(1).join(' ')} />
                {f.quote && (
                  <Reveal as="p" className="f-quote" delay={150}>
                    <FaQuoteLeft aria-hidden="true" />
                    {f.quote}
                  </Reveal>
                )}
                <Reveal as="p" className="txt" delay={250}>
                  {f.bio}
                </Reveal>
                {f.facts && f.facts.length > 0 && (
                  <Reveal className="f-facts" delay={350}>
                    {f.facts.map((fact) => (
                      <div key={fact.label}>
                        <b>{fact.value}</b>
                        <span>{fact.label}</span>
                      </div>
                    ))}
                  </Reveal>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
