import { Link } from "react-router-dom";

import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  return (
    <article className="articleCard">
      <p className="articleCard__category">{article.category}</p>

      <h3 className="articleCard__title">
        <Link className="articleCard__link" to={`/blog/${article.id}`}>
          {article.title}
        </Link>
      </h3>

      <p className="articleCard__excerpt">{article.excerpt}</p>

      <Link className="articleCard__more" to={`/blog/${article.id}`}>
        Lire l’article <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
