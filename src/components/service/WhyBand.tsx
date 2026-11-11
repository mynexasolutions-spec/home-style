import Img from '../Img';
import Parallax from '../Parallax';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';
import type { Service } from '@/data/services';

const reasons = [
  { n: '01', title: 'One accountable team', text: 'Our own crews do the work – no passing you between subcontractors.' },
  { n: '02', title: 'Itemised, honest quotes', text: 'You see exactly what you are paying for before we start.' },
  { n: '03', title: 'Clean, on-time handover', text: 'A realistic schedule, a tidy site and a final walkthrough with you.' },
];

/** Full-width parallax photo with three glass cards on top. */
export default function WhyBand({ service }: { service: Service }) {
  return (
    <section className="why-band">
      <Parallax speed={0.18}>
        <Img id={service.gallery[3]} alt="" sizes="100vw" />
      </Parallax>
      <div className="container">
        <SectionHead
          light
          title="Why Choose Us for"
          accent={service.title}
          sub="The same standards on every job, big or small."
        />
        <div className="wb-cards">
          {reasons.map((r, i) => (
            <Reveal key={r.n} className="fill" delay={i * 130}>
              <div className="wb-card">
                <span className="wb-n">{r.n}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
