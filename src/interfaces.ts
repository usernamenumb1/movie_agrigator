import React from "react";

export interface LogInArgs {
  username: string;
  token: string;
}

export interface AuthContext {
  isAuthorized: boolean;
  logIn: (arg: LogInArgs) => void;
  logOut: () => void;
}

export interface InitialFormValues {
  username: string;
  password: string;
}

export interface FormProps {
  username: string;
  password: string;
  logIn: (e: React.FormEvent<HTMLFormElement>) => void;
  changeValue: (e: React.ChangeEvent<any>) => void;
  usernameError: string | undefined;
  passwordError: string | undefined;
}
