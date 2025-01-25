"use client";

import { useState } from "react";
import styles from "./styles.module.css";

export const CardGrid = () => {
  const cards = [
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    //   title: "This Week’s Sermon Embracing Forgiveness",
    //   link: "#",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    //   title: "Join Us For The Christmas Eve Candlelight Service",
    //   link: "#",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    //   title: "New Bible Study Series Starts This Sunday",
    //   link: "#",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    //   title: "This Week’s Sermon Embracing Forgiveness",
    //   link: "#",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    //   title: "Join Us For The Christmas Eve Candlelight Service",
    //   link: "#",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    //   title: "New Bible Study Series Starts This Sunday",
    //   link: "#",
    // },
    {
      image:
        "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL

      title: "This Week’s Sermon Embracing Forgiveness",
      date: "2024-11-12",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL

      title: "Join Us For The Christmas Eve Candlelight Service",
      date: "2024-12-24",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL

      title: "New Bible Study Series Starts This Sunday",
      date: "2025-01-15",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL

      title: "This Week’s Sermon Embracing Forgiveness",
      date: "2025-01-22",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL

      title: "Join Us For The Christmas Eve Candlelight Service",
      date: "2025-01-31",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL

      title: "New Bible Study Series Starts This Sunday",
      date: "2025-02-15",
      link: "#",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMonth = monthFilter
      ? new Date(card.date)
          .toLocaleString("default", { month: "long" })
          .toLowerCase() === monthFilter.toLowerCase()
      : true;
    return matchesSearch && matchesMonth;
  });

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonthFilter(event.target.value);
    setCurrentPage(1);
  };

  return (
    // <section className={styles.cardGridSection}>
    //   <div className={styles.grid}>
    //     {cards.map((card, index) => (
    //       <div key={index} className={styles.card}>
    //         <img src={card.image} alt={card.title} className={styles.image} />
    //         <div className={styles.cardContent}>
    //           <h3 className={styles.title}>{card.title}</h3>
    //           <a href={card.link} className={styles.link}>
    //             Read More <span className={styles.arrow}>➜</span>
    //           </a>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className={styles.cardGridSection}>
      <h1 className={styles.heading}>
        Search for an article by title, 
        <span className={styles.highlight}> or filter by month</span>
      </h1>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        {/* <label className={styles.monthFilterLabel}>
            Filter By Month
        </label> */}
        <select
          value={monthFilter}
          onChange={handleFilter}
          className={styles.filterDropdown}
        >
          <option value="">All Months</option>
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.grid}>
        {paginatedCards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.image} alt={card.title} className={styles.image} />
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.date}>
                {new Date(card.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <a href={card.link} className={styles.link}>
                Read More <span className={styles.arrow}>➜</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${
              currentPage === page ? styles.activePage : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
