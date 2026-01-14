import type { Request } from "../types/Request";

const BASE_URL = "http://localhost:8000";

export async function createRequest(numbers: number[]): Promise<void> {
  await fetch(`${BASE_URL}/requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(numbers),
  });
}

export async function getRequests(): Promise<Request[]> {
  const response = await fetch(`${BASE_URL}/requests`);
  return response.json();
}

export async function getRequestById(id: string): Promise<Request> {
  const response = await fetch(`${BASE_URL}/requests/${id}`);
  return response.json();
}
