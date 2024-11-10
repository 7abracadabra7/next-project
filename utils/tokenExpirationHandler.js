import Router from "next/router";

export const handleResponseError = (error) => {
  console.log("API Error:", error);
  if (
    error.response &&
    error.response.data &&
    error.response.data.message === "Invalid or expired token"
  ) {
    Router.push("/login");
  }
  return Promise.reject(error);
};
