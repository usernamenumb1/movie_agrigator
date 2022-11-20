import React from "react";
import { useTranslation } from "react-i18next";
import userDataApi from "../../store/API/UserDataAPI";
import FavoritMovieCard from "./FavoritMovieCard";

export default function Favorits() {
  const { i18n } = useTranslation();
  const TOKEN = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const { data } = userDataApi.useFetchUsersFavoritsQuery(
    { username, TOKEN },
    { refetchOnMountOrArgChange: true },
  );

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-xl-2" />
        <div className="col-xl-8">
          <div className="row">
            {data?.map((id: string) => (
              <FavoritMovieCard
                key={id}
                id={id}
                currentLocale={i18n.language}
              />
            ))}
          </div>
        </div>
        <div className="col-xl-2" />
      </div>
    </div>
  );
}
