import { useState } from "react";
import { Link } from "react-router-dom";

import Field from "../components/ui/Field/Field.jsx";
import Button from "../components/ui/Button/Button.jsx";
import { requestPasswordReset } from "../api/auth.js";

import "./PasswordReset.css";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Merci de renseigner votre email.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      const data = await requestPasswordReset(email.trim());

      setMessage(data.message);
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="container">
      <section className="passwordReset">
        <div className="passwordReset__card">
          <h1 className="passwordReset__title">Mot de passe oublié</h1>
          <p className="passwordReset__lead">
            Indiquez l’adresse email de votre compte. Nous vous enverrons un lien permettant de choisir un nouveau mot de
            passe.
          </p>

          <form className="passwordReset__form" onSubmit={handleSubmit} noValidate>
            <Field
              id="email"
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
              <p className="passwordReset__error" role="alert">
                {error}
              </p>
            )}

            {message && <p className="passwordReset__success">{message}</p>}

            <Button type="submit" variant="primary" className="passwordReset__submit" disabled={isSending}>
              {isSending ? "Envoi..." : "Envoyer le lien"}
            </Button>

            <Link className="passwordReset__link" to="/login">
              Retour à la page de connexion
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}
