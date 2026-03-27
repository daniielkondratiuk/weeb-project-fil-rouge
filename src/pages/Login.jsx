import LoginForm from "../components/login/LoginForm.jsx";

import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <section className="login">
        <div className="login__card">
          <h1 className="login__title">Se connecter</h1>
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
