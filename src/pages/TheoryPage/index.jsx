import React from "react";
import { useParams } from "react-router-dom";
import { categoryQuestions } from "../../data/questions";
import styles from "./Theory.module.css";
import { useDispatch } from "react-redux";
import { addTheory } from "../../store/slices/favouriteSlice";
export default function TheoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const category = categoryQuestions.find((category) => category.id === id);

  if (!category) {
    return <p>Категория не найдена</p>;
  }

  function handleAddTheory() {
    const { id, title, theory } = category;
    dispatch(addTheory({ id, title, theory }));
  }

  return (
    <>
      <h1 className={styles.text}>{category.title}</h1>
      <button onClick={handleAddTheory}>Добавить в избранное</button>
      <div className={styles.text} style={{ whiteSpace: "pre-line" }}>
        {category.theory.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </>
  );
}
