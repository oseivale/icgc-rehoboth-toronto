"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Hamburger } from "@/app/icons/hamburger";
import Image from "next/image";
import { Close } from "@/app/icons/close";
import { Home } from "@/app/icons/home";
import { Chevron } from "@/app/icons/chevron";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              className={styles.logoImg}
              alt={"#"}
              height={1000}
              width={1000}
              src={"/images/icgc logo-1 (1).png"}
            />{" "}
          </Link>
        </div>

        {/* Hamburger Menu - Mobile Only */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`${styles.hamburger} ${styles.mobileOnly}`}
        >
          {/* ☰ */}
          <Hamburger />
        </button>
        {/* Navigation Links - Desktop Only */}

        {/* <nav className={`${styles.navLinks} ${styles.desktopOnly}`}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/programs" className={styles.navLink}>
            Programs
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact Us
          </Link>
        </nav> */}
        <nav className={`${styles.navLinks} ${styles.desktopOnly}`}>
          <div className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            {/* <div className={styles.subLinks}>
      <Link href="/about/mission" className={styles.subLink}>
        Our Mission
      </Link>
      <Link href="/about/team" className={styles.subLink}>
        Our Team
      </Link>
      <Link href="/about/history" className={styles.subLink}>
        Our History
      </Link>
    </div> */}
          </div>

          <div className={styles.navItem}>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            {/* <div className={styles.subLinks}>
      <Link href="/blog/latest" className={styles.subLink}>
        Latest Posts
      </Link>
      <Link href="/blog/categories" className={styles.subLink}>
        Categories
      </Link>
    </div> */}
          </div>

          <div className={styles.navItem}>
            <Link href="/programs" className={styles.navLink}>
              Programs <Chevron />
            </Link>
            <div className={styles.subLinks}>
              <Link href="/programs/bible-study" className={styles.subLink}>
                Bible Study
              </Link>
              <Link href="/programs/prayer" className={styles.subLink}>
                Prayer Sessions
              </Link>
              <Link
                href="/programs/covenant-families"
                className={styles.subLink}
              >
                Covenant Families
              </Link>
              <Link href="/programs/events" className={styles.subLink}>
                Events
              </Link>
            </div>
          </div>

          <div className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact Us
            </Link>
          </div>
        </nav>
      </div>

      {/* Navigation Drawer (Left) */}
      <div
        className={`${styles.drawerOverlay} ${isNavOpen ? styles.active : ""}`}
        onClick={() => setIsNavOpen(false)}
      >
        <div
          className={`${styles.drawer} ${styles.drawerLeft} ${
            isNavOpen ? styles.active : ""
          }`}
        >
          <button
            className={styles.closeButton}
            onClick={() => setIsNavOpen(false)}
          >
            <Close />
          </button>
          <nav className={`${styles.navLinks}`}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/programs" className={styles.navLink}>
              Programs
            </Link>
            {/* Programs Dropdown */}
            <div className={styles.dropdown}>
              <div className={styles.submenu}>
                <Link
                  href="/programs/bible-study"
                  className={styles.submenuItem}
                >
                  Bible Study
                </Link>
                <Link href="/programs/prayer" className={styles.submenuItem}>
                  Prayer Meetings
                </Link>
                <Link
                  href="/programs/covenant-families"
                  className={styles.submenuItem}
                >
                  Covenant Families
                </Link>
                <Link href="/programs/events" className={styles.submenuItem}>
                  Events
                </Link>
              </div>
            </div>
            <Link href="/contact" className={styles.navLink}>
              Contact Us
            </Link>
            <Link href="/" className={styles.backToHome}>
              <span>
                <Home /> Back to Home
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
