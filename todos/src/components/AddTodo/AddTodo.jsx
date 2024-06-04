import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { v4 as uuid } from "uuid";
import { FaPlus } from "react-icons/fa6";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuid(), text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Add New..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />
      <button className={styles.button}>
        <FaPlus />
      </button>
    </form>
  );
}
