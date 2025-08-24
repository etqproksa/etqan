import Header from "./components/Header";
import Hero from "./components/Hero";

import FeaturedProjects from "./components/FeaturedProjects";

import Solutions from "./components/Solutions";


import BlogSection from "./components/BlogSection";


import Etservices from "./components/Etservices";
import ServicesSummary from "./components/ServicesSummary";
import Brands  from "./components/Brands";
import Corevalues from "./components/Corevalues";

export default function Home() {
  return (
  <>
      <Header />
      <Hero />
      <ServicesSummary />
     
       <Etservices />
        <FeaturedProjects />
      <Corevalues />
       <Brands/>
      <Solutions />
      <BlogSection />
    
    </>
  );
}
