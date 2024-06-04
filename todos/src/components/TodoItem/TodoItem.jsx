import React from "react";
import styles from "./TodoItem.module.css";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={todo.id}
        checked={todo.status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {todo.text}
      </label>
      <button onClick={handleDelete} className={styles.button}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
