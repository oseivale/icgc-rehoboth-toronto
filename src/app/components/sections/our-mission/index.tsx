import Link from 'next/link';
import styles from './styles.module.css';
import { Flower } from '@/app/icons/flower';

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.subheading}><Flower />OUR MISSION</p>
          <h1 className={styles.heading}>
            OUR MISSION, <span className={styles.highlight}>TO SERVE, LOVE & GROW</span>
          </h1>
          <p className={styles.description}>
            {`Our mission is to share God's love, foster spiritual growth, and serve our community with compassion and purpose.`}
          </p>
          <blockquote className={styles.blockquote}>
            {`Our mission is to share God's love and grace by fostering spiritual growth, serving our community with compassion, and building meaningful relationships. We are dedicated to living out our faith through worship, outreach, and impactful service.`}
          </blockquote>
          <Link href={'#'} className={styles.button}>
            Contact Us <span className={styles.arrow}>&#8594;</span>
          </Link>
        </div>
        <div className={styles.imageContent}>
          <img
            src="https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Community gathering"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;