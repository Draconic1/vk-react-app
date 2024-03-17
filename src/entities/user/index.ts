import { UserResponse } from "@shared/types";

export async function fetchUser(
  name: string,
  signal: AbortSignal
): Promise<UserResponse> {
  const response = await fetch(`https://api.agify.io/?name=${name}`, {
    signal,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
