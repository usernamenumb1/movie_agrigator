import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import SearchPreview from "./SearchPreview";
import useDebounce from "../../../hooks/useDebounce";
import routes from "../../../routes";

export default function SearchingForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required(),
    }),
    onSubmit: ({ message }) => {
      navigate({
        pathname: routes.searchResultsPage(),
        search: `?query=${message}`,
      });
      // console.log(message);
      // actions.resetForm();
      // if (!inputRef.current) throw Error("inputRef is not assigned");
      // inputRef.current.focus();
    },
  });

  const debouncedValue = useDebounce(formik.values.message, 2000);

  return (
    <div className="col mx-xl-4 mx-0">
      <form
        className="border-0 rounded-5 shadow"
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
            className="border-0 p-0 ps-2 form-control rounded-5 transparent"
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
      <SearchPreview searchTerm={debouncedValue} />
    </div>
  );
}
