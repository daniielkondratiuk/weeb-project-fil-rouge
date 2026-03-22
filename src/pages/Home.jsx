import HeroSection from "../components/home/HeroSection.jsx";
import TrustSection from "../components/home/TrustSection.jsx";
import ResourcesSection from "../components/home/ResourcesSection.jsx";
import TrendsSection from "../components/home/TrendsSection.jsx";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <HeroSection />
      <TrustSection />
      <ResourcesSection />
      <TrendsSection />
    </div>
  );
}

