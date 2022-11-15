import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

interface Props {
  id: number;
  title: string;
  releaseDate: string;
  posterPath: string;
  score: number;
}

export default function MainPageMovieCard({
  id,
  title,
  releaseDate,
  posterPath,
  score,
}: Props) {
  const date = new Date(releaseDate).toLocaleDateString();
  const poster = routes.linkToImage(posterPath);
  return (
    <div className="col-xl-2 col-6">
      <div className="card border-0">
        <Link to={`movie/${id}`}>
          <img className="card-img-top rounded-3" src={poster} alt={title} />
          <div className="card-img-overlay">{score}</div>
          <div className="card-body">
            <h5 className="card-title white-space">{title}</h5>
            <p className="card-text">{date}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
