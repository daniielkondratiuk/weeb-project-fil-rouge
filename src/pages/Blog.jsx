import { useState } from "react";

import ArticleCard from "../components/blog/ArticleCard.jsx";
import { categories, useArticles } from "../hooks/useArticles.js";

import "./Blog.css";

export default function Blog() {
  const { articles, isLoading, error } = useArticles();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const visibleArticles = articles.filter((article) => {
    const matchesQuery = article.title.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory = !activeCategory || article.category === activeCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="container">
      <section className="blog">
        <div className="blog__text">
          <h1 className="blog__title">Le blog</h1>
          <p className="blog__lead">
            Retrouvez tous nos articles sur le développement, le design et les tendances du web. Un nouveau contenu chaque semaine.
          </p>
        </div>

        <div className="blog__filters">
          <input
            className="blog__search"
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article"
            aria-label="Rechercher un article"
          />

          <div className="blog__categories">
            <button
              className={activeCategory === "" ? "blog__category blog__category--active" : "blog__category"}
              type="button"
              onClick={() => setActiveCategory("")}
              aria-pressed={activeCategory === ""}
            >
              Toutes
            </button>

            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "blog__category blog__category--active" : "blog__category"}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <p className="blog__error" role="alert">
            {error}
          </p>
        )}

        {isLoading ? (
          <p className="blog__status">Chargement des articles...</p>
        ) : visibleArticles.length === 0 ? (
          <p className="blog__status">Aucun article ne correspond à votre recherche.</p>
        ) : (
          <div className="blog__grid">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
