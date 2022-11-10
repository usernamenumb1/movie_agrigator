import React, { createContext, useState } from "react";
import { LogInArgs, AuthContext } from "../../interfaces";

export const AuthorizationContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: { children: JSX.Element }) {
  const isTokenExists = () => {
    const token: string = localStorage.getItem("token") || "no token";
    return token !== "no token";
  };
  const [isAuthorized, setAuthorised] = useState<boolean>(isTokenExists());
  const logIn = ({ username, token }: LogInArgs) => {
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    setAuthorised(isTokenExists());
  };
  const logOut = () => {
    localStorage.clear();
    setAuthorised(false);
  };
  const contextValue: AuthContext = { isAuthorized, logIn, logOut };
  return (
    <AuthorizationContext.Provider value={contextValue}>
      {children}
    </AuthorizationContext.Provider>
  );
}
