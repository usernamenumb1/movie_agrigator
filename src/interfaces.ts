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

export interface Poster {
  previewURL: string;
  URL: string;
  _id: string;
}

export interface singleMovieQueryParams {
  language: string;
  id: string | undefined;
}
export interface searchedMovieQueryParams {
  language: string;
  query: string | undefined;
  page?: number;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
}
export interface FetchedMovies {
  page: number;
  results: Movie[];
  totalPages: number;
}
export interface FetchedSingleMovie {
  backdrop_path: string;
  budget: number;
  revenue: number;
  genres: { id: string; name: string }[];
  title: string;
  overview: string;
  status: string;
  poster_path: string;
  tagline: string;
  vote_average: number;
}
export interface NormalizedFetchedSingleMovie {
  backdropPath: string;
  budget: number;
  revenue: number;
  genres: string[];
  title: string;
  review: string;
  status: string;
  posterPath: string;
  tagline: string;
  voteAverage: number;
}

export interface MovieStore {
  currentMovie: Movie | null;
}
