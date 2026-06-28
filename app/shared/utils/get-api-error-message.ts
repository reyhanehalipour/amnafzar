import { AxiosError } from "axios";
import { ApiError } from "../types/api-error";


export function getApiErrorMessage(
  error: AxiosError<ApiError>,
  fallback = "Something went wrong"
) {
  return error.response?.data?.detail ?? fallback;
}