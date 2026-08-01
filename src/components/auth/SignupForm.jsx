import { useState } from "react";
import { Link } from "react-router-dom";

import Field from "../ui/Field/Field.jsx";
import Button from "../ui/Button/Button.jsx";
import { signup } from "../../api/auth.js";
import "./SignupForm.css";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      setError("Merci de renseigner votre prénom, votre nom, votre email et votre mot de passe.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      await signup({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        password,
        password_confirm: passwordConfirm,
      });

      setIsSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSending(false);
    }
  }

  if (isSent) {
    return (
      <div className="signupForm__done">
        <p className="signupForm__success">
          Votre compte a bien été créé. Il doit maintenant être validé par un administrateur avant que vous puissiez
          publier des articles.
        </p>

        <Link className="signupForm__link" to="/login">
          Retour à la page de connexion
        </Link>
      </div>
    );
  }

  return (
    <form className="signupForm" onSubmit={handleSubmit} noValidate>
      <Field
        id="prenom"
        name="first_name"
        label="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Field id="nom" name="last_name" label="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <Field id="email" name="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
        <p className="signupForm__error" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" variant="primary" className="signupForm__submit" disabled={isSending}>
        {isSending ? "Création..." : "Créer mon compte"}
      </Button>

      <p className="signupForm__login">
        Vous avez déjà un compte ?{" "}
        <Link className="signupForm__link" to="/login">
          Se connecter
        </Link>
      </p>
    </form>
  );
}
