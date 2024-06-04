import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onChange }) {
  return (
    <header className={styles.header}>
      <h1>Daily Todo List</h1>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onChange(value)}
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.bot}></div>
    </header>
  );
}
