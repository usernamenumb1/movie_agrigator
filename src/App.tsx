/* eslint-disable no-undef */
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import { AuthorizationContext } from "./components/context/AuthProvider";
import LogIn from "./components/LoginPage/LogIn";
import ProtectedMainPage from "./components/PrivatRoutes/ProtectedMainPage";
import MainPage from "./components/MainPage/MainPage";
import routes from "./routes";
import SindleMoviePage from "./components/SingleMoviePage/SingleMoviePage";
import Favorits from "./components/FavoritsPage/Favorits";
import SearchResults from "./components/SearchResultPage/SearchResults";
import History from "./components/HistoryPage/History";

function App(): JSX.Element {
  const { isAuthorized } = useContext(AuthorizationContext);
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <Routes>
        <Route path={routes.loginPage()} element={<LogIn />} />
        {/* <Route path={routes.signUpPage()} element={<SignUp />} /> */}
        <Route path={routes.mainChatPage()} element={<MainPage />} />
        <Route path={routes.singleMoviePage()} element={<SindleMoviePage />} />
        <Route path={routes.searchResultsPage()} element={<SearchResults />} />
        <Route element={<ProtectedMainPage isAuthorized={isAuthorized} />}>
          <Route path={routes.favoritsPage()} element={<Favorits />} />
          <Route path={routes.historyPage()} element={<History />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
