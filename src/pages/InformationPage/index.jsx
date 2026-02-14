import React from "react";
import { useSelector } from "react-redux";

export default function InformationPage() {
  const favourites = useSelector((state) => state.favouriteSlice);
  console.log(favourites);

  return <div></div>;
}
