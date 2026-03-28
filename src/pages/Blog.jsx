import ArticleCard from "../components/blog/ArticleCard.jsx";
import { useArticles } from "../hooks/useArticles.js";

import "./Blog.css";

export default function Blog() {
  const { articles, error } = useArticles();

  return (
    <div className="container">
      <section className="blog">
        <div className="blog__text">
          <h1 className="blog__title">Le blog</h1>
          <p className="blog__lead">
            Retrouvez tous nos articles sur le développement, le design et les tendances du web. Un nouveau contenu chaque semaine.
          </p>
        </div>

        {error && (
          <p className="blog__error" role="alert">
            {error}
          </p>
        )}

        <div className="blog__grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
