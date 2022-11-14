import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchedMovies } from "../../interfaces";
import API_TOKEN from "../../secret";

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
  }),
});

export default moviesAPI;
