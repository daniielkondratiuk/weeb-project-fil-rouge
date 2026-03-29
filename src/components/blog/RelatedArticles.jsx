import ArticleCard from "./ArticleCard.jsx";
import { useArticles } from "../../hooks/useArticles.js";

import "./RelatedArticles.css";

export default function RelatedArticles({ category, currentId }) {
  const { articles } = useArticles();

  const related = articles.filter((article) => article.category === category && article.id !== currentId).slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="relatedArticles">
      <h2 className="relatedArticles__title">Dans la même catégorie</h2>

      <div className="relatedArticles__grid">
        {related.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
