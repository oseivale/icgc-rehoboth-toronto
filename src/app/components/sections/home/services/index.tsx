import { Community } from "@/app/icons/community";
import styles from "./styles.module.css";
import { Office } from "@/app/icons/office";
import { Calendar } from "@/app/icons/calendar";
import Link from "next/link";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon:  <Community />,
      title: "COVENANT FAMILIES",
      description:
        "Join us for special events, including holiday services, picnics, and community fundraisers throughout the year.",
    },
    {
      id: 2,
      icon: <Office />,
      title: "DEPARTMENTS & MINISTRIES",
      description:
        "Join us for special events, including holiday services, picnics, and community fundraisers throughout the year.",
    },
    {
      id: 3,
      icon: <Calendar />,
      title: "SPECIAL EVENTS",
      description:
        "Join us for special events, including holiday services, picnics, and community fundraisers throughout the year.",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <p className={styles.subheading}>SERVICES</p>
        <h1 className={styles.heading}>
          OUR MISSION,{" "}
          <span className={styles.highlight}>TO SERVE, LOVE & GROW</span>
        </h1>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <Link href={'#'} key={service.id} className={styles.card}>
            <div className={styles.iconContainer}>
              {/* <img
                src={service.icon}
                alt={service.title}
                className={styles.icon}
                <Community
              /> */}
              {service.icon}
            </div>
            <p className={styles.description}>{service.description}</p>
            <p className={styles.cardTitle}>{service.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
