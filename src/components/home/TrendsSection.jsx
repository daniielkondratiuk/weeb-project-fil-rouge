import "./TrendsSection.css";
import TrendsAnimation from "./TrendsAnimation.jsx";

export default function TrendsSection() {
  return (
    <div className="container">
      <section className="trendsSection" id="trends">
        <div className="trendsSection__grid">
          <div className="trendsSection__visual" aria-hidden="true">
            {/* <img className="trendsSection__image" src="/images/trends.png" alt="" loading="lazy" /> */}
            <TrendsAnimation />
          </div>

          <div className="trendsSection__text">
            <div className="trendsSection__top">
              <p className="trendsSection__kicker">Le web, un écosystème en constante évolution</p>
              <h2 className="trendsSection__title">
                Restez informé des dernières <span className="trendsSection__accent">tendances</span>
              </h2>
            </div>
            <p className="trendsSection__desc">
              Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus
              encore. Ne manquez aucune actualité du digital !
            </p>

            <a className="trendsSection__link" href="#trends">
              Lire les articles récents <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

