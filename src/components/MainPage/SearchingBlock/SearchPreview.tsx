import React from "react";
import { useTranslation } from "react-i18next";
import moviesAPI from "../../../store/API/MoviesAPI";

export default function SearchPreview({ searchTerm }: { searchTerm: string }) {
  const { i18n } = useTranslation();

  const queryParams = { language: i18n.language, query: searchTerm };

  const { data } = moviesAPI.useFetchSearchedMoviesQuery(queryParams, {
    skip: !searchTerm,
  });

  const previewMovies = data?.results.slice(0, 5);

  return (
    <div className="container ps-2 pe-5 position-absolute ontop">
      <div className="row bg-light border-0 rounded-3">
        <div className="col">
          {previewMovies?.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
