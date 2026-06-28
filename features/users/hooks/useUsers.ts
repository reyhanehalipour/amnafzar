import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/users.api";

export const useUsers = (page = 1, limit = 1000) => {
  return useQuery({
    queryKey: ["users", page, limit],
    queryFn: () => getUsers(page, limit),
  });
};

