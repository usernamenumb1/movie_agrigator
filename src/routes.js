// @ts-check

const host = "";
const prefix = "api/v1";

export default {
  loginPath: () => [host, prefix, "login"].join("/"),
  mainChatPage: () => "/",
  loginPage: () => [host, "login"].join("/"),
  signUpPage: () => [host, "signup"].join("/"),
};
