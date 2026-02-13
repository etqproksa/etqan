import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";

import Contact from "../../components/Contact";
import Textbox from "../../components/Textbox";
import HeroSection from "../../components/ui/HeroSection";
import VideoSection from "../../components/ui/VideoSection";

import ImageGallery from "../../components/ui/ImageGallery";
import TextBoxWithImage from "../../components/ui/TextBoxWithImage";
import TextBoxWithCarousel from "../../components/ui/TextBoxWithCarousel";
import MainServices from "../../components/MainServices";
import MainSolutions from "../../components/MainSolutions";
export default async function Page({ params }) {
  const { slug } = await params; // "contact", "about", etc.
 //  console.log("slug is ",slug)
  async function loader() {
    const path = `/api/pages?filters[slug][$eq]=${slug}&populate=blocks`;
    const baseUrl = getStrapiURL();
    const url = new URL(path, baseUrl);
    const authToken = process.env.STRAPI_JWT;

    const data = await fetchData(url.href, authToken, {
      cache: "no-store"
    });
    console.log("this is the page data",data)

    return data;
  }

  function BlockRenderer(block) {
    switch (block.__component) {
      case "blocks.hero-section":
        return <HeroSection data={block} />;
      case "blocks.video-section":
        return <VideoSection data={block} />;
      case "blocks.video-section":
        return <VideoSection data={block} />;
      case "blocks.contact":
        return <Contact data={block} />;
      case "blocks.textbox":
        return <Textbox data={block} />;
      case "blocks.image-gallery":
        return <ImageGallery data={block} />;
       case "blocks.text-box-with-image":
        return <TextBoxWithImage data={block} />;
       case "blocks.text-box-with-carousel":
        return <TextBoxWithCarousel data={block} />;
       case "blocks.main-services":
        return <MainServices data={block} />;
        case "blocks.main-solutions":
        return <MainSolutions data={block} />;
      default:
        return null;
    }
  }

  const data = await loader();
  const pageData = data?.data?.[0]; // only one page

  if (!pageData) return <div>Page not found</div>;

  return (
    <div>
      {pageData.blocks?.map((block) => (
        <div key={block.id}>{BlockRenderer(block)}</div>
      ))}
    </div>
  );
}
