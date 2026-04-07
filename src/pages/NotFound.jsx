import Button from "../components/ui/Button/Button.jsx";

import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="container">
      <section className="notFound">
        <p className="notFound__code">404</p>
        <h1 className="notFound__title">Cette page a disparu du web</h1>
        <p className="notFound__lead">
          Le lien est peut-être erroné, ou la page a été déplacée. Vous pouvez revenir à l’accueil ou parcourir les derniers articles.
        </p>

        <div className="notFound__actions">
          <Button to="/" variant="primary" className="notFound__btn notFound__btn--primary">
            Retour à l’accueil
          </Button>
          <Button to="/blog" variant="secondary" className="notFound__btn">
            Voir le blog
          </Button>
        </div>
      </section>
    </div>
  );
}
