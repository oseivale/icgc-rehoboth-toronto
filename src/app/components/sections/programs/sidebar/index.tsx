'use client'

import { useState } from "react";
import styles from "./styles.module.css";

type Resource = {
  type: string;
  url: string;
  label: string;
};

type Session = {
  title: string;
  date: string;
  videoUrl: string;
  summary: string;
  resources: Resource[];
};

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSession, setActiveSession] = useState< Session | null>(null);

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

  const openModal = (session: Session) => {
    setActiveSession(session);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveSession(null);
  };

  return (
    <div className={styles.sidebar}>
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
      {/* <Accordion /> */}
    </div>
  );
};

export default Sidebar;