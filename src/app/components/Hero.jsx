"use client";
import "./hero.css";
import Image from "next/image";
export default function Hero({ data }) {
 // console.log("this is the hero data", data);

  // Use the block directly
  const heading = data?.heading || "Etqan";
  const subheading = data?.subheading || "Digital Transformation";
  const summary =
    data?.summary ||
    "Founded in 2020 and head office in Riyadh, Saudi Arabia...";
  const imageUrl =
    data?.Swiper?.images?.[0]?.url || "/assets/img/fallback.jpg";
  const imageAlt =
    data?.Swiper?.images?.[0]?.alternativeText ||
    "Etqan Agency - Digital Transformation";

  // Split heading if it contains —
  const [mainHeading, subHeading] = heading.split("—");

  return (
  <section className="hero-section position-relative d-flex align-items-center">
  <div className="hero-container container position-relative pt-5 pb-5">
   <div className="row justify-content-between align-items-start">

      <div className="col-md-6 order-md-1 order-2 d-flex flex-column justify-content-between text-md-start text-center">
      <div className="mb-5">
          <h3 className="display-3 mb-3">
            <span className="text-gradient">
              {mainHeading || heading}
            </span>
          </h3>

          <h7 className="display-7 mb-3 pb-2 text-gradient-primary" style={{fontSize:"1.8rem",fontWeight:"bold"}}>
            {subheading?.trim()}
          </h7>

          <p className=" mb-0 px-2 px-md-3">
            {summary}
          </p>
        </div>

        <div className="d-inline-flex align-items-center justify-content-center justify-content-md-start">
          <a
            href="#benefits"
            className="hero-scroll-btn btn btn-icon rounded-circle"
            aria-label="Scroll for more"
          />
        </div>
      </div>

      <div className="col-md-6 order-md-2 order-1 d-flex">
        <div className="hero-image-wrapper">
          <Image
            className="hero-image img-fluid"
            src={imageUrl}
            width={data?.Swiper?.images?.[0]?.width}
            height={data?.Swiper?.images?.[0]?.height}
            alt={imageAlt}
            priority
          />
          <div className="hero-image-overlay"></div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
}
