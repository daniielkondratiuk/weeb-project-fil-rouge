import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { featuredArticles } from "../../data/articles.js";
import "./ArticlesSlider.css";

export default function ArticlesSlider() {
  const [index, setIndex] = useState(0);

  function goPrevious() {
    setIndex((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  }

  function goNext() {
    setIndex((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
  }

  const current = featuredArticles[index];

  return (
    <div className="container">
      <section className="articlesSlider" aria-label="Derniers articles">
        <h2 className="articlesSlider__title">À la une cette semaine</h2>

        <div className="articlesSlider__slider">
          <button className="articlesSlider__arrow" type="button" onClick={goPrevious} aria-label="Article précédent">
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          <article className="articlesSlider__card">
            <p className="articlesSlider__category">{current.category}</p>
            <h3 className="articlesSlider__headline">{current.title}</h3>
            <p className="articlesSlider__excerpt">{current.excerpt}</p>

            <Link className="articlesSlider__link" to={`/blog/${current.id}`}>
              Lire l’article <span aria-hidden="true">→</span>
            </Link>
          </article>

          <button className="articlesSlider__arrow" type="button" onClick={goNext} aria-label="Article suivant">
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        </div>

        <div className="articlesSlider__dots">
          {featuredArticles.map((article, dotIndex) => (
            <button
              key={article.id}
              className={dotIndex === index ? "articlesSlider__dot articlesSlider__dot--active" : "articlesSlider__dot"}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Article ${dotIndex + 1}`}
              aria-pressed={dotIndex === index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
