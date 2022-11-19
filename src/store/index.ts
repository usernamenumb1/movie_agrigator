import { configureStore, combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./slices/MovieSlice";
import moviesAPI from "./API/MoviesAPI";
import userDataApi from "./API/UserDataAPI";

const rootReducer = combineReducers({
  movieSlice,
  [moviesAPI.reducerPath]: moviesAPI.reducer,
  [userDataApi.reducerPath]: userDataApi.reducer,
});

export default () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([moviesAPI.middleware, userDataApi.middleware]),
});
