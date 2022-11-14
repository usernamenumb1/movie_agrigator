import React from "react";
import MoviesAPI from "../../store/API/MoviesAPI";
import MovieCard from "./MovieCard";

export default function PopularMovies() {
  const { data } = MoviesAPI.useFetchPopularMoviesQuery("ru-RU");
  return (
    <div className="container horizontal-scrollable">
      <h2>Popular movies</h2>
      <div className="row flex-nowrap">
        {data?.results.map((item) => (
          <MovieCard
            key={item.id}
            title={item.title}
            releaseDate={item.release_date}
            posterPath={item.poster_path}
            score={item.vote_average}
          />
        ))}
      </div>
    </div>
  );
}
