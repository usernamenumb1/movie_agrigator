/* eslint-disable no-undef */
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { AuthorizationContext } from "./components/context/AuthProvider";
import LogIn from "./components/LoginPage/LogIn";
import ProtectedMainPage from "./components/PrivatRoutes/ProtectedMainPage";
import routes from "./routes";

function App(): JSX.Element {
  const { isAuthorized } = useContext(AuthorizationContext);
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <Routes>
        <Route path={routes.loginPage()} element={<LogIn />} />
        {/* <Route path={routes.signUpPage()} element={<SignUp />} /> */}
        <Route element={<ProtectedMainPage isAuthorized={isAuthorized} />}>
          <Route path={routes.mainChatPage()} element={null} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
