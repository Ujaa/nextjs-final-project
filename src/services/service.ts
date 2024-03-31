import { BASE_URL, LIST_PATH, LISTS_PATH } from "./api";

export async function getJson(path: string) {
  return (await getJsonOf(path)).json();
}

async function getJsonOf(path: string): Promise<Response> {
  return fetch(`${BASE_URL}/${path}`);
}
