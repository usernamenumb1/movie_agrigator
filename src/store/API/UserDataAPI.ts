import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Request {
  movieId: string | undefined;
  username: string | null;
}

interface QueryParams {
  req: Request;
  TOKEN: string | null;
}

interface UserData {
  id: number;
  favorites: number[];
  history: string[];
}

// interface FetchUserQueryParams {
//   username: string | null;
//   TOKEN: string | null;
// }

const userDataApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (build) => ({
    fetchUsersFavorits: build.query({
      query: ({ username, TOKEN }) => ({
        headers: { Authorisation: `Bearer ${TOKEN}` },
        url: "/api/v1/data/favorits",
        params: {
          username,
        },
      }),
    }),
    setUsersFavorites: build.mutation<UserData, QueryParams>({
      query: ({ req, TOKEN }) => ({
        headers: { Authorisation: `Bearer ${TOKEN}` },
        url: "/api/v1/data/favorits",
        method: "POST",
        body: req,
      }),
    }),
    deleteUsersFavorit: build.mutation<UserData, QueryParams>({
      query: ({ req, TOKEN }) => ({
        headers: { Authorisation: `Bearer ${TOKEN}` },
        url: "/api/v1/data/favorits",
        method: "DELETE",
        body: req,
      }),
    }),
  }),
});

export default userDataApi;
