import Link from "next/link";
import styles from "./styles.module.css";

export const YellowButton = () => {
  return (
    <Link href={"#"} className={`${styles.heroButton} ${styles.yellowButton}`}>
      Learn More <span className={styles.arrow}>&#8594;</span>
    </Link>
  );
};


export const GreenButton = () => {
    return (
      <Link href={"#"} className={`${styles.heroButton} ${styles.greenButton}`}>
        Learn More <span className={styles.arrow}>&#8594;</span>
      </Link>
    );
  };

  

export const WhiteButton = () => {
    return (
      <Link href={"#"} className={`${styles.heroButton} ${styles.whiteButton}`}>
        Learn More <span className={styles.arrow}>&#8594;</span>
      </Link>
    );
  };
  
