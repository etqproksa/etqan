import Header from "./components/Header";
import Hero from "./components/Hero";

import FeaturedProjects from "./components/FeaturedProjects";
import Services from "./components/Services";

import Solutions from "./components/Solutions";


import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

import Etservices from "./components/Etservices";
import ServicesSummary from "./components/ServicesSummary";
import Videocomp from "./components/Videocomp";

export default function Home() {
  return (
    <main className="page-wrapper">
      <Header />
      <Hero />
      <ServicesSummary />
      <FeaturedProjects />
      <Services />
      <Etservices />
      <Videocomp/>
      <Solutions />
      <BlogSection />
      <Footer />
    </main>
  );
}
