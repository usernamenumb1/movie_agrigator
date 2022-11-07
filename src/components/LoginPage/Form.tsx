import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../routes';
import { formProps } from '../../interfaces';

export default function Form(props: formProps) {
  const {
    username,
    password,
    logIn,
    changeValue,
    usernameError,
    passwordError,
  } = props;
  const { t } = useTranslation();
  return (
    <div className="card shadow-sm">
      <div className="card-body row p-5">
        <form onSubmit={(e) => { e.stopPropagation(); e.preventDefault(); logIn(e); }} className="col-12 mt-3 mt-md-0">
          <h1 className="text-center mb-4">{t('loginPage.header')}</h1>
          <div className="form-floating mb-4">
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={changeValue}
              value={username}
            />
            <label htmlFor="username" className="form-label">{t('loginPage.labels.name')}</label>
            {usernameError && <div className="custom-tooltip"><div className="tooltip-text">{usernameError}</div></div>}
          </div>
          <div className="form-floating mb-4">
            <input
              id="password"
              name="password"
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={changeValue}
              value={password}
            />
            <label htmlFor="password" className="form-label">{t('loginPage.labels.password')}</label>
            {passwordError && <div className="custom-tooltip"><div className="tooltip-text">{passwordError}</div></div>}
          </div>
          <button type="submit" className="w-100 mb-3 btn btn-lightblue">{t('loginPage.submitButton')}</button>
        </form>
      </div>
      <div className="card-footer p-4 bckgrnd-lightblue">
        <div className="text-center">
          <span className="pe-1">{t('loginPage.footer.span')}</span>
          <Link to={routes.signUpPage()}>{t('loginPage.footer.link')}</Link>
        </div>
      </div>
    </div>
  );
}
