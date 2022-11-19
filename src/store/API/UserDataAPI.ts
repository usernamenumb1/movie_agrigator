import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Request {
  movieId?: string | undefined;
  username: string | null;
  link?: string;
  query?: string;
}

interface PostQueryParams {
  req: Request;
  TOKEN: string | null;
}

interface GetQueryParams {
  username: string | null;
  TOKEN: string | null;
}

interface HistoryItem {
  id: number;
  link: string;
  query: string;
}
interface UserData {
  id: number;
  favorites: number[];
  history: string[];
}

const userDataApi = createApi({
  reducerPath: "userDataApi",
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
    setUsersFavorites: build.mutation<UserData, PostQueryParams>({
      query: ({ req, TOKEN }) => ({
        headers: { Authorisation: `Bearer ${TOKEN}` },
        url: "/api/v1/data/favorits",
        method: "POST",
        body: req,
      }),
    }),
    deleteUsersFavorit: build.mutation<UserData, PostQueryParams>({
      query: ({ req, TOKEN }) => ({
        headers: { Authorisation: `Bearer ${TOKEN}` },
        url: "/api/v1/data/favorits",
        method: "DELETE",
        body: req,
      }),
    }),
    fetchUsersHistory: build.query<HistoryItem[], GetQueryParams>({
      query: ({ username, TOKEN }) => ({
        headers: { Authorisation: `Bearer ${TOKEN}` },
        url: "/api/v1/data/history",
        params: {
          username,
        },
      }),
    }),
    setUsersHistory: build.mutation<UserData, PostQueryParams>({
      query: ({ req, TOKEN }) => ({
        headers: { Authorisation: `Bearer ${TOKEN}` },
        url: "/api/v1/data/history",
        method: "POST",
        body: req,
      }),
    }),
    deleteUsersHistory: build.mutation<UserData, PostQueryParams>({
      query: ({ req, TOKEN }) => ({
        headers: { Authorisation: `Bearer ${TOKEN}` },
        url: "/api/v1/data/history",
        method: "DELETE",
        body: req,
      }),
    }),
  }),
});

export default userDataApi;
