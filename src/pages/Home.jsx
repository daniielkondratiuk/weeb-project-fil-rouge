import HeroSection from "../components/home/HeroSection.jsx";
import TrustSection from "../components/home/TrustSection.jsx";
import ResourcesSection from "../components/home/ResourcesSection.jsx";
import TrendsSection from "../components/home/TrendsSection.jsx";
import ArticlesSlider from "../components/home/ArticlesSlider.jsx";
import NewsletterSection from "../components/home/NewsletterSection.jsx";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <HeroSection />
      <TrustSection />
      <ResourcesSection />
      <TrendsSection />
      <ArticlesSlider />
      <NewsletterSection />
    </div>
  );
}
