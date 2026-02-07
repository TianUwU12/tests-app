import React from "react";
import { useParams } from "react-router-dom";
import { categoryQuestions } from "../../data/questions";
import styles from "./Theory.module.css";
export default function TheoryPage() {
  const { id } = useParams();

  const category = categoryQuestions.find((category) => category.id === id);

  if (!category) {
    return <p>Категория не найдена</p>;
  }
  

  return (
    <>
      <h1 className = {styles.text}>{category.title}</h1>
      <div className = {styles.text} style={{ whiteSpace: 'pre-line' }}>{category.theory.map((text,index) => <p key={index}>{text}</p>)}</div>
    </>
  );
}
