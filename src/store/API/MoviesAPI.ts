import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchedMovies, NormalizedFetchedSingleMovie, singleMovieQueryParams } from "../../interfaces";
import API_TOKEN from "../../secret";
import { transformSingleMovieResponse } from "../../utils";

const moviesAPI = createApi({
  reducerPath: "popularMovieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (build) => ({
    fetchPopularMovies: build.query<FetchedMovies, string>({
      query: (type) => ({
        url: "/movie/popular",
        params: {
          api_key: API_TOKEN,
          language: type,
        },
      }),
    }),
    fetchSingleMovie: build.query<NormalizedFetchedSingleMovie, singleMovieQueryParams>({
      query: ({ language, id }) => ({
        url: `/movie/${id}`,
        params: {
          api_key: API_TOKEN,
          language,
        },
      }),
      transformResponse: transformSingleMovieResponse,
    }),
  }),
});

export default moviesAPI;
