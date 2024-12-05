/* eslint-disable @typescript-eslint/no-explicit-any */
// api/endpoints.ts
import { BASE_URL, fetchData, IResponse } from "../ferchHandler";

// GET /user - Fetch user details
export async function getAllProducts(): Promise<IResponse> {
  return await fetchData(`${BASE_URL}/products`, { method: "GET" });
}

export async function createProduct(
  data: Record<string, any>
): Promise<IResponse> {
  return await fetchData(`${BASE_URL}/products`, {
    method: "POST",
    body: data,
  });
}

export async function getProducts(): Promise<any> {
  return await fetchData(`${BASE_URL}/products`);
}

// // PUT /update - Update user information
// export async function updateUser<T>(data: Record<string, any>): Promise<T> {
//   return fetchData<T>(`${BASE_URL}/update`, {
//     method: "PUT",
//     body: data,
//   });
// }

// // DELETE /delete/:id - Delete a user by ID
// export async function deleteUser<T>(id: string): Promise<T> {
//   return fetchData<T>(`${BASE_URL}/delete/${id}`, { method: "DELETE" });
// }
