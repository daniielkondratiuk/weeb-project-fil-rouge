import { useEffect, useState } from "react";

import { fetchArticles } from "../api/articles.js";

export const categories = ["Développement", "Design", "SEO", "Accessibilité", "Outils"];

export function useArticles(category) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setIsLoading(true);
      setError("");

      try {
        const data = await fetchArticles(category);

        if (!cancelled) {
          setArticles(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Impossible de charger les articles pour le moment.");
          setArticles([]);
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
  }, [category]);

  return { articles, isLoading, error };
}
