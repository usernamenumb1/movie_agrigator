import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export default function Searching() {
  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required(),
    }),
    onSubmit: ({ message }, actions) => {
      console.log(message);
      actions.resetForm();
      if (!inputRef.current) throw Error("inputRef is not assigned");
      inputRef.current.focus();
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{t("mainPage.slogan")}</h2>
          <form
            className="border-0 rounded-5 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <div className="input-group">
              <input
                ref={inputRef}
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                type="text"
                className="border-0 p-0 ps-2 form-control rounded-5"
              />
              <button
                type="submit"
                aria-label="Send"
                className="btn btn-group-vertical p-1 px-3 rounded-5 btn-steelblue border-0"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
