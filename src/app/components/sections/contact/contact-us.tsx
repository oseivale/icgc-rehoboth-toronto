import { Location } from '@/app/icons/location';
import styles from './styles.module.css';
import { Phone } from '@/app/icons/phone';
import { Email } from '@/app/icons/email';

export const ContactUs = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h2 className={styles.subheading}>CONTACT US</h2>
          <h1 className={styles.heading}>
            REACH OUT TO OUR <span className={styles.highlight}>CHURCH SUPPORT TEAM</span>
          </h1>
          <p className={styles.description}>
            {`Contact us for support, information, or to get involved. We're here to help and welcome you to our community.`}
          </p>
          <div className={styles.contactMethods}>
            <div className={styles.contactCard}>
              <span className={styles.icon}><Phone /></span>
              <div>
                <p className={styles.contactTitle}>Give us a call</p>
                <p className={styles.contactDetails}>(+01) 789 859 654</p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <span className={styles.icon}><Email/></span>
              <div>
                <p className={styles.contactTitle}>Send us a message</p>
                <p className={styles.contactDetails}>info@domain.com</p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <span className={styles.icon}><Location color={'var(--rehoboth-dark-green)'} /></span>
              <div>
                <p className={styles.contactTitle}>Visit our location</p>
                <p className={styles.contactDetails}>837 Wilson Ave.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className={styles.input}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={styles.input}
            />
            <textarea
              name="message"
              placeholder="Message"
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              SUBMIT MESSAGE <span className={styles.arrow}>➜</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;