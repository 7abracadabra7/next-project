import axios from "axios";
import { getCookie } from "../utils/cookie";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    // console.log("api response", response);

    return response;
  }
  // (error) => Promise.reject(error)
);

api.interceptors.request.use((request) => {
  const token = getCookie("token");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  // console.log("api request", request);
  return request;
});

export { api };
