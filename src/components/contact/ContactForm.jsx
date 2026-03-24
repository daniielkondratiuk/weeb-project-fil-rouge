import { useState } from "react";

import Field from "../ui/Field/Field.jsx";
import PhoneField from "../ui/PhoneField/PhoneField.jsx";
import Button from "../ui/Button/Button.jsx";
import "./ContactForm.css";

export default function ContactForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [code, setCode] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!nom.trim() || !prenom.trim() || !email.trim() || !message.trim()) {
      setIsSent(false);
      setError("Merci de renseigner votre nom, votre prénom, votre email et votre message.");
      return;
    }

    setNom("");
    setPrenom("");
    setCode("");
    setNumero("");
    setEmail("");
    setMessage("");
    setError("");
    setIsSent(true);
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate>
      <div className="contactForm__grid">
        <Field id="nom" name="nom" label="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
        <Field id="prenom" name="prenom" label="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        <PhoneField
          code={code}
          number={numero}
          onCodeChange={(e) => setCode(e.target.value)}
          onNumberChange={(e) => setNumero(e.target.value)}
        />
        <Field id="email" name="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <Field id="message" name="message" label="Message" multiline value={message} onChange={(e) => setMessage(e.target.value)} />

      {error && (
        <p className="contactForm__error" role="alert">
          {error}
        </p>
      )}

      {isSent && <p className="contactForm__success">Merci ! Votre message a bien été envoyé.</p>}

      <Button type="submit" variant="primary" className="contactForm__submit">
        Contact
      </Button>
    </form>
  );
}
