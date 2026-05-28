import { api } from "@api/axiosInstance";

export interface UserResponse {
  name: string;
  lastName: string;
  birthDay: string;
}

export async function fetchUser(): Promise<UserResponse> {
  const response = await api.get<UserResponse>("/user.json");
  return response.data;
}
