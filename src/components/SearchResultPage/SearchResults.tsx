import React from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import moviesAPI from "../../store/API/MoviesAPI";
import SearchResultCard from "./SearchResultCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const {
    i18n: { language },
  } = useTranslation();

  const { data } = moviesAPI.useFetchSearchedMoviesQuery({ language, query });
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-xl-2">filters</div>
        <div className="col-xl-8">
          {data?.results.map((movie) => (
            <SearchResultCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              review={movie.overview}
              score={movie.vote_average}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
        <div className="col-xl-2" />
      </div>
    </div>
  );
}
