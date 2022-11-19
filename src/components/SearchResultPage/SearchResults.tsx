import React from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import moviesAPI from "../../store/API/MoviesAPI";
import SearchResultCard from "./SearchResultCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const { i18n: { language } } = useTranslation();
  const query = searchParams.get('query');
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
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
        <div className="col-xl-2" />
      </div>
    </div>
  );
}
