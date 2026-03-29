const STORAGE_KEY = "weeb-articles";

export function readLocalArticles() {
  const stored = localStorage.getItem(STORAGE_KEY);

  return stored ? JSON.parse(stored) : [];
}

export function saveLocalArticle(article) {
  const articles = readLocalArticles();

  localStorage.setItem(STORAGE_KEY, JSON.stringify([article, ...articles]));
}
