
export const revalidate = 300;

import AosBlock from "./components/AosBlock";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";
import Services from "./components/Etservices";
import ServicesSolutions from "./components/ServicesSolutions";
import ServicesSummary from "./components/ServicesSummary";
import Brands from "./components/Brands";
import VisionMission from "./components/VisionMission";
import CtaImage from "./components/ui/CtaImage";

export default async function Home() {
  // Loader function to fetch data
  async function loader() {
    const path = `/api/landing-page`;
    const baseUrl = getStrapiURL();
    const url = new URL(path, baseUrl);
    const authToken = process.env.STRAPI_JWT;

    return fetchData(url.href, authToken, {
      next: {
        tags: ["landing-page-data"],
        revalidate: 300,
      },
    });
  }

  // BlockRenderer function with switch-case to render components dynamically
  function BlockRenderer(block) {
    switch (block.__component) {
      case "blocks.swiper-hero":
        return <Hero data={block} />; // ✅ pass the block directly
      case "blocks.services-summary":
        return <ServicesSummary data={block} />; // ✅ pass the block directly
      case "blocks.services":
         return <Services data={block} />; // ✅ pass the block directly
      case "blocks.services-solutions":
         return <ServicesSolutions data={block} />; // ✅ pass the block directly
      case "blocks.benefits":
         return <FeaturedProjects data={block} />; // ✅ pass the block directly
      case "blocks.client-logos":
         return <Brands data={block} />; // ✅ pass the block directly
      case "blocks.vision-mission":
         return <VisionMission data={block} />; // ✅ pass the block directly
      case "blocks.cta-image":
         return <CtaImage data={block} />; // ✅ pass the block directly
      default:
        return null;
    }
  }

  // Fetching data from the loader
  const data = await loader();
  const homeData = data?.data?.SwiperHero || [];

  if (homeData.length === 0) {
    return <div>No content available</div>;
  }

  return (
    <div>
    {homeData.map((block, index) => (
      <AosBlock key={block.id || `block-${index}`} index={index}>
        {BlockRenderer(block)}
      </AosBlock>
    ))}
  </div>
  );
}
