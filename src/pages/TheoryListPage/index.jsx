import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TheoryListPage() {
  const categories = useSelector((state)=>state.categories);
  return (
    <>
      <h1>Теория ОГЭ</h1>
      <div className="d-flex flex-direction-column" >
        {categories.map(({id,title}) => (
          <Link key={id} to={`/theory/${id}`}>
            {title} 
          </Link>
        ))}
      </div>
    </>
  );
}
