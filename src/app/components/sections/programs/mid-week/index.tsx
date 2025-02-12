
import styles from "./styles.module.css";

export const MidweekSection = () => {
  return (
    <section className={styles.section} id={'mid-week'}>
      <h1 className={styles.mainHeader}><span className={styles.textColorOffset}>What's up</span> during the week?</h1>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div>
            <h1 className={styles.cardHeader}>Mid-week Prayers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              purus ante. Praesent vitae mauris sem. Vestibulum euismod quam a
              pharetra hendrerit. Maecenas ornare, arcu eget ultrices sagittis,
              purus odio facilisis ante, vel rhoncus ante ipsum sit amet sem.
              Nam malesuada suscipit dui id varius. Vestibulum pellentesque
              lacinia luctus.
            </p>
          </div>
          <div className={styles.placeholder}></div>
        </div>
        <div className={styles.card}>
          <div>
            <h1 className={styles.cardHeader}>Bible Connect Class</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              purus ante. Praesent vitae mauris sem. Vestibulum euismod quam a
              pharetra hendrerit. Maecenas ornare, arcu eget ultrices sagittis,
              purus odio facilisis ante, vel rhoncus ante ipsum sit amet sem.
              Nam malesuada suscipit dui id varius. Vestibulum pellentesque
              lacinia luctus.
            </p>
            <div className={styles.placeholder}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
