import React from "react";
import { useTranslation } from "react-i18next";
import SearchingForm from "./SearchingForm";

export default function Searching() {
  const { t } = useTranslation();

  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col d-grid search-bg">
          <div className="row mx-xl-5 my-auto">
            <h2 className="ms-xl-5 ms-2 text-white">{t("mainPage.slogan")}</h2>
            <SearchingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
