import "./Field.css";

export default function Field({ id, name, label, type = "text", value, onChange, multiline = false }) {
  return (
    <div className="field">
      {multiline ? (
        <textarea
          className="field__input field__input--multiline"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          rows={2}
        />
      ) : (
        <input
          className="field__input"
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
        />
      )}

      <label className="field__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
