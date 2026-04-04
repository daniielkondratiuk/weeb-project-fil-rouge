import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 600);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  if (!isVisible) {
    return null;
  }

  return (
    <button className="scrollToTop" type="button" onClick={handleClick} aria-label="Revenir en haut de la page">
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}
