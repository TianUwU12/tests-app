import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function FavouritesPage() {
  const favourites = useSelector((state) => state.favouriteSlice);
  const navigate = useNavigate();


  if (!favourites.length) {
    return (
      <div>
        <p>Нет избранного </p>
        <button onClick={() => navigate("/theory")}>Перейти на главную</button>
      </div>
    );
  }
  
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {favourites.map(({ id, title }) => (
        <Link key={id} to={`/theory/${id}`}>
          {title}
        </Link>
      ))}
    </div>
  );
}
