/* eslint-disable no-undef */
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import Nav from "./components/NavBar/Nav";
import { AuthorizationContext } from "./components/context/AuthProvider";
import LogIn from "./components/LoginPage/LogIn";
import ProtectedRoute from "./components/PrivatRoutes/ProtectedRoute";
import MainPage from "./components/MainPage/MainPage";
import routes from "./routes";
import SindleMoviePage from "./components/SingleMoviePage/SingleMoviePage";
import Favorits from "./components/FavoritsPage/Favorits";
import SearchResults from "./components/SearchResultPage/SearchResults";
import History from "./components/HistoryPage/History";
import SignUp from "./components/SignUpPage/SignUp";
import ErrorFallback from "./components/ErrorFallBack";

function App(): JSX.Element {
  const { isAuthorized } = useContext(AuthorizationContext);
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <Routes>
        <Route path={routes.loginPage()} element={<LogIn />} />
        <Route path={routes.signUpPage()} element={<SignUp />} />
        <Route path={routes.mainPage()} element={<MainPage />} />
        <Route
          path={routes.singleMoviePage()}
          element={(
            <ErrorBoundary fallback={<ErrorFallback />}>
              <SindleMoviePage />
            </ErrorBoundary>
          )}
        />
        <Route path={routes.searchResultsPage()} element={<SearchResults />} />
        <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
          <Route path={routes.favoritsPage()} element={<Favorits />} />
          <Route path={routes.historyPage()} element={<History />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
