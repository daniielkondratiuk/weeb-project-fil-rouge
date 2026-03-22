import "./ResourcesSection.css";

export default function ResourcesSection() {
  return (
    <div className="container">
      <section className="resourcesSection" id="resources">
        <div className="resourcesSection__grid">
          <div className="resourcesSection__text">
            <div className="resourcesSection__top">
              <p className="resourcesSection__kicker">Des ressources pour tous les niveaux</p>
              <h2 className="resourcesSection__title">
                <span className="resourcesSection__titleAccent">Apprenez </span>
                <span className="resourcesSection__titleWhite">et</span>
                <span className="resourcesSection__titleAccent"> progressez</span>
              </h2>
            </div>
            <p className="resourcesSection__desc">
              Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous
              proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement.
            </p>

            <a className="resourcesSection__link" href="#resources">
              <span className="resourcesSection__linkText">Explorer les ressources</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="resourcesSection__visual" aria-hidden="true">
            <img className="resourcesSection__image" src="/images/learn.png" alt="" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}

