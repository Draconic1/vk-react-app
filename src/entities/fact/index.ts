import { FactResponse } from "@shared/types";

export async function fetchFact(): Promise<FactResponse> {
  const response = await fetch("https://catfact.ninja/fact");
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
}
