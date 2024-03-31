import { BASE_URL, LIST_PATH, LISTS_PATH } from "./api";

export async function getBestSellers(path: string) {
  return (await getJsonOf(path)).json();
}

export async function getBooks(listName: string) {
  return (await getJsonOf(`${LIST_PATH}?name=${listName}`)).json();
}

async function getJsonOf(path: string): Promise<Response> {
  return fetch(`${BASE_URL}/${path}`);
}
