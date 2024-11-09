import { useContext, useEffect, useState } from "react";
import { api } from "../path/to/your/api";
import { ModalContext } from "../providers/ContextProvider";

const useApi = (url) => {
  const { setApiResponse } = useContext(ModalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(url);
        setApiResponse(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [url, setApiResponse]);
};

export default useApi;
