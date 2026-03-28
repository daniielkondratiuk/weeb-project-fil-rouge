const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchArticles() {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}

export async function fetchArticle(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}
