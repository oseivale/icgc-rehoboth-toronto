import { Flower } from '@/app/icons/flower';
import styles from './styles.module.css';

const HomePageSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subheading}><Flower />WORSHIP WITH US</p>
        <h1 className={styles.heading}>
          JOIN US EVERY SUNDAY <span className={styles.highlight}>AT 10AM</span>
        </h1>
      </div>

      <div className={styles.contentGrid}>
        {/* Left Item */}
        <div className={styles.imageCard}>
          <img
            src="https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunday Service"
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>SUNDAY SERVICE</h3>
            <p className={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className={styles.button}>
              Learn More <span className={styles.arrow}>&#8594;</span>
            </button>
          </div>
        </div>

        {/* Right Items */}
        <div className={styles.infoCardsWrapper}>
        <div className={styles.infoCard}>
          <img
            src="https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Weekly Prayers"
            className={styles.infoCardImage}
          />
          <div>
            <h3 className={styles.cardTitle}>WEEKLY PRAYERS</h3>
            <p className={styles.cardText}>
              Lorem Ipsum is simply dummy text of printing and typesetting industry.
            </p>
            <button className={styles.button}>
              Learn More <span className={styles.arrow}>&#8594;</span>
            </button>
          </div>
        </div>

        <div className={styles.infoCard}>
          <img
            src="https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bible Connect Class"
            className={styles.infoCardImage}
          />
          <div>
            <h3 className={styles.cardTitle}>BIBLE CONNECT CLASS</h3>
            <p className={styles.cardText}>
              Lorem Ipsum is simply dummy text of printing and typesetting industry.
            </p>
            <button className={styles.button}>
              Learn More <span className={styles.arrow}>&#8594;</span>
            </button>
          </div>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default HomePageSection;