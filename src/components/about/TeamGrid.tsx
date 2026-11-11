import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import Img from '../Img';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';
import { team } from '@/data/team';

export default function TeamGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          title="Meet Our"
          accent="Team"
          sub="Skilled, verified professionals who take pride in their work."
        />
        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.name} className="fill" delay={(i % 4) * 110}>
              <article className="member">
                <div className="m-photo">
                  <Img
                    id={m.photo}
                    alt={`Portrait of ${m.name}`}
                    sizes="(max-width: 640px) 45vw, (max-width: 1100px) 30vw, 22vw"
                    className="face"
                  />
                  <div className="m-social">
                    <a href="#" aria-label={`${m.name} on LinkedIn`}>
                      <FaLinkedinIn aria-hidden="true" />
                    </a>
                    <a href="#" aria-label={`${m.name} on Instagram`}>
                      <FaInstagram aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="m-body">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
