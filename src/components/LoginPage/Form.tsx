import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthorizationContext } from "../context/AuthProvider";
import routes from "../../routes";
import { InitialFormValues, LogInArgs } from "../../interfaces";

export default function Form() {
  const { logIn } = useContext(AuthorizationContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const logInUser = ({ data }: { data: LogInArgs }) => {
    logIn(data);
    navigate(routes.mainChatPage());
  };

  const formik = useFormik<InitialFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, t("feedback.toLong") as string)
        .required(t("feedback.required") as string),
      password: Yup.string()
        .min(5, t("feedback.toShortPassword") as string)
        .required(t("feedback.required") as string),
    }),
    onSubmit: ({ username, password }) => {
      axios
        .post(routes.loginPath(), { username, password })
        .then(logInUser)
        .catch(({ response }) => {
          if (response.status === 401) {
            formik.setErrors({ username: t("feedback.unauthorized") });
          }
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
          <h1 className="text-center mb-4">{t("loginPage.header")}</h1>
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
              {t("loginPage.labels.name")}
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
              {t("loginPage.labels.password")}
            </label>
            {passwordError && (
              <div className="custom-tooltip">
                <div className="tooltip-text">{passwordError}</div>
              </div>
            )}
          </div>
          <button type="submit" className="w-100 btn btn-steelblue rounded-5">
            {t("loginPage.submitButton")}
          </button>
        </form>
      </div>
      <div className="card-footer p-4 border-0 rounded-5">
        <div className="text-center">
          <span className="pe-1">{t("loginPage.footer.span")}</span>
          <Link to={routes.signUpPage()}>{t("loginPage.footer.link")}</Link>
        </div>
      </div>
    </div>
  );
}
