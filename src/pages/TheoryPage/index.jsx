import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Theory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheory } from "../../store/slices/favouriteSlice";

export default function TheoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const favourites = useSelector((state) => state.favouriteSlice);

  const existTheory = favourites.find((theory) => theory.id === id);

  const category = categories.find((category) => category.id === id);

  if (!category) {
    return <p>Категория не найдена</p>;
  }

  function handleToggleTheory() {
    const { id, title, theory } = category;
    dispatch(toggleTheory({ id, title, theory }));
  }

  return (
    <>
      <h1 className={styles.text}>{category.title}</h1>

      <button onClick={handleToggleTheory}>
        {" "}
        {existTheory ? "Удалить из избранного" : "Добавить в избранное"}{" "}
      </button>
      <div className={styles.text} style={{ whiteSpace: "pre-line" }}>
        {category.theory.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </>
  );
}
