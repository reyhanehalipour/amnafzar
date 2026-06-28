import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { login } from "../api/auth.api";
import { LoginRequest, LoginResponse } from "../types/auth.types";

import { useAuthStore } from "@/store/auth.store";
import { ApiError } from "@/app/shared/types/api-error";
import { getApiErrorMessage } from "@/app/shared/utils/get-api-error-message";


export const useLogin = () => {
  const router = useRouter();

  const setAccessToken = useAuthStore(
    (state) => state.setAccessToken
  );

  return useMutation<
    LoginResponse,
    AxiosError<ApiError>,
    LoginRequest
  >({
    mutationFn: login,

    onSuccess: ({ access_token }) => {
      setAccessToken(access_token);

      toast.success("Login successful");

      router.replace("/users");
    },

    onError: (error) => {
      toast.error(getApiErrorMessage(error));
    },
  });
};