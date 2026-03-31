import BrandMarquee from "./BrandMarquee.jsx";
import "./TrustSection.css";

const logos = [
  { name: "SmartFinder", src: "/brands/smart-finder.png" },
  { name: "Zoomerr", src: "/brands/zoomerr.png" },
  { name: "Shells", src: "/brands/shells.png" },
  { name: "Waves", src: "/brands/waves.png" },
  { name: "ArtVenue", src: "/brands/artvenue.png" },
];

export default function TrustSection() {
  return (
    <div className="container">
      <section className="trustSection" aria-label="Trust">
        <div className="trustSection__inner">
          <h2 className="trustSection__title">Ils nous font confiance</h2>

          <div className="trustSection__panel">
            <BrandMarquee logos={logos} />
          </div>
        </div>
      </section>
    </div>
  );
}

