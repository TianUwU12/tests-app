import React from "react";
import { categoryQuestions } from "../../data/questions";
import { Link } from "react-router-dom";

export default function TheoryListPage() {
  return (
    <>
      <h1>Теория ОГЭ</h1>
      <div className="d-flex flex-direction-column">
        {categoryQuestions.map(({id,title}) => (
          <Link key={id} to={`/theory/${id}`}>
            {title}
          </Link>
        ))}
      </div>
    </>
  );
}
