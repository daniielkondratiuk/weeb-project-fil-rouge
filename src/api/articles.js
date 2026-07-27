import { request } from "./client.js";

export function fetchArticles(category) {
  const query = category ? `?category=${encodeURIComponent(category)}` : "";

  return request(`/articles/${query}`);
}

export function fetchArticle(id) {
  return request(`/articles/${id}/`);
}

export function createArticle(article) {
  return request("/articles/", { method: "POST", body: JSON.stringify(article) });
}

export function updateArticle(id, article) {
  return request(`/articles/${id}/`, { method: "PUT", body: JSON.stringify(article) });
}

export function deleteArticle(id) {
  return request(`/articles/${id}/`, { method: "DELETE" });
}
