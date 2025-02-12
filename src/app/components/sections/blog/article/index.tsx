"use client";

// TO DO: 

/*
Create a render engine to render the article in broken up and formatted paragraph and blockquote nodes, with header, subheader and image
*/

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Arrow } from "@/app/icons/arrow";
import { Chevron } from "@/app/icons/chevron";

const BlogDetails = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.blogDetails}>
      <div className={styles.blogHeader}>
        <img
            src="https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog Header"
          className={styles.blogImage}
        />
        <h1 className={styles.blogTitle}>Embracing Forgiveness: A Journey of Faith</h1>
        <h2 className={styles.blogSubtitle}>How Letting Go Transforms Your Heart</h2>
        <p className={styles.blogMeta}>Published on January 12, 2025 | Category: Sermon</p>
      </div>

      <article className={styles.blogContent}>
        <p>
          Forgiveness is at the heart of our Christian faith. It is a gift from God, and in turn,
          a gift we give to others. In this article, we explore how embracing forgiveness can
          lead to deeper spiritual growth.
        </p>

        <h3>Why Forgiveness Matters</h3>
        <p>
          Holding onto resentment can weigh us down, preventing us from experiencing true peace.
          The Bible reminds us in Matthew 6:14-15, "For if you forgive others their trespasses,
          your heavenly Father will also forgive you."
        </p>

        <h3>Practical Steps to Forgiveness</h3>
        <p>
          Learning to forgive is a process, but with prayer and a heart open to God's guidance,
          we can move toward healing.
        </p>
        <ul>
          <li><strong>Pray for Strength:</strong> Ask God to help you release bitterness.</li>
          <li><strong>Seek Understanding:</strong> Try to see the situation from a different perspective.</li>
          <li><strong>Let Go of Anger:</strong> Understand that forgiveness does not mean excusing harm.</li>
        </ul>

        <h3>God's Promise in Forgiveness</h3>
        <p>
          God’s love is limitless, and He calls us to reflect that love through forgiveness.
          By forgiving, we not only set others free but also free ourselves from the burden of resentment.
        </p>

        <blockquote className={styles.quote}>
          "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."
          <span> - Ephesians 4:32</span>
        </blockquote>

        <p>
          As you move forward, remember that forgiveness is a journey, not a one-time event.
          Embrace it with faith, and you will experience the fullness of God's love.
        </p>
      </article>

      <div className={styles.blogFooter}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to All Articles
        </Link>
      </div>

      {showScrollTop && (
        <button className={styles.scrollTopButton} onClick={scrollToTop}>
          ↑ {/* Back to Top */}
        </button>
      )}
    </div>
  );
};

export default BlogDetails;