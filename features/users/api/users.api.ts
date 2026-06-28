

import { User, UserList } from "../types/user.types";
import { UserFormValues } from "../schemas/user.schema";
import { api } from "@/app/shared/api/axios";

export const getUsers = async (
  page = 1,
  limit = 10
): Promise<UserList> => {
  const { data } = await api.get("/users", {
    params: { page, limit },
  });

  return data;
};

export const createUser = async (
  payload: UserFormValues
): Promise<User> => {
  const { data } = await api.post("/users", payload);

  return data;
};

export const updateUser = async (
  id: number,
  payload: Partial<User>
): Promise<User> => {

  console.log("PATCH CALLED", id, payload);

  const { data } = await api.patch(
    `/users/${id}`,
    payload
  );

  return data;
};

export const deleteUser = async (
  id: number
) => {
  const { data } = await api.delete(
    `/users/${id}`
  );

  return data;
};