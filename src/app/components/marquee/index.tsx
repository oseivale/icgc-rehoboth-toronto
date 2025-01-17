import styles from './styles.module.css';

const MarqueeBanner = () => {
    return (
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
          </div>
          <div className={styles.marqueeContent}>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
          </div>
          <div className={styles.marqueeContent}>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
            <span className={styles.text}>LOVE YOUR NEIGHBOUR AS YOURSELF</span>
            <span className={styles.icon}>✸</span>
          </div>
        </div>
      </div>
    );
  };
export default MarqueeBanner;