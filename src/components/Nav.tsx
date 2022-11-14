import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthorizationContext } from "./context/AuthProvider";

export default function Nav() {
  const { t } = useTranslation();
  const { isAuthorized, logOut } = useContext(AuthorizationContext);
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white rounded-1 mb-auto">
      <div className="container">
        <Link
          className="navbar-brand text-dark text-decoration-none pacifico h-1"
          to="/"
        >
          <h2 className="app-name grad1">{t("nav.AppName")}</h2>
        </Link>
        {!isAuthorized ? null : (
          <button
            type="button"
            className="btn btn-steelblue rounded-5"
            onClick={logOut}
          >
            {t("nav.logoutButton")}
          </button>
        )}
      </div>
    </nav>
  );
}
