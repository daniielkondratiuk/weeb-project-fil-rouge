import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Field from "../ui/Field/Field.jsx";
import Button from "../ui/Button/Button.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import "./LoginForm.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Merci de renseigner votre email et votre mot de passe.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      await login(email.trim(), password);
      navigate("/blog");
    } catch (err) {
      setError(err.message);
      setPassword("");
    } finally {
      setIsSending(false);
    }
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

      <Button type="submit" variant="primary" className="loginForm__submit" disabled={isSending}>
        {isSending ? "Connexion..." : "Se connecter"}
      </Button>

      <Link className="loginForm__forgot" to="/password-reset">
        Mot de passe oublié ?
      </Link>

      <p className="loginForm__signup">
        Vous n’avez pas de compte ? Vous pouvez en{" "}
        <Link className="loginForm__signupLink" to="/signup">
          créer un
        </Link>
      </p>
    </form>
  );
}
