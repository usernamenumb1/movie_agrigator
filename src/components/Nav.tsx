import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from './context/AuthProvider';

export default function Nav() {
  const { t } = useTranslation();
  const { isAuthorised, logOut } = useContext(AuthContext);
  const logOutHandler = () => {
    logOut();
  };
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white rounded-1 mb-5">
      <div className="container">
        <Link className="navbar-brand text-dark text-decoration-none pacifico" to="/">{t('nav.AppName')}</Link>
        {isAuthorised === 'no token' ? null : <button type="button" className="btn btn-lightblue rounded-3" onClick={logOutHandler}>{t('nav.logoutButton')}</button>}
      </div>
    </nav>
  );
}
