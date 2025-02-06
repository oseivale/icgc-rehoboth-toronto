import styles from "./styles.module.css";

export const ChurchDepartmentsSection = () => {
  return (
    <section>
      <h1 className={styles.mainHeader}>Ministries</h1>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <h1>Prayer Team</h1>
        </div>
        <div className={styles.card}>
          <h1>Church Admin</h1>
        </div>
        <div className={styles.card}>
          <h1>Music Ministry</h1>
        </div>
        <div className={styles.card}>
          <h1>Media & Technical Team</h1>
        </div>
      </div>
    </section>
  );
};
