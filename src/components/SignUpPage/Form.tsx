import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthorizationContext } from "../context/AuthProvider";
import routes from "../../routes";
import { InitialFormValues, LogInArgs } from "../../interfaces";

export default function Form() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { logIn } = useContext(AuthorizationContext);
  const setIsAuthorised = ({ data }: { data: LogInArgs }) => {
    logIn(data);
    navigate(-2);
  };

  const formik = useFormik<InitialFormValues>({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, t('feedback.toLong') as string)
        .required(t('feedback.required') as string),
      password: Yup.string()
        .min(5, t('feedback.toShortPassword') as string)
        .required(t('feedback.required') as string),
      confirmPassword: Yup.string()
        .required(t('feedback.required') as string)
        .oneOf([Yup.ref('password'), null], t('feedback.notMatches') as string),
    }),
    onSubmit: ({ username, password }) => {
      axios.post(routes.signUpPath(), { username, password })
        .then(setIsAuthorised)
        .catch(({ response }) => {
          if (response.status === 409) formik.errors.username = response.statusText;
          console.log(formik.errors.username);
        });
    },
  });

  const { username: usernameError, password: passwordError } = formik.errors;
  const { username, password } = formik.values;

  return (
    <div className="card border-0">
      <div className="card-body row p-xl-5 pb-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          className="col-12 mt-3 mt-md-0"
        >
          <h1 className="text-center mb-4">{t("signupPage.header")}</h1>
          <div className="form-floating mb-4">
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={formik.handleChange}
              value={username}
            />
            <label htmlFor="username" className="form-label">
              {t("signupPage.labels.name")}
            </label>
            {formik.errors.username && (
              <div className="custom-tooltip">
                <div className="tooltip-text">{usernameError}</div>
              </div>
            )}
          </div>
          <div className="form-floating mb-4">
            <input
              id="password"
              name="password"
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={formik.handleChange}
              value={password}
            />
            <label htmlFor="password" className="form-label">
              {t("signupPage.labels.password")}
            </label>
            {passwordError && (
              <div className="custom-tooltip">
                <div className="tooltip-text">{passwordError}</div>
              </div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              className="form-control"
              placeholder="Confirm password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <label htmlFor="password" className="form-label">{t('signupPage.labels.confirmPassword')}</label>
            {formik.errors.confirmPassword && <div className="custom-tooltip"><div className="tooltip-text">{formik.errors.confirmPassword}</div></div>}
          </div>
          <button type="submit" className="w-100 btn btn-steelblue rounded-5">
            {t("signupPage.submitButton")}
          </button>
        </form>
      </div>
    </div>
  );
}
