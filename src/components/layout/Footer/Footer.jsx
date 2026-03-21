import { Link } from "react-router-dom";

import Logo from "../../Logo/Logo.jsx";
import "./Footer.css";

const columns = [
  {
    title: "Product",
    links: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
  },
  {
    title: "Solutions",
    links: ["Brainstorming", "Ideation", "Wireframing", "Research"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Blog", "Tutorials"],
  },
  {
    title: "Company",
    links: ["About", "Press", "Events", "Careers"],
  },
];

const socials = [
  { label: "YouTube", href: "#", src: "/icons/youtube.png" },
  { label: "Facebook", href: "#", src: "/icons/fb.png" },
  { label: "Twitter", href: "#", src: "/icons/twiter.png" },
  { label: "Instagram", href: "#", src: "/icons/inst.png" },
  { label: "LinkedIn", href: "#", src: "/icons/linkedin.png" },
];

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="siteFooter__top">
          <Link className="siteFooter__brand" to="/" aria-label="Home">
            <Logo variant="dark" text="weeb" />
          </Link>

          <div className="siteFooter__columns" aria-label="Footer links">
            {columns.map((col) => (
              <div key={col.title} className="siteFooter__col">
                <h3 className="siteFooter__title">{col.title}</h3>
                <ul className="siteFooter__list">
                  {col.links.map((label) => (
                    <li key={label} className="siteFooter__item">
                      <Link className="siteFooter__link" to="/">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="siteFooter__bottom">
          <small className="siteFooter__copyright">© 2025 Weeb, Inc. All rights reserved.</small>

          <div className="siteFooter__social" aria-label="Social links">
            {socials.map(({ label, href, src }) => (
              <a key={label} className="siteFooter__socialLink" href={href} aria-label={label}>
                <img className="siteFooter__socialIcon" src={src} alt="" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

