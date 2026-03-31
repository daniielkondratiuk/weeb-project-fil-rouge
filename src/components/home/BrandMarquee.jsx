import "./BrandMarquee.css";

export default function BrandMarquee({ logos }) {
  return (
    <div className="brandMarquee">
      <ul className="brandMarquee__track" aria-label="Partners">
        {[...logos, ...logos].map((logo, index) => (
          <li key={`${logo.name}-${index}`} className="brandMarquee__item" aria-hidden={index >= logos.length}>
            <img className="brandMarquee__logo" src={logo.src} alt={logo.name} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
}
