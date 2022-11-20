import { configureStore, combineReducers, Middleware } from "@reduxjs/toolkit";
import movieSlice from "./slices/MovieSlice";
import moviesAPI from "./API/MoviesAPI";
import userDataApi from "./API/UserDataAPI";

const logger: Middleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('current state', store.getState());
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const rootReducer = combineReducers({
  movieSlice,
  [moviesAPI.reducerPath]: moviesAPI.reducer,
  [userDataApi.reducerPath]: userDataApi.reducer,
});

export default () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([moviesAPI.middleware, userDataApi.middleware, logger]),
});
