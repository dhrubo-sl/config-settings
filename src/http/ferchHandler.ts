/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IResponse {
  success: boolean;
  statusCode: number;
  data?: any;
  message?: string;
}

export type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, any> | null;
  headers?: HeadersInit;
};

export const BASE_URL = "http://localhost:3000/api";

export async function fetchData(
  url: string,
  options: FetchOptions = {}
): Promise<IResponse> {
  const {
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" },
  } = options;

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const res = (await response.json()) as IResponse;
    return res;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}
