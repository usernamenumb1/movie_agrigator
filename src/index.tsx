import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/context/AuthProvider";
import resources from "./locales";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const i18n = i18next.createInstance();
i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    debug: true,
    resources,
  })
  .then(() => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </React.StrictMode>,
    );
  });
