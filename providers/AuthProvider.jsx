// import { useRouter } from "next/router";
// import { getCookie } from "../utils/cookie";

// // eslint-disable-next-line
// function AuthProvider({ children }) {
//   const router = useRouter();
//   const token = getCookie("token");
//   if (!token) return router.push("/login");

//   return children;
// }

// export default AuthProvider;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { getCookie } from "../utils/cookie";
import Cookies from "js-cookie";

function AuthProvider({ children }) {
  const router = useRouter();
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    else {
      
    }
  }, [token]);

  return children;
}

export default AuthProvider;
