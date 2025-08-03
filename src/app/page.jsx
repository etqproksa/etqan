import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import FeaturedProjects from "./components/FeaturedProjects";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Solutions from "./components/Solutions";
import CreativeAtmosphere from "./components/CreativeAtmosphere";
import Awards from "./components/Awards";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Etservices from "./components/Etservices";
import ServicesSummary from "./components/ServicesSummary";

export default function Home() {
  return (
    <main className="page-wrapper">
      <Header />
      <Hero />
      <ServicesSummary />
      <FeaturedProjects />
      <Services />
      <Etservices />
      <Solutions />
      <BlogSection />
      <Footer />
    </main>
  );
}
