import { FaCheck, FaPhoneVolume } from 'react-icons/fa6';
import Img from '../Img';
import QuoteForm from '../QuoteForm';
import Reveal from '../Reveal';
import type { Service } from '@/data/services';
import { site } from '@/data/site';

const perks = ['Free site visit', 'Itemised, no-obligation quote', 'Skilled, verified team'];

/** Photo panel with a promise on the left, the quote form on the right. */
export default function QuoteSplit({ service }: { service: Service }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="quote-split" variant="zoom">
          <div className="qs-photo">
            <Img id={service.gallery[4]} alt="" sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="qs-photo-in">
              <span className="eyebrow eyebrow--light">Let&apos;s talk</span>
              <h2>
                Planning {service.title.toLowerCase()}? <span className="gold">Get a free quote.</span>
              </h2>
              <ul>
                {perks.map((p) => (
                  <li key={p}>
                    <FaCheck aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={site.phoneHref} className="qs-call">
                <span className="ic">
                  <FaPhoneVolume aria-hidden="true" />
                </span>
                <span>
                  <small>Prefer to talk? Call us</small>
                  <strong>{site.phone}</strong>
                </span>
              </a>
            </div>
          </div>
          <div className="qs-form">
            <QuoteForm
              id="quote"
              title="Request a Quote"
              subtitle={`Tell us about your ${service.title.toLowerCase()} project.`}
              defaultService={service.title}
              variant="plain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
