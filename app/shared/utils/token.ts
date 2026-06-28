import { useAuthStore } from "@/store/auth.store";

export const getAccessToken = () =>
  useAuthStore.getState().accessToken;