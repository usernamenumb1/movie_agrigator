import React from "react";
import { useTranslation } from "react-i18next";
import PopularMovies from "./PopularMovies";
import Searching from "./Searching";

export default function MainPage() {
  const { t } = useTranslation();
  return (
    <div className="col">
      <h2>{t("mainPage.slogan")}</h2>
      <Searching />
      <PopularMovies />
    </div>
  );
}
