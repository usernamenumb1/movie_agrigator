import React from 'react';

export interface logInArgs {
  username: string,
  token: string,
}

export interface authContextObj {
  isAuthorised: string | null;
  logIn: (arg: logInArgs) => void;
  logOut: () => void;
}

export interface initialFormValues {
  username: string;
  password: string;
}

export interface formProps {
  username: string;
  password: string;
  logIn: (e: React.FormEvent<HTMLFormElement>) => void;
  changeValue: (e: React.ChangeEvent<any>) => void;
  usernameError: string | undefined;
  passwordError: string | undefined;
}
