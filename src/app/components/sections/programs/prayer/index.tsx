import { Clock } from "@/app/icons/clock";
import styles from "./styles.module.css";
import { Calendar } from "@/app/icons/calendar";
import { Location } from "@/app/icons/location";
import Link from "next/link";

export const PrayerSection = () => {
  return (
    <section className={styles.section} id={"mid-week"}>
      <h2 className={styles.cardSubheader}>Power in Prayer</h2>
      <h1 className={styles.mainHeader}>
        <span className={styles.textColorOffset}>A Community </span> 
          of Faith
      </h1>
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
            <p className={styles.eventInfo}>
              <Calendar color={"var(--rehoboth-dark-green)"} />
              Every Tuesday
            </p>
            <p className={styles.eventInfo}>
              <Clock color={"var(--rehoboth-dark-green)"} />
              7pm EST
            </p>
            <Link href={"#"} className={styles.eventInfo}>
              <Location color={"var(--rehoboth-dark-green)"} />
              Our Church Zoom Link
              <strong>Passcode:</strong>
            </Link>
          </div>
          {/* <div className={styles.placeholder}></div> */}
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.placeholder}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
