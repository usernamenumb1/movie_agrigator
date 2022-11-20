// @ts-check

const host: string = "";
const prefix: string = "api/v1";
const imageHost: string = "https://image.tmdb.org/t/p";

export default {
  loginPath: () => [host, prefix, "login"].join("/"),
  signUpPath: () => [host, prefix, "signup"].join("/"),
  mainPage: () => "/",
  favoritsPage: () => [host, "favorits"].join("/"),
  historyPage: () => [host, "history"].join("/"),
  searchResultsPage: () => [host, "results"].join("/"),
  loginPage: () => [host, "login"].join("/"),
  signUpPage: () => [host, "signup"].join("/"),
  singleMoviePage: () => [host, "movie", ":id"].join("/"),
  linkToImage: (posterPath: string | undefined) => [imageHost, "original", posterPath].join("/"),
  linkToBGImage: (posterPath: string | undefined) => [imageHost, "w1920_and_h800_multi_faces", posterPath].join("/"),
};
