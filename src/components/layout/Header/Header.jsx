import { NavLink } from "react-router-dom";
import { useMemo, useState } from "react";

import Logo from "../../Logo/Logo.jsx";
import Button from "../../ui/Button/Button.jsx";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClassName = useMemo(
    () => (isActive) => (isActive ? "header__link header__link--active" : "header__link"),
    []
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__surface">
          <div className="header__row">
            <div className="header__left">
              <NavLink className="header__brand" to="/" aria-label="Home">
                <Logo variant="light" text="weeb" />
              </NavLink>

              <nav className="header__nav" aria-label="Main navigation">
                <NavLink className={({ isActive }) => navClassName(isActive)} to="/">
                  About Us
                </NavLink>
                <NavLink className={({ isActive }) => navClassName(isActive)} to="/blog">
                  Blog
                </NavLink>
                <NavLink className={({ isActive }) => navClassName(isActive)} to="/contact">
                  Contact
                </NavLink>
              </nav>
            </div>

            <div className="header__actions">
              <NavLink className="header__loginBtn" to="/login">
                Log In
              </NavLink>
              <Button to="/login" variant="primary" className="header__cta">
                Join Now
              </Button>

              <button
                className={isMenuOpen ? "header__burger header__burger--open" : "header__burger"}
                type="button"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="header-mobile-nav"
              >
                <span className="header__burgerIcon" aria-hidden="true">
                  <span className="header__burgerBar" />
                  <span className="header__burgerBar" />
                  <span className="header__burgerBar" />
                </span>
              </button>
            </div>
          </div>

          {isMenuOpen ? (
            <div className="header__mobile" id="header-mobile-nav">
              <NavLink
                className={({ isActive }) => navClassName(isActive)}
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) => navClassName(isActive)}
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) => navClassName(isActive)}
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink className="header__loginBtn" to="/login" onClick={() => setIsMenuOpen(false)}>
                Log In
              </NavLink>
              <Button to="/login" variant="primary" className="header__cta" onClick={() => setIsMenuOpen(false)}>
                Join Now
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

