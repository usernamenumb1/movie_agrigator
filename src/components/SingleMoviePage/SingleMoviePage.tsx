import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMdHeart } from "react-icons/io";
import routes from "../../routes";
import moviesAPI from "../../store/API/MoviesAPI";

export default function SindleMoviePage() {
  const { id } = useParams();

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const { data } = moviesAPI.useFetchSingleMovieQuery({
    language: currentLocale,
    id,
  });

  const setFavorits = () => {
    console.log("in favorites");
  };

  return (
    <div className="row">
      <div className="col">
        <div
          className="background-settings"
          style={{
            backgroundImage: `url(${routes.linkToBGImage(data?.backdropPath)})`,
          }}
        >
          <div className="custom-bg d-none d-xl-block">
            <div className="container">
              <div className="row py-5 text-white">
                <div className="col-xl-3 pe-4">
                  <img
                    className="img-fluid rounded-4 d-block"
                    src={routes.linkToImage(data?.posterPath)}
                    alt="bg"
                  />
                </div>
                <div className="col-xl-9 px-4">
                  <div className="row mb-3">
                    <h2 className="m-0">{data?.title}</h2>
                    <span className="fw-lighter">
                      {data?.genres.join(", ")}
                    </span>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <div className="col-xl-1">
                      <div className="fs-3 fw-bold text-center bg-light text-dark rounded-3 transparent justify-content-center">
                        {data?.voteAverage}
                      </div>
                    </div>
                    <div className="col-xl-1">
                      <button
                        type="button"
                        aria-label="Like"
                        className="ms-2 p-1 btn favourits rounded-5"
                        onClick={setFavorits}
                      >
                        <IoMdHeart size="2rem" />
                      </button>
                    </div>
                  </div>
                  <p className="fst-italic fw-lighter">{data?.tagline}</p>
                  <h4>Review</h4>
                  <p className="fw-lighter">{data?.review}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
