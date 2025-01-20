'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import { Play } from '@/app/icons/play';

const SermonsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl('');
  };
  const sermons = [
    { id: 1, date: '01 DEC', title: "OVERCOMING LIFE'S CHALLENGES", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', videoUrl: 'https://www.youtube.com/embed/LbL9zLHg8uQ' },
    { id: 2, date: '08 DEC', title: "OVERCOMING LIFE'S CHALLENGES", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', videoUrl: 'https://www.youtube.com/embed/LbL9zLHg8uQ' },
    { id: 3, date: '15 DEC', title: "OVERCOMING LIFE'S CHALLENGES", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', videoUrl: 'https://www.youtube.com/embed/LbL9zLHg8uQ' },
  ];

  return (
    <section className={styles.sermonsSection}>
      <div className={styles.header}>
        <p className={styles.subheading}>OUR SERMONS</p>
        <h1 className={styles.heading}>
          OUR LATEST <span className={styles.highlight}>SERMONS</span>
        </h1>
      </div>
      <div className={styles.sermonGrid}>
        {sermons.map((sermon) => (
          <div key={sermon.id} className={styles.sermonCard}>
            <div className={styles.dateBadge}>
              <p>{sermon.date.split(' ')[0]}</p>
              <p>{sermon.date.split(' ')[1]}</p>
            </div>
            <h3 className={styles.cardTitle}>{sermon.title}</h3>
            <p className={styles.cardDescription}>{sermon.description}</p>
            <hr className={styles.separator} />
            <button
              className={styles.watchButton}
              onClick={() => openModal(sermon.videoUrl)}
            >
              {/* Watch Now <span className={styles.playIcon}>&#9658;</span> */}
              Watch Now <span className={styles.playIcon}><Play /></span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <iframe
              src={videoUrl}
              title="Sermon Video"
              allowFullScreen
              frameBorder="0"
              className={styles.video}
            ></iframe>
            <div className={styles.closeButtonWrapper}>
               <button className={styles.closeButton} onClick={closeModal}>
              &#10005;
            </button> 
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default SermonsSection;