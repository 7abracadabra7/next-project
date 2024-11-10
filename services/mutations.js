import { api } from "./config";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const useRegister = () => {
  const mutationFn = (info) => {
    return api.post("auth/register", info);
  };
  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (info) => {
    console.log(api);
    return api.post("auth/login", info);
  };
  return useMutation({ mutationFn });
};

const useProduct = () => {
  const queryClient = useQueryClient();
  const mutationFn = (info) => {
    return api.post("products", info);
  };
  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.delete("products", data);

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useEditProduct = () => {
  const queryClient = useQueryClient();
  const mutationFn = async (data) => await api.put(`products/${data.id}`, data);

  const onSuccess = async () =>
    await queryClient.invalidateQueries({ queryKey: ["products"] });

  return useMutation({ mutationFn, onSuccess });
};

export { useRegister, useLogin, useProduct, useDeleteProduct, useEditProduct };
