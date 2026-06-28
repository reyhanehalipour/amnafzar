
import { api } from "@/app/shared/api/axios";
import {
  LoginRequest,
  LoginResponse,
} from "../types/auth.types";
import { API_ENDPOINTS } from "@/app/shared/api/endpoints";

export const login = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>(
    API_ENDPOINTS.LOGIN,
    payload
  );

  return data;
};