import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { deleteUser } from "../api/users.api";

import { ApiError } from "@/app/shared/types/api-error";
import { getApiErrorMessage } from "@/app/shared/utils/get-api-error-message";
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    AxiosError<ApiError>,
    number
  >({
    mutationFn: deleteUser,

    onSuccess: () => {
      toast.success("User deleted");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      toast.error(
        getApiErrorMessage(error, "Delete failed")
      );
    },
  });
};