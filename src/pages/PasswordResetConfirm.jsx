import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Field from "../components/ui/Field/Field.jsx";
import Button from "../components/ui/Button/Button.jsx";
import { confirmPasswordReset } from "../api/auth.js";

import "./PasswordReset.css";

export default function PasswordResetConfirm() {
  const { userId, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError("Les deux mots de passe ne correspondent pas.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      await confirmPasswordReset({ user_id: Number(userId), token, password });
      navigate("/login");
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
          <h1 className="passwordReset__title">Nouveau mot de passe</h1>
          <p className="passwordReset__lead">Choisissez un mot de passe d’au moins huit caractères.</p>

          <form className="passwordReset__form" onSubmit={handleSubmit} noValidate>
            <Field
              id="password"
              name="password"
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Field
              id="password-confirm"
              name="password_confirm"
              label="Confirmer le mot de passe"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            {error && (
              <p className="passwordReset__error" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" variant="primary" className="passwordReset__submit" disabled={isSending}>
              {isSending ? "Enregistrement..." : "Enregistrer"}
            </Button>

            <Link className="passwordReset__link" to="/password-reset">
              Demander un nouveau lien
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}
