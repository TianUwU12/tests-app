import React from "react";
import { categoryQuestions } from "../../data/questions";
import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";
import QuestionLevel from "../QuestionLevel";

export default function CategoryList() {
  return (
    <>
      <div>CategoryList</div>
      <div className="d-flex flex-direction-column text-center">
        {categoryQuestions.map((category) => (
          <Link
            className={styles.link}
            key={category.id}
            to={`/catalog/${category.id}`}
          >
            <span>
              {category.title} <QuestionLevel level={category.level} />
            </span>{" "}
            <span>Kolichestvo voprosov {category.tasks.length}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

//создать компонент категории

// в него в просах передавать нашу категорию

//+ добавить корректные задачи в массив (хотя бы 3 категории по 5 задач)

// подправить ошибку в консоли из мейн карусели

// + в четных слайдах нашей карусели картинка долджна быть слева
// add reset button
