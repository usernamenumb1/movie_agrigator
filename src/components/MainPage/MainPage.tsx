import React from "react";
import PopularMovies from "./PopularMovies";
import Searching from "./SearchingBlock/Searching";

export default function MainPage() {
  return (
    <div className="col">
      <Searching />
      <PopularMovies />
    </div>
  );
}
