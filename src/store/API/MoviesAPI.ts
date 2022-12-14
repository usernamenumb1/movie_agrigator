import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  FetchedMovies,
  NormalizedFetchedSingleMovie,
  SingleMovieQueryParams,
  SearchedMovieQueryParams,
} from "../../interfaces";
import API_TOKEN from "../../secret";
import { transformSingleMovieResponse } from "../../utils";

const API_KEY = process.env.API_TOKEN ? process.env.API_TOKEN : API_TOKEN;

const moviesAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (build) => ({
    fetchPopularMovies: build.query<FetchedMovies, string>({
      query: (type) => ({
        url: "/movie/popular",
        params: {
          api_key: API_KEY,
          language: type,
        },
      }),
    }),
    fetchSingleMovie: build.query<NormalizedFetchedSingleMovie, SingleMovieQueryParams>({
      query: ({ language, id }) => ({
        url: `/movie/${id}`,
        params: {
          api_key: API_KEY,
          language,
        },
      }),
      transformResponse: transformSingleMovieResponse,
    }),
    fetchSearchedMovies: build.query<FetchedMovies, SearchedMovieQueryParams>({
      query: ({ language, query, page = 1 }) => ({
        url: "/search/movie",
        params: {
          api_key: API_KEY,
          language,
          query,
          page,
        },
      }),
    }),
  }),
});

export default moviesAPI;
