"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { NoArticles } from "@/app/icons/no-articles";

type Card = {
  image: string;
  title: string;
  date: string;
  category: string;
  link: string;
};

const CardGrid = () => {
  const allCards: Card[] = [
    {
      image: "path-to-image1.jpg",
      title: "This Week’s Sermon Embracing Forgiveness",
      date: "2025-01-12",
      category: "Sermon",
      link: "/blog/1",
    },
    {
      image: "path-to-image2.jpg",
      title: "Join Us For The Christmas Eve Candlelight Service",
      date: "2024-12-24",
      category: "Event",
      link: "/blog/2",
    },
    {
      image: "path-to-image3.jpg",
      title: "New Bible Study Series Starts This Sunday",
      date: "2025-01-15",
      category: "Bible Study",
      link: "/blog/3",
    },
    {
      image: "path-to-image1.jpg",
      title: "This Week’s Sermon Embracing Forgiveness",
      date: "2025-01-12",
      category: "Sermon",
      link: "/blog/4",
    },
    {
      image: "path-to-image2.jpg",
      title: "Join Us For The Christmas Eve Candlelight Service",
      date: "2024-12-24",
      category: "Event",
      link: "/blog/5",
    },
    {
      image: "path-to-image3.jpg",
      title: "New Bible Study Series Starts This Sunday",
      date: "2025-01-15",
      category: "Bible Study",
      link: "/blog/6",
    },
    // Add more cards...
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredCards = allCards.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMonth = monthFilter
      ? new Date(card.date)
          .toLocaleString("default", { month: "long" })
          .toLowerCase() === monthFilter.toLowerCase()
      : true;
    const matchesYear = yearFilter
      ? new Date(card.date).getFullYear().toString() === yearFilter
      : true;
    const matchesCategory = categoryFilter
      ? card.category.toLowerCase() === categoryFilter.toLowerCase()
      : true;

    return matchesSearch && matchesMonth && matchesYear && matchesCategory;
  });

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleMonthFilter = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setMonthFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleYearFilter = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setYearFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className={styles.cardGridSection}>
      <div className={styles.sidebar}>
        <h3>Search & Filter Articles</h3>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <select
          value={monthFilter}
          onChange={handleMonthFilter}
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
        <select
          value={yearFilter}
          onChange={handleYearFilter}
          className={styles.filterDropdown}
        >
          <option value="">All Years</option>
          {[2024, 2025].map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={handleCategoryFilter}
          className={styles.filterDropdown}
        >
          <option value="">All Categories</option>
          {["Sermon", "Event", "Bible Study"].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {filteredCards.length > 0 ? (
            paginatedCards.map((card, index) => (
              <Link key={index} href={card.link} className={styles.card}>
                {/* <img src={card.image} alt={card.title} className={styles.image} /> */}
                <div className={styles.placeholder}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={styles.date}>
                    {new Date(card.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <span className={styles.link}>
                    Read More <span className={styles.arrow}>➜</span>
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className={styles.noResults}>
              <NoArticles />
              <p className={styles.noResultsText}>
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          )}
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
      </div>
    </section>
  );
};

export default CardGrid;
