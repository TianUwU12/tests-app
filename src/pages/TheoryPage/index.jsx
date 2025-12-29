import React from "react";
import { useParams } from "react-router-dom";
import { categoryQuestions } from "../../data/questions";

export default function TheoryPage() {
  const { id } = useParams();

  const category = categoryQuestions.find((category) => category.id === id);

  if (!category) {
    return <p>Категория не найдена</p>;
  }

  return (
    <>
      <h1>{category.title}</h1>
      <div>{category.theory.map((text,index) => <p key={index}>{text}</p>)}</div>
    </>
  );
}
