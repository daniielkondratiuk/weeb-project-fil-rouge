import { request } from "./client.js";

export function signup(account) {
  return request("/auth/signup/", { method: "POST", body: JSON.stringify(account) });
}

export function login(email, password) {
  return request("/auth/login/", { method: "POST", body: JSON.stringify({ email, password }) });
}

export function fetchProfile() {
  return request("/me/");
}

export function requestPasswordReset(email) {
  return request("/auth/password-reset/", { method: "POST", body: JSON.stringify({ email }) });
}

export function confirmPasswordReset(payload) {
  return request("/auth/password-reset/confirm/", { method: "POST", body: JSON.stringify(payload) });
}
