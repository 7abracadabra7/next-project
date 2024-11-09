import axios from "axios";
// import { useRouter } from "next/router";
import Cookies from "js-cookie";
// import { tokenExpirationHandler } from "../utils/tokenExpirationHandler";

let onTokenInvalidGlobal;

const setOnTokenInvalid = (callback) => {
  onTokenInvalidGlobal = callback;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



const handleResponseError = (error, onTokenInvalid) => {
  console.log("API Error:", error);
  if (
    error.response &&
    error.response.data &&
    error.response.data.message === "Invalid or expired token"
  ) {
    console.log("YESSS");
    if (onTokenInvalidGlobal) {
      onTokenInvalidGlobal(); // Call the global callback
    }
  }
  return Promise.reject(error);
};

api.interceptors.response.use(
  (response) => {
    console.log("api response", response);
    return response;
  },
  (error) => {
    console.log(error);
    return handleResponseError(error);
    // return handleResponseError(error, onTokenInvalid);
    // tokenExpirationHandler(error, router);
    // return Promise.reject(error);
  }
);

api.interceptors.request.use((request) => {
  const token = Cookies.get("token");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export { api, handleResponseError };
