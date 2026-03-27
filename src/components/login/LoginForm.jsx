import { useState } from "react";

import Field from "../ui/Field/Field.jsx";
import Button from "../ui/Button/Button.jsx";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Merci de renseigner votre email et votre mot de passe.");
      return;
    }

    setEmail("");
    setPassword("");
    setError("");
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit} noValidate>
      <Field id="email" name="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <div className="loginForm__password">
        <Field
          id="password"
          name="password"
          label="Password"
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="loginForm__toggle"
          type="button"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
          aria-pressed={isPasswordVisible}
          aria-label={isPasswordVisible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
        >
          {isPasswordVisible ? "Masquer" : "Afficher"}
        </button>
      </div>

      {error && (
        <p className="loginForm__error" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" variant="primary" className="loginForm__submit">
        Se connecter
      </Button>

      <a className="loginForm__forgot" href="#">
        Mot de passe oublié ?
      </a>

      <p className="loginForm__signup">
        Vous n’avez pas de compte ? Vous pouvez en{" "}
        <a className="loginForm__signupLink" href="#">
          créer un
        </a>
      </p>
    </form>
  );
}
