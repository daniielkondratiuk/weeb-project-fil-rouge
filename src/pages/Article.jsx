import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import RelatedArticles from "../components/blog/RelatedArticles.jsx";
import { fetchArticle } from "../api/articles.js";
import { toArticle } from "../hooks/useArticles.js";

import "./Article.css";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setIsLoading(true);
      setError("");

      try {
        const data = await fetchArticle(id);

        if (!cancelled) {
          setArticle(toArticle(data));
        }
      } catch (err) {
        if (!cancelled) {
          setError("Impossible de charger cet article.");
          setArticle(null);
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
  }, [id]);

  if (isLoading) {
    return (
      <div className="container">
        <p className="article__status">Chargement de l’article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container">
        <p className="article__status" role="alert">
          {error || "Cet article n’existe pas."}
        </p>
        <p className="article__status">
          <Link className="article__back" to="/blog">
            Retour au blog
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <article className="article">
        <Link className="article__back" to="/blog">
          <span aria-hidden="true">←</span> Retour au blog
        </Link>

        <p className="article__category">{article.category}</p>
        <h1 className="article__title">{article.title}</h1>

        <div className="article__body">
          {article.body.split("\n").map((paragraph) => (
            <p key={paragraph} className="article__paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <RelatedArticles category={article.category} currentId={article.id} />
      </article>
    </div>
  );
}
