"use client";

import { useRef, useState } from "react";
import styles from "./styles.module.css";

type Event = {
  date: string;
  title: string;
  time: string;
  location: string;
};

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);

  const modalRef = useRef<HTMLDivElement>(null);

  const months = [
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
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const upcomingEvent = {
    image: "https://via.placeholder.com/600x300", // Replace with your event image URL
    title: "Faith & Fellowship Festival",
    date: "February 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "837 Wilson Ave, Toronto, ON",
    description:
      "Join us for a day of worship, community, and fun activities for all ages.",
  };

  const events: Event[] = [
    {
      date: "2025-02-12",
      title: "Bible Study",
      time: "7:00 PM",
      location: "Church Hall",
    },
    {
      date: "2025-02-09",
      title: "Sunday Service",
      time: "10:00 AM",
      location: "Main Sanctuary",
    },
    {
      date: "2025-02-11",
      title: "Faith & Fellowship Festival",
      time: "10:00 AM",
      location: "Community Park",
    },
    // Add more events as needed
  ];

  const getEventsForDate = (date: string) =>
    events.filter((event) => event.date === date);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value.split("-");
    setSelectedMonth(new Date(Number(newMonth[0]), Number(newMonth[1]) - 1));
  };

  const handleDayClick = (date: string) => {
    const dayEvents = getEventsForDate(date);
    // const dayEvents = events.filter((event) => event.date === date);
    setSelectedEvents(dayEvents);
    setModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setModalOpen(false);
    }
  };

  const renderCalendar = () => {
    const currentMonth = selectedMonth.getMonth();
    const currentYear = selectedMonth.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <>
        <h2 className={styles.monthHeader}>
          {/* {months[currentMonth]} {currentYear} */}
        </h2>
        <div className={styles.calendarWrapper}>
          <div className={styles.dayHeaders}>
            {daysOfWeek.map((day) => (
              <div key={day} className={styles.dayHeader}>
                {day}
              </div>
            ))}
          </div>
          <div className={styles.calendar}>
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className={styles.emptyDay}></div>
            ))}
            {days.map((day) => {
              const date = `${currentYear}-${String(currentMonth + 1).padStart(
                2,
                "0"
              )}-${String(day).padStart(2, "0")}`;
              const dayEvents = getEventsForDate(date);

              return (
                <div
                  key={day}
                  className={`${styles.day} ${
                    dayEvents.length > 0 ? styles.eventDay : ""
                  }`}
                  //   onClick={() => setSelectedDate(date)}
                  onClick={() => handleDayClick(date)}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.eventsPage}>
      <h1 className={styles.mainHeader}>Whats On?</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "upcoming" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Event
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "calendar" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("calendar")}
        >
          Calendar View
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "upcoming" && (
          <div className={styles.upcomingEvent}>
            <div className={styles.placeholder}>
              {/* <img
                src={upcomingEvent.image}
                alt={upcomingEvent.title}
                className={styles.eventImage}
              /> */}
            </div>

            <div className={styles.eventContentWrapper}>
              <h2 className={styles.eventTitle}>{upcomingEvent.title}</h2>
              <p className={styles.eventDateTime}>
                {upcomingEvent.date} | {upcomingEvent.time}
              </p>
              <p className={styles.eventLocation}>{upcomingEvent.location}</p>
              <p className={styles.eventDescription}>
                {upcomingEvent.description}
              </p>
            </div>
          </div>
        )}

        {activeTab === "calendar" && (
          <div className={styles.calendarView}>
            <select
              value={`${selectedMonth.getFullYear()}-${String(
                selectedMonth.getMonth() + 1
              ).padStart(2, "0")}`}
              onChange={handleMonthChange}
              className={styles.monthDropdown}
            >
              {Array.from({ length: 12 }, (_, i) => {
                const date = new Date(new Date().getFullYear(), i);
                return (
                  <option
                    key={i}
                    value={`${date.getFullYear()}-${String(i + 1).padStart(
                      2,
                      "0"
                    )}`}
                  >
                    {months[i]} {date.getFullYear()}
                  </option>
                );
              })}
            </select>
            {renderCalendar()}
            {/* {selectedDate && (
              <div className={styles.selectedDateDetails}>
                { getEventsForDate(selectedDate).length > 0 && (<div className={styles.placeholder}></div>)}
                <div>
                  <h3>Events for {selectedDate}</h3>
                  {getEventsForDate(selectedDate).length > 0 ? (
                    getEventsForDate(selectedDate).map((event, index) => (
                      <div key={index} className={styles.eventDetails}>
                        <h4>{event.title}</h4>
                        <p>{event.time}</p>
                        <p>{event.location}</p>
                      </div>
                    ))
                  ) : (
                    <p>No events for this day.</p>
                  )}
                </div>
              </div>
            )} */}

            {modalOpen && (
              <div className={styles.modalOverlay} onClick={closeModal}>
                <div className={`${styles.modal} ${styles.modalAnimation}`}  ref={modalRef}>
                  <button
                    className={styles.closeButton}
                    onClick={() => setModalOpen(false)}
                  >
                    &times;
                  </button>
                  <h3>Events for Selected Day</h3>
                  {selectedEvents.length > 0 ? (
                    selectedEvents.map((event, index) => (
                      <div key={index} className={styles.eventDetails}>
                        <div className={styles.placeholder}></div>
                        <div>
                          <h4>{event.title}</h4>
                          <p>{event.time}</p>
                          <p>{event.location}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No events for this day.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
