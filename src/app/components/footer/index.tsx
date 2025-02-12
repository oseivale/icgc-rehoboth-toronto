import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import { Instagram } from "@/app/icons/instagram";
import { Youtube } from "@/app/icons/youtube";
import { Facebook } from "@/app/icons/facebook";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <div className={styles.logoSection}>
          {/* <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className={styles.footerLogo}
          /> */}

           {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
            //   className={styles.logoImg}
              alt={"#"}
              height={1000}
              width={1000}
              src={"/images/icgc logo-1 (1).png"}
              className={styles.footerLogo}
            />{" "}
          </Link>
        </div>
          <p>
            {`Lorem Ipsum is simply dummy text of printing and typesetting
            industry. Lorem Ipsum has been the industry's.`}
          </p>
          <div className={styles.socialIcons}>
            <Link href="#">
              
              <Instagram />
            </Link>
            <Link href="#">
              <Youtube />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <ul className={styles.linkList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/our-church">Our Church</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/events">Upcoming Events</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Programs</h3>
        <ul className={styles.linkList}>
          <li>
            <Link href="/programs/bible-study">Bible Study</Link>
          </li>
          <li>
            <Link href="/programs/prayer">Prayer Meetings</Link>
          </li>
          <li>
            <Link href="/programs/covenant-families">Covenant Families</Link>
          </li>
          <li>
            <Link href="/get-involved">Get Involved</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Contact</h3>
        <p>
          <strong>Phone:</strong> (+0) 789 345 012
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <Link className={styles.email} href="mailto:mail@mail.com">mail@mail.com</Link>
        </p>
        <p>
          <strong>Address:</strong> 837 Wilson Ave., Toronto, ON
        </p>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>
        © {new Date().getFullYear()} ICGC Toronto - Rehoboth Temple. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
