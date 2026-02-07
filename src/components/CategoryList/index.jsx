import React from "react";
import { categoryQuestions } from "../../data/questions";
import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";
import QuestionLevel from "../QuestionLevel";

export default function CategoryList() {
  return (
    <>
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
            <span>Количество вопросов: {category.tasks.length}</span>
          </Link>
        ))}
      </div>
    </>
  );
}


