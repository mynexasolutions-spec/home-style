import { FaHeadset, FaPeopleGroup, FaRegBuilding, FaRegFaceSmile } from 'react-icons/fa6';
import CountUp from '../CountUp';
import Reveal from '../Reveal';

export default function StatsBar() {
  return (
    <section className="stats">
      <div className="container">
        <Reveal className="stats-bar" variant="zoom">
          <div className="stat">
            <FaPeopleGroup aria-hidden="true" />
            <div>
              <CountUp value={500} suffix="+" />
              <span>Projects Completed</span>
            </div>
          </div>
          <div className="stat">
            <FaRegFaceSmile aria-hidden="true" />
            <div>
              <CountUp value={10} suffix="+" />
              <span>Years of Experience</span>
            </div>
          </div>
          <div className="stat">
            <FaRegBuilding aria-hidden="true" />
            <div>
              <CountUp value={100} suffix="+" />
              <span>Happy Clients</span>
            </div>
          </div>
          <div className="stat">
            <FaHeadset aria-hidden="true" />
            <div>
              <b>24/7</b>
              <span>Customer Support</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
