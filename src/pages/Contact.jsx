import ContactForm from "../components/contact/ContactForm.jsx";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="container">
      <section className="contact">
        <div className="contact__text">
          <h1 className="contact__title">Votre avis compte !</h1>
          <p className="contact__lead">
            Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez et ce que nous pourrions
            améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours plus utile et enrichissante.
          </p>
        </div>

        <div className="contact__panel">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
