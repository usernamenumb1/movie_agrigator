import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

interface Props {
  id: number;
  title: string;
  review: string;
  score: number;
  posterPath: string;
}

export default function SearchResultCard({
  id,
  title,
  review,
  score,
  posterPath,
}: Props) {
  const poster = routes.linkToImage(posterPath);
  return (
    <div className="card mb-4 border-0" style={{ maxHeight: "440px" }}>
      <Link to={`/movie/${id}`}>
        <div className="row g-0">
          <div className="col-md-4 col-xl-2">
            <img className="card-img-top rounded-3" src={poster} alt={title} />
            <div className="card-img-overlay">{score}</div>
          </div>
          <div className="col-md-8 col-xl-10">
            <div className="row">
              <div className="card-body ms-2">
                <h3 className="card-title">{title}</h3>
                <p className="card-text text-ellipsis">{review}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
