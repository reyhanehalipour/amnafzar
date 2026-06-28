import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { updateUser } from "../api/users.api";
import { User } from "../types/user.types";

import { ApiError } from "@/app/shared/types/api-error";
import { getApiErrorMessage } from "@/app/shared/utils/get-api-error-message";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<
    User,
    AxiosError<ApiError>,
    {
      id: number;
      payload: Partial<User>;
    }
  >({
    mutationFn: ({ id, payload }) =>
      updateUser(id, payload),

    onSuccess: () => {
      toast.success("User updated");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      toast.error(
        getApiErrorMessage(error, "Update failed")
      );
    },
  });
};