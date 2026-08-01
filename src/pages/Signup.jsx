import SignupForm from "../components/auth/SignupForm.jsx";

import "./Signup.css";

export default function Signup() {
  return (
    <div className="container">
      <section className="signup">
        <div className="signup__card">
          <h1 className="signup__title">Créer un compte</h1>
          <SignupForm />
        </div>
      </section>
    </div>
  );
}
