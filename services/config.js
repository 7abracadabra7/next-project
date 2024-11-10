import axios from "axios";
import Cookies from "js-cookie";
import { handleResponseError } from "../utils/tokenExpirationHandler";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// const handleResponseError = (error) => {
//   console.log("API Error:", error);
//   if (
//     error.response &&
//     error.response.data &&
//     error.response.data.message === "Invalid or expired token"
//   ) {
//     Router.push("/login")
//   }
//   return Promise.reject(error);
// };

api.interceptors.response.use(
  (response) => {
    console.log("api response", response);
    return response;
  },
  (error) => {
    console.log(error);
    return handleResponseError(error);
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
