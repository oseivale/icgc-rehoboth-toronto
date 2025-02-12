import { Calendar } from "@/app/icons/calendar";
import Accordion from "../bible-resources";
import SermonsSection from "../latest-sermons";
import Sidebar from "../sidebar";
import styles from "./styles.module.css";
import { Clock } from "@/app/icons/clock";
import { Location } from "@/app/icons/location";
import Link from "next/link";
import { Arrow } from "@/app/icons/arrow";

export const BibleStudySection = () => {
  return (
    <section className={styles.section} id={"mid-week"}>
      <div>
        <SermonsSection />
      </div>
      <div className={styles.bibleStudySection}>
        <div className="pageContainer">
        <h2 className={styles.cardSubheader}>Bible Connect Class</h2>
          <h1 className={styles.mainHeader}>
            <span className={styles.textColorOffset}>Journey Through </span>
            {/* <br></br> */}
            the Word
          </h1>
          <div className={styles.contentWrapper}>
            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div>
              
                  <h1 className={styles.cardHeader}>Bible Connect Class</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis in purus ante. Praesent vitae mauris sem. Vestibulum
                    euismod quam a pharetra hendrerit. Maecenas ornare, arcu
                    eget ultrices sagittis, purus odio facilisis ante, vel
                    rhoncus ante ipsum sit amet sem. Nam malesuada suscipit dui
                    id varius. Vestibulum pellentesque lacinia luctus.
                  </p>
                  <p className={styles.eventInfo}>
                    <Calendar color={"var(--rehoboth-white)"} />
                    Every Wednesday
                  </p>
                  <p className={styles.eventInfo}>
                    <Clock color={"var(--rehoboth-white)"} />
                    7pm EST
                  </p>
                  <Link href={"#"} className={styles.eventInfo}>
                    <Location color={"var(--rehoboth-white)"} />
                    Our Church Zoom Link
                    <span>
                      <strong>Passcode:</strong>
                    </span>
                  </Link>
                </div>
                <div className={styles.placeholder}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pageContainer">
        <div className={styles.infoWrapper}>
          <div>
            <h1>Helpful Resources & Notes</h1>
            <Accordion />
          </div>
          <div className={styles.sidebarWrapper}>
            <Sidebar />
            <Link className={styles.viewAll} href={"#"}>
              View all
              <span className={styles.arrow}>
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
