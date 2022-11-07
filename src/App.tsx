/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import { AuthContext } from './components/context/AuthProvider';
import LogIn from './components/LoginPage/LogIn';
import routes from './routes';

function App(): JSX.Element {
  const { isAuthorised } = useContext(AuthContext);
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <Routes>
        <Route path={routes.loginPage()} element={<LogIn />} />
        {/* <Route path={routes.signUpPage()} element={<SignUp />} /> */}
        <Route path={routes.mainChatPage()} element={isAuthorised !== 'no token' ? null : <Navigate to="/login" />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
