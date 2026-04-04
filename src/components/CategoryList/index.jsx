import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";
import QuestionLevel from "../QuestionLevel";
import { useSelector } from "react-redux";

export default function CategoryList() {
  const categories = useSelector((state)=>state.categories);
  console.log(categories);
  
  return (
    <>
      <div className="d-flex flex-direction-column text-center">
        {categories.map((category) => (
          <Link
            className={styles.link}
            key={category.id}
            to={`/catalog/${category.id}`}
          >
            <span>
              {category.title} <QuestionLevel level={category.level} />
            </span>{" "}
            <span>Количество вопросов: {category?.tasks?.length}</span>
          </Link>
        ))}
      </div>
    </>
  );
}


