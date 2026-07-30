import { request } from "./client.js";

export function sendContactMessage(message) {
  return request("/contact/", { method: "POST", body: JSON.stringify(message) });
}
