'use client';

import { useState } from 'react';
import styles from './styles.module.css';

type ContentItem = {
  heading: string;
  text: string;
  image: string;
};

type Content = {
  mission: ContentItem;
  vision: ContentItem;
  story: ContentItem;
};

const content: Content = {
  mission: {
    heading: 'TO SHARE, LOVE, AND SERVE',
    text: `Our mission is to share God's love, foster spiritual growth, and serve our community with compassion and purpose. We strive to build a nurturing environment where individuals can deepen their faith and make a positive impact.`,
    image: 'https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  vision: {
    heading: 'TO SERVE, LOVE AND GROW',
    text: `Our vision is to serve our community with compassion, love unconditionally, and foster spiritual growth. Through heartfelt worship, we aim to create meaningful connections and inspire hope.`,
    image: 'https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  story: {
    heading: 'OUR STORY OF FAITH',
    text: `Our story is one of faith, commitment, and dedication to building a supportive community. Together, we have grown stronger, reaching more people and making a lasting difference.`,
    image: 'https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};

const CommunityTabs = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'story'>('mission');

  return (
    <section className={styles.communitySection}>
      <div className={styles.header}>
        <p className={styles.subheading}>COMMUNITY</p>
        <h1 className={styles.heading}>
          BUILDING FAITHFUL COMMUNITY THROUGH{' '}
          <span className={styles.highlight}>LOVE, SERVICE, WORSHIP AND FELLOWSHIP</span>
        </h1>
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'mission' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'vision' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('vision')}
          >
            Our Vision
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'story' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('story')}
          >
            Our Story
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.subheading}>OUR {activeTab.toUpperCase()}</p>
          <h2 className={styles.contentHeading}>{content[activeTab].heading}</h2>
          <p className={styles.contentText}>{content[activeTab].text}</p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={content[activeTab].image}
            alt={activeTab}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityTabs;