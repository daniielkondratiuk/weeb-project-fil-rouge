import "./Logo.css";

export default function Logo({ variant = "dark", text = "Logo" }) {
  const className = variant === "light" ? "logo logo--light" : "logo logo--dark";

  return <span className={className}>{text}</span>;
}

