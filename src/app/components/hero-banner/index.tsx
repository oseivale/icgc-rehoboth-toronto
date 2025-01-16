// import MarqueeBanner from '../marquee';
// import styles from './styles.module.css';

// export const HeroBanner = () => {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.heroOverlay}></div>
//       <div className={styles.heroContent}>
//         <h2 className={styles.subtitle}>MAKE A DIFFERENCE TODAY</h2>
//         <h1 className={styles.title}>
//           LOVING GOD, LOVING EACH OTHER & SERVING OUR COMMUNITY
//         </h1>
//         <p className={styles.description}>
//           Experience God's love and grace in a welcoming community where faith grows, hope thrives, and everyone is cherished.
//         </p>
//         <div className={styles.heroButtons}>
//           <button className={`${styles.heroButton} ${styles.liveButton}`}>
//             Join Live <span className={styles.arrow}>&#8594;</span>
//           </button>
//           <button className={`${styles.heroButton} ${styles.learnButton}`}>
//             Learn More <span className={styles.arrow}>&#8594;</span>
//           </button>
//         </div>
//       </div>
    
//     </section>
//   );
// };

// export default HeroBanner;

import Link from 'next/link';
import styles from './styles.module.css';

const HeroBanner = () => {

  const header = 'MAKE A DIFFERENCE TODAY'

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        {/* <h2 className={styles.subtitle}>MAKE A DIFFERENCE TODAY</h2> */}
        {header.split('').map((char, index) => (
            <span key={index} className={styles.subtitle} style={{ animationDelay: `${index * 0.05}s` }}>
              {char === ' ' ? '\u00A0' : char} {/* Add non-breaking space for spaces */}
            </span>
          ))}
        <h1 className={styles.title}>
          LOVING GOD, LOVING EACH OTHER & SERVING OUR COMMUNITY
        </h1>
        <p className={styles.description}>
          {`Experience God's love and grace in a welcoming community where faith grows, hope thrives, and everyone is cherished.`}
        </p>
        <div className={styles.heroButtons}>
          <button className={`${styles.heroButton} ${styles.liveButton}`}>
            Join Live <span className={styles.arrow}>&#8594;</span>
          </button>
          <Link href={"#"} className={`${styles.heroButton} ${styles.learnButton}`}>
            Learn More <span className={styles.arrow}>&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;