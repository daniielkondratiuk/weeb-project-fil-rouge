import { useEffect, useState } from "react";

import { fetchArticles } from "../api/articles.js";
import { readLocalArticles } from "../api/localArticles.js";
import { featuredArticles } from "../data/articles.js";

export const categories = ["Développement", "Design", "SEO", "Accessibilité", "Outils"];

export function toExcerpt(text, limit = 120) {
  if (!text) {
    return "";
  }

  return text.length > limit ? `${text.slice(0, limit).trim()}...` : text;
}

export function toArticle(post) {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    excerpt: toExcerpt(post.body),
    category: categories[post.userId % categories.length],
  };
}

export function useArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setIsLoading(true);
      setError("");

      try {
        const data = await fetchArticles();

        if (!cancelled) {
          setArticles([...readLocalArticles(), ...featuredArticles, ...data.map(toArticle)]);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Impossible de charger les articles pour le moment.");
          setArticles([...readLocalArticles(), ...featuredArticles]);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { articles, isLoading, error };
}
