import { Church } from '@/app/icons/church';
import styles from './styles.module.css';
import { Outreach } from '@/app/icons/outreach';
import { Schedule } from '@/app/icons/schedule';

export const LivingOurFaith = () => {
  const faithItems = [
    {
      id: 1,
      icon: <Church />,
      title: 'Worship Services',
      description: 'Experience spiritual growth and meaningful connection through heartfelt worship and fellowship.',
    },
    {
      id: 2,
      icon: <Outreach />,
      title: 'Community Outreach',
      description: 'Experience spiritual growth and meaningful connection through heartfelt worship and fellowship.',
    },
    {
      id: 3,
      icon: <Schedule />,
      title: 'Church Programs',
      description: 'Experience spiritual growth and meaningful connection through heartfelt worship and fellowship.',
    },
  ];

  return (
    <section className={styles.faithSection}>
      <div className={styles.header}>
        <p className={styles.subheading}>WHAT WE DO</p>
        <h1 className={styles.heading}>
          LIVING OUR <span className={styles.highlight}>FAITH TOGETHER</span>
        </h1>
      </div>
      <div className={styles.faithGrid}>
        {faithItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.iconContainer}>
              {/* <img src={item.icon} alt={item.title} className={styles.icon} /> */}
              {item.icon}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LivingOurFaith;