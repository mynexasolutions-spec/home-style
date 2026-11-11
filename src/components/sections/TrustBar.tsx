import { FaAward, FaHelmetSafety, FaLayerGroup, FaRegClock } from 'react-icons/fa6';
import Reveal from '../Reveal';

const items = [
  { icon: FaAward, label: ['Quality', 'Workmanship'] },
  { icon: FaHelmetSafety, label: ['Skilled &', 'Verified Team'] },
  { icon: FaRegClock, label: ['On-Time', 'Completion'] },
  { icon: FaLayerGroup, label: ['Transparent', 'Pricing'] },
];

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Our promises">
      <div className="container">
        {items.map(({ icon: Icon, label }, i) => (
          <Reveal key={label[0]} className="trust-item" variant="up" delay={i * 100}>
            <Icon aria-hidden="true" />
            <strong>
              {label[0]}
              <br />
              {label[1]}
            </strong>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
