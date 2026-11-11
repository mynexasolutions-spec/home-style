import {
  FaCheck,
  FaClipboardList,
  FaFileInvoice,
  FaPhone,
  FaScrewdriverWrench,
} from 'react-icons/fa6';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';
import { processSteps } from '@/data/content';

const icons = {
  phone: FaPhone,
  clipboard: FaClipboardList,
  invoice: FaFileInvoice,
  tools: FaScrewdriverWrench,
  check: FaCheck,
} as const;

export default function ProcessSection({ soft = true }: { soft?: boolean }) {
  return (
    <section className={`section${soft ? ' section--soft' : ''}`}>
      <div className="container">
        <SectionHead title="Our Work" accent="Process" sub="A simple and transparent process to bring your vision to life." />
        <div className="process-grid">
          {processSteps.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} className="fill" delay={i * 130}>
                <div className="p-step">
                  <span className="p-num">0{i + 1}</span>
                  <div className="p-ic">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
