import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import routes from "../../routes";
import moviesAPI from "../../store/API/MoviesAPI";

interface Props {
  id: string;
  currentLocale: string;
}

export default function FavoritMovieCard({ id, currentLocale }: Props) {
  const { data } = moviesAPI.useFetchSingleMovieQuery({
    language: currentLocale,
    id,
  });
  const poster = routes.linkToImage(data?.posterPath);
  return (
    <div className="col-xl-2 mx-2 col-6">
      <div className="card border-0">
        <Link to={`/movie/${id}`}>
          <img
            className="card-img-top rounded-3"
            src={poster}
            alt={data?.title}
          />
          <div className="card-img-overlay">{data?.voteAverage}</div>
          <div className="card-body">
            <h5 className="card-title white-space text-truncate">
              {data?.title}
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

FavoritMovieCard.defaultProps = {
  id: 0,
  currentLocale: "en-US",
};

FavoritMovieCard.propTypes = {
  id: PropTypes.string,
  currentLocale: PropTypes.string,
};
