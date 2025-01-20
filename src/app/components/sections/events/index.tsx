import { Calendar } from "@/app/icons/calendar";
import styles from "./styles.module.css";
import { Location } from "@/app/icons/location";
import { Clock } from "@/app/icons/clock";

export const EventSection = () => {
  return (
    <section className={styles.eventSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Faith and Fellowship Festival"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <p className={styles.subheading}>UPCOMING EVENT</p>
          <h1 className={styles.heading}>
            FAITH & FELLOWSHIP{" "}
            <span className={styles.highlight}>FESTIVAL</span>
          </h1>
          <ul className={styles.detailsList}>
            <li className={styles.detailItem}>
              <span className={styles.icon}><Calendar /></span>
              Aug 03, 2024
            </li>
            <li className={styles.detailItem}>
              <span className={styles.icon}><Clock /></span>
              8:00 am - 5:00 pm
            </li>
            <li className={styles.detailItem}>
              <span className={styles.icon}><Location /></span>
              837 Wilson Ave, Toronto, ON
            </li>
          </ul>
          <p className={styles.description}>
            The Faith and Fellowship Festival is a vibrant celebration featuring
            worship, community activities, and fellowship. Enjoy inspiring
            sermons, engaging workshops, and fun for all ages, fostering
            spiritual growth and connection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
