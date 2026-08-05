import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/ui/Button/Button.jsx";
import { fetchArticle, updateArticle } from "../api/articles.js";
import { categories } from "../hooks/useArticles.js";

import "./NewArticle.css";

export default function EditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const article = await fetchArticle(id);

        if (!cancelled) {
          setTitle(article.title);
          setCategory(article.category);
          setContent(article.content);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Impossible de charger cet article.");
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

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Merci de renseigner un titre et un contenu.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      await updateArticle(id, { title: title.trim(), content: content.trim(), category });
      navigate(`/blog/${id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSending(false);
    }
  }

  if (isLoading) {
    return (
      <div className="container">
        <p className="newArticle__lead">Chargement de l’article...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="newArticle">
        <h1 className="newArticle__title">Modifier l’article</h1>
        <p className="newArticle__lead">Corrigez le titre, la catégorie ou le contenu, puis enregistrez vos changements.</p>

        <form className="newArticle__form" onSubmit={handleSubmit} noValidate>
          <div className="newArticle__group">
            <label className="newArticle__label" htmlFor="article-title">
              Titre
            </label>
            <input
              className="newArticle__input"
              id="article-title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="newArticle__group">
            <label className="newArticle__label" htmlFor="article-category">
              Catégorie
            </label>
            <select
              className="newArticle__select"
              id="article-category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="newArticle__group">
            <label className="newArticle__label" htmlFor="article-content">
              Contenu
            </label>
            <textarea
              className="newArticle__textarea"
              id="article-content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
            />
          </div>

          {error && (
            <p className="newArticle__error" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" variant="primary" className="newArticle__submit" disabled={isSending}>
            {isSending ? "Enregistrement..." : "Enregistrer les modifications"}
          </Button>
        </form>
      </section>
    </div>
  );
}
