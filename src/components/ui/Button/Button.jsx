import { Link } from "react-router-dom";

import "./Button.css";

export default function Button({
  children,
  type = "button",
  onClick,
  to,
  href,
  variant = "primary",
  className = "",
  ...rest
}) {
  const baseClass = "btn";
  const variantClass = variant === "secondary" ? "btn--secondary" : "btn--primary";
  const classes = [baseClass, variantClass, className].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

