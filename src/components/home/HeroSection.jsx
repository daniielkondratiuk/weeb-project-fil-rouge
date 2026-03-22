import Button from "../ui/Button/Button.jsx";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="container">
      <section className="heroSection">
        <div className="heroSection__inner">
          <div className="heroSection__text">
            <h1 className="heroSection__title">
              Explorez le <span className="heroSection__titleAccent">Web</span> sous toutes
              <br />
              ses <span className="heroSection__titleUnderline">facettes</span>
            </h1>

            <p className="heroSection__lead">
              Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures
              pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester
              à la pointe.
            </p>

            <div className="heroSection__buttons">
              <Button href="#trends" variant="primary" className="heroSection__btn heroSection__btn--primary">
                Découvrir les articles
              </Button>
              <Button
                href="#newsletter"
                variant="secondary"
                className="heroSection__btn heroSection__btn--secondary"
              >
                S'abonner à la newsletter
              </Button>
            </div>
          </div>

          <img className="heroSection__image" src="/images/hero.png" alt="" loading="eager" />
        </div>
      </section>
    </div>
  );
}

