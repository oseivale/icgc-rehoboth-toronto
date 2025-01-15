"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Hamburger } from "@/app/icons/hamburger";
import Image from "next/image";

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
        <nav className={`${styles.navLinks} ${styles.desktopOnly}`}>
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
            ✕
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
            <Link href="/contact" className={styles.navLink}>
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
