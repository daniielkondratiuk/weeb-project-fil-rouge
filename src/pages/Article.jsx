import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import RelatedArticles from "../components/blog/RelatedArticles.jsx";
import { deleteArticle, fetchArticle } from "../api/articles.js";
import { useAuth } from "../context/AuthContext.jsx";

import "./Article.css";

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
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
          setArticle(data);
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

  async function handleDelete() {
    if (!window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      return;
    }

    try {
      await deleteArticle(article.id);
      navigate("/blog");
    } catch (err) {
      setError(err.message);
    }
  }

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

  const isOwner = user !== null && user.id === article.author;

  return (
    <div className="container">
      <article className="article">
        <Link className="article__back" to="/blog">
          <span aria-hidden="true">←</span> Retour au blog
        </Link>

        <p className="article__category">{article.category}</p>
        <h1 className="article__title">{article.title}</h1>

        {isOwner && (
          <div className="article__owner">
            <Link className="article__action" to={`/blog/${article.id}/edit`}>
              Modifier
            </Link>
            <button className="article__action article__action--danger" type="button" onClick={handleDelete}>
              Supprimer
            </button>
          </div>
        )}

        <div className="article__body">
          {article.content.split("\n").map((paragraph) => (
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
