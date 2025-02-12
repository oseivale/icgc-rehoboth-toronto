import styles from "./styles.module.css";

export const CovenantFamiliesSection = () => {
  return (
    <section className={styles.section} id={'covenant-families'}>
      <h1 className={styles.mainHeader}>
        Church<span className={styles.textColorOffset}> Covenant Families</span>{" "}
      </h1>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.placeholder}></div>
          <div className={styles.contenWrapper}>
            <h1 className={styles.cardHeader}>Don Mills</h1>
            <p className={styles.cardText}>
              Join our online services for live streams of Sunday worship,
              virtual Bible studies, and interactive prayer meetings from
              anywhere.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.contenWrapper}>
            <h1 className={styles.cardHeader}>Brampton</h1>
            <p className={styles.cardText}>
              Join our online services for live streams of Sunday worship,
              virtual Bible studies, and interactive prayer meetings from
              anywhere.
            </p>
          </div>
          <div className={styles.placeholder}></div>
        </div>

        <div className={styles.card}>
          <div className={styles.placeholder}></div>
          <div className={styles.contenWrapper}>
            <h1 className={styles.cardHeader}>Downtown</h1>
            <p className={styles.cardText}>
              Join our online services for live streams of Sunday worship,
              virtual Bible studies, and interactive prayer meetings from
              anywhere.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.contenWrapper}>
            <h1 className={styles.cardHeader}>Durham</h1>
            <p className={styles.cardText}>
              Join our online services for live streams of Sunday worship,
              virtual Bible studies, and interactive prayer meetings from
              anywhere.
            </p>
          </div>
          <div className={styles.placeholder}></div>
        </div>
      </div>
    </section>
  );
};
