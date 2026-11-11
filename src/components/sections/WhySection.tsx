import { FaCubes, FaPeopleGroup, FaRegCalendarCheck, FaRegHandshake, FaShieldHalved } from 'react-icons/fa6';
import AnimatedHeading from '../AnimatedHeading';
import Reveal from '../Reveal';

const items = [
  { icon: FaPeopleGroup, label: ['Experienced', 'Professionals'] },
  { icon: FaCubes, label: ['Quality', 'Materials'] },
  { icon: FaRegHandshake, label: ['Customer', 'Satisfaction'] },
  { icon: FaRegCalendarCheck, label: ['On-Time', 'Delivery'] },
  { icon: FaShieldHalved, label: ['Transparent', '& Fair Pricing'] },
];

export default function WhySection() {
  return (
    <section className="why" aria-labelledby="why-h">
      <div className="container">
        <div className="why-left">
          <AnimatedHeading as="h2" id="why-h" text="Why Choose" accent="Home Style?" breakBeforeAccent />
          <Reveal as="p" delay={250}>
            Reliable service, skilled professionals and long-lasting results for your home or office.
          </Reveal>
        </div>
        <div className="why-items">
          {items.map(({ icon: Icon, label }, i) => (
            <Reveal key={label[0]} className="why-item" delay={i * 100}>
              <Icon aria-hidden="true" />
              <h3>
                {label[0]}
                <br />
                {label[1]}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
