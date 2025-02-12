'use client'

import { useState } from "react";
import styles from "./styles.module.css";

const BibleStudyPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSession, setActiveSession] = useState(null);

  const resources = [
    {
      title: "Bible Study Guide - Genesis",
      description: "An in-depth guide to understanding the book of Genesis.",
      links: [
        { type: "PDF", url: "/resources/genesis-guide.pdf", label: "Download PDF" },
        { type: "Link", url: "https://biblestudytools.com", label: "Visit Study Tools" },
      ],
    },
    {
      title: "Faith and Fellowship Study Notes",
      description: "Resources and notes from last week's study on faith.",
      links: [
        { type: "PDF", url: "/resources/faith-notes.pdf", label: "Download Notes" },
      ],
    },
  ];

  const sessions = [
    {
      title: "Understanding Grace - Bible Study Session",
      date: "February 2, 2025",
      videoUrl: "https://example.com/session1-video.mp4",
      summary:
        "In this session, we discuss the concept of grace and its impact on Christian life.",
      resources: [
        { type: "PDF", url: "/resources/grace-study-notes.pdf", label: "Study Notes" },
      ],
    },
    {
      title: "Exploring the Psalms - Bible Study Session",
      date: "January 26, 2025",
      videoUrl: "https://example.com/session2-video.mp4",
      summary:
        "An exploration of the Psalms, focusing on its themes of praise and lament.",
      resources: [
        { type: "PDF", url: "/resources/psalms-study-guide.pdf", label: "Study Guide" },
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openModal = (session) => {
    setActiveSession(session);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveSession(null);
  };

  return (
    <div className={styles.pageContainer}>
      <aside className={styles.sidebar}>
        <h2>Archived Sessions</h2>
        <ul className={styles.sessionList}>
          {sessions.map((session, index) => (
            <li key={index} className={styles.sessionItem}>
              <button onClick={() => openModal(session)} className={styles.sessionButton}>
                {session.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.mainContent}>
        <h1>Bible Study Resources</h1>
        <div className={styles.accordion}>
          {resources.map((resource, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                className={styles.accordionTitle}
                onClick={() => toggleAccordion(index)}
              >
                {resource.title}
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
      </main>

      {modalOpen && activeSession && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <h3>{activeSession.title}</h3>
            <p><strong>Date:</strong> {activeSession.date}</p>
            <p>{activeSession.summary}</p>
            <video
              controls
              className={styles.videoPlayer}
              src={activeSession.videoUrl}
            ></video>
            <ul className={styles.resourceLinks}>
              {activeSession.resources.map((resource, i) => (
                <li key={i}>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    {resource.label} ({resource.type})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BibleStudyPage;