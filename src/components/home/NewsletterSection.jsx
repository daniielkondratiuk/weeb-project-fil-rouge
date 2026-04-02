import { useState } from "react";

import Button from "../ui/Button/Button.jsx";
import "./NewsletterSection.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Merci de renseigner votre adresse email.");
      return;
    }

    setEmail("");
    setMessage("Merci ! Vous êtes bien inscrit à la newsletter.");
  }

  return (
    <div className="container">
      <section className="newsletterSection" id="newsletter">
        <div className="newsletterSection__panel">
          <h2 className="newsletterSection__title">Un article par semaine, pas un de plus</h2>
          <p className="newsletterSection__lead">
            Recevez chaque lundi notre sélection d’articles sur le développement, le design et les tendances du web.
          </p>

          <form className="newsletterSection__form" onSubmit={handleSubmit} noValidate>
            <label className="newsletterSection__label" htmlFor="newsletter-email">
              Votre adresse email
            </label>

            <div className="newsletterSection__row">
              <input
                className="newsletterSection__input"
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom@exemple.fr"
              />

              <Button type="submit" variant="primary" className="newsletterSection__submit">
                S’abonner
              </Button>
            </div>
          </form>

          {message && <p className="newsletterSection__message">{message}</p>}
        </div>
      </section>
    </div>
  );
}
