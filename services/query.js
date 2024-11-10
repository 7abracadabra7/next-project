import { useQuery } from "@tanstack/react-query";
import { api } from "./config";


const useFetchProducts = (page, name) => {
  let queryKey = null;
  if (page) {
    queryKey = ["products", page];
  }
  if (name) {
    queryKey = ["products", name];
  }
  const queryFn = async () => {
    const response = await api.get(
      `products?page=${page}&limit=10&name=${name}`
    );
    return response.data;
  };




  return useQuery({ queryKey, queryFn });
};

export { useFetchProducts };
