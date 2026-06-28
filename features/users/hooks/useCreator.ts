import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { createUser } from "../api/users.api";
import { User } from "../types/user.types";
import { UserFormValues } from "../schemas/user.schema";

import { ApiError } from "@/app/shared/types/api-error";
import { getApiErrorMessage } from "@/app/shared/utils/get-api-error-message";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<
    User,
    AxiosError<ApiError>,
    UserFormValues
  >({
    mutationFn: createUser,

    onSuccess: () => {
      toast.success("User created successfully");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      toast.error(
        getApiErrorMessage(error, "Failed to create user")
      );
    },
  });
};