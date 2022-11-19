import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthorizationContext } from "../context/AuthProvider";
import routes from "../../routes";

interface LogOutProps {
  text: string;
  logOut: () => void;
}

function LogIn({ text }: { text: string }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={routes.loginPage()}>{text}</Link>
    </li>
  );
}

function LogOut({ text, logOut }: LogOutProps) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={routes.mainChatPage()} onClick={logOut}>{text}</Link>
    </li>
  );
}

export default function Navigation() {
  const { t } = useTranslation();
  const { isAuthorized, logOut } = useContext(AuthorizationContext);
  return (
    <div className="">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={routes.historyPage()}>History</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={routes.favoritsPage()}>Favorites</Link>
        </li>
        {isAuthorized ? <LogOut text={t("nav.logOut")} logOut={logOut} /> : <LogIn text={t("nav.logIn")} />}
      </ul>
    </div>
  );
}
