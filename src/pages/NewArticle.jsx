import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button/Button.jsx";
import { categories } from "../hooks/useArticles.js";

import "./NewArticle.css";

export default function NewArticle() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      setError("Merci de renseigner un titre et un contenu.");
      return;
    }

    setTitle("");
    setBody("");
    setError("");
    navigate("/blog");
  }

  return (
    <div className="container">
      <section className="newArticle">
        <h1 className="newArticle__title">Écrire un article</h1>
        <p className="newArticle__lead">Partagez une actualité, un tutoriel ou un retour d’expérience avec la communauté Weeb.</p>

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
              placeholder="Les nouveautés CSS à connaître en 2026"
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
            <label className="newArticle__label" htmlFor="article-body">
              Contenu
            </label>
            <textarea
              className="newArticle__textarea"
              id="article-body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              placeholder="Rédigez votre article ici..."
            />
          </div>

          {error && (
            <p className="newArticle__error" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" variant="primary" className="newArticle__submit">
            Publier l’article
          </Button>
        </form>
      </section>
    </div>
  );
}
