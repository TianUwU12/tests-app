import React from "react";
import { useState } from "react";
import { categoryQuestions } from "../../../data/questions";
import styles from "./FormTestConstructorItem.module.css";

export default function FormTestConstructorItem({
  title,
  id,
  tasks,
  changeFormData,
}) {
  const [count, setCount] = useState(0);

  function chCount(a) {
    setCount(count + a);
    changeFormData(id, a);
  }

  return (
    <div>
      <span>{title}</span>
      <button
        className={styles.button}
        disabled={count <= 0}
        onClick={() => chCount(-1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className={styles.button}
        disabled={count >= tasks.length}
        onClick={() => chCount(1)}
      >
        +
      </button>
    </div>
  );
}
