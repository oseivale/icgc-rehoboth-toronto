'use client'

import { useState } from "react";
import styles from "./styles.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const resources = [
    {
      title: "Bible Study Guide",
      subtitle: 'Genesis',
      description: "An in-depth guide to understanding the book of Genesis.",
      links: [
        { type: "PDF", url: "/resources/genesis-guide.pdf", label: "Download PDF" },
        { type: "Link", url: "https://biblestudytools.com", label: "Visit Study Tools" },
      ],
    },
    {
      title: "Faith and Fellowship",
      subtitle: 'Study Notes',
      description: "Resources and notes from last week's study on faith.",
      links: [
        { type: "PDF", url: "/resources/faith-notes.pdf", label: "Download Notes" },
      ],
    },
    {
      title: "Prayer Study",
      subtitle: 'Resources',
      description: "Key materials to enhance your prayer life through study.",
      links: [
        { type: "Link", url: "https://prayerresources.com", label: "Visit Resources" },
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {resources.map((resource, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionTitle}
            onClick={() => toggleAccordion(index)}
          >
            <span className={styles.resourceTitle}>{resource.title}</span>
            <span className={styles.arrow}>
              {activeIndex === index ? "▲" : "▼"}
            </span>
          </button>
          {activeIndex === index && (
            <div className={styles.accordionContent}>
              <p>{resource.description}</p>
              <ul>
                {resource.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} ({link.type})
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;