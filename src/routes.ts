// @ts-check

const host: string = "";
const prefix: string = "api/v1";
const imageHost: string = "https://image.tmdb.org/t/p";

export default {
  loginPath: () => [host, prefix, "login"].join("/"),
  mainChatPage: () => "/",
  loginPage: () => [host, "login"].join("/"),
  signUpPage: () => [host, "signup"].join("/"),
  singleMoviePage: () => [host, "movie", ":id"].join("/"),
  linkToImage: (posterPath: string | undefined) => [imageHost, "original", posterPath].join("/"),
};
