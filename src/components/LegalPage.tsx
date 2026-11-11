import PageHero from './PageHero';
import Reveal from './Reveal';
import { IMG } from '@/data/images';

type Props = {
  title: string;
  subtitle: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

export default function LegalPage({ title, subtitle, updated, sections }: Props) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        image={IMG.plans}
        imageAlt=""
        crumbs={[{ label: title }]}
      />
      <section className="section">
        <div className="container legal">
          <p className="legal-updated">Last updated: {updated}</p>
          {sections.map((s) => (
            <Reveal key={s.heading} as="article">
              <h2>{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
