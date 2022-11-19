import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";

export default function Nav() {
  const { t } = useTranslation();
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white rounded-1 mb-auto">
      <div className="container">
        <Link
          className="navbar-brand text-dark text-decoration-none pacifico h-1"
          to="/"
        >
          <h2 className="app-name">{t("nav.AppName")}</h2>
        </Link>
        <Navigation />
      </div>
    </nav>
  );
}
