import React, { createContext, useState } from 'react';
import { logInArgs, authContextObj } from '../../interfaces';

export const AuthContext = createContext({} as authContextObj);

export function AuthContextProvider({ children }: { children: JSX.Element }) {
  const isTokenExists = () => {
    const token: string | null = localStorage.getItem('token');
    return token || 'no token';
  };
  const [isAuthorised, setAuthorised] = useState(isTokenExists());
  const logIn = ({ username, token }: logInArgs) => {
    console.log(token);
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
    setAuthorised(isTokenExists());
  };
  const logOut = () => {
    localStorage.clear();
    setAuthorised('no token');
  };
  const contextValue: authContextObj = { isAuthorised, logIn, logOut };
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
