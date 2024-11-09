export const tokenExpirationHandler = (error, router) => {
    console.log("token exp")
  console.log(error, router);
  if (
    error.response &&
    error.response.data.message === "Invalid or expired token"
  ) {
    console.log("Token expired, redirecting to login");
    router.push("/login");
  }
};

