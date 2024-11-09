import axios from "axios";
import { useRouter } from "next/router";
// import { getCookie } from "../utils/cookie";
import Cookies from "js-cookie"
import { tokenExpirationHandler } from "../utils/tokenExpirationHandler";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    console.log("api response", response);
    return response;
  },
  (error) => {
    console.log(error);
    tokenExpirationHandler(error, router);
    return Promise.reject(error);
  }
);

api.interceptors.request.use((request) => {
  const token = Cookies.get("token");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export { api };
