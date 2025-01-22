import styles from './styles.module.css';

export const MessageFromPastor = () => {
  return (
    <section className={styles.pastorSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pastor"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <p className={styles.subheading}>WORSHIP WITH US</p>
          <h1 className={styles.heading}>
            A MESSAGE FROM <span className={styles.highlight}>OUR PASTOR</span>
          </h1>
          <p className={styles.description}>
            We are a vibrant community of believers dedicated to worship, fellowship, and service. Our mission is to share God's love, grow in faith, and make a positive impact in the world through compassionate outreach and meaningful connections.
          </p>
          <p className={styles.description}>
            Our church is a welcoming place where everyone can find support, inspiration, and a sense of belonging. Together, we strive to live out our faith and make a difference.
          </p>
          <div className={styles.signature}>
            <p className={styles.name}>Bethmound Mensah</p>
            <p className={styles.role}>Lead Pastor, ICGC Rehoboth Temple</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromPastor;