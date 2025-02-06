import styles from "./styles.module.css";

export const MinistriesSection = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.mainHeader}>Ministries <span className={styles.textColorOffset}>& Fellowship</span></h1>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.placeholder}></div>
          <p className={styles.cardText}>
            Join our online services for live streams of Sunday worship, virtual
            Bible studies, and interactive prayer meetings from anywhere.
          </p>
          <h1 className={styles.cardHeader}>Womens' Ministry</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.placeholder}></div>
          <p className={styles.cardText}>
            Join our online services for live streams of Sunday worship, virtual
            Bible studies, and interactive prayer meetings from anywhere.
          </p>
          <h1 className={styles.cardHeader}>Mens' Fellowship</h1>
        </div>

        <div className={styles.card}>
          <div className={styles.placeholder}></div>
          <p className={styles.cardText}>
            Join our online services for live streams of Sunday worship, virtual
            Bible studies, and interactive prayer meetings from anywhere.
          </p>
          <h1 className={styles.cardHeader}>Childrens' Ministry</h1>
        </div>
      </div>
    </section>
  );
};
