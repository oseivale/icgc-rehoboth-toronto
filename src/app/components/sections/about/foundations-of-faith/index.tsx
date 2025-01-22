"use client";

import { useState } from "react";
import styles from "./styles.module.css";

type AccordionItem = {
    title: string;
    content: string;
  };

  type ActiveIndex = number | null;
const CoreValuesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<ActiveIndex>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData: AccordionItem[] = [
    {
      title: "Why is faith a core value?",
      content:
        "We demonstrate love through compassionate service, supportive relationships, and inclusive community practices.",
    },
    {
      title: "How does the church demonstrate love?",
      content:
        "The church demonstrates love through outreach programs, acts of service, and creating spaces for meaningful connection.",
    },
    {
      title: "How is community fostered within the church?",
      content:
        "Community is fostered through small groups, fellowship events, and shared acts of worship and service.",
    },
    {
      title: "What is the importance of spiritual growth?",
      content:
        "Spiritual growth helps individuals deepen their faith, gain a sense of purpose, and strengthen their connection to God and others.",
    },
    {
      title: "How do these values shape church activities?",
      content:
        "Church activities are centered around fostering spiritual growth, community service, and inclusive worship experiences.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Community"
            className={styles.image}
          />
        </div>
        <div className={styles.accordionContainer}>
          <h1 className={styles.heading}>
            FOUNDATIONS OF OUR FAITH <br />
            <span className={styles.highlight}>& COMMUNITY LIFE</span>
          </h1>
          <div className={styles.accordion}>
            {accordionData.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <div
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  <p>{item.title}</p>
                  <span className={styles.icon}>
                    {activeIndex === index ? "–" : "+"}
                  </span>
                </div>
                <div
                  className={`${styles.accordionContent} ${
                    activeIndex === index ? styles.activeContent : ""
                  }`}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesAccordion;
