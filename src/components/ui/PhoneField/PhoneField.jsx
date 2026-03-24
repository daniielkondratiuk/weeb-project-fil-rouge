import "./PhoneField.css";

export default function PhoneField({ code, number, onCodeChange, onNumberChange }) {
  return (
    <div className="phoneField">
      <input
        className="phoneField__code"
        id="phone-code"
        name="phoneCode"
        type="text"
        value={code}
        onChange={onCodeChange}
        maxLength={4}
        placeholder="+33"
        aria-label="Indicatif téléphonique"
      />

      <input
        className="phoneField__number"
        id="phone-number"
        name="phoneNumber"
        type="tel"
        value={number}
        onChange={onNumberChange}
        placeholder="6 12 34 56 78"
        aria-label="Numéro de téléphone"
      />
    </div>
  );
}
