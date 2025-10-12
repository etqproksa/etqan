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
    <section
      className="hero-section position-relative d-flex align-items-center"
      style={{ paddingBottom: "0.5rem", paddingTop: "5rem" }}
    >
      <div className="hero-container container position-relative py-5">
        <div className="row justify-content-between align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-md-6 order-md-1 order-2 d-flex flex-column justify-content-between text-md-start text-center">
            <div className="mb-5">
              {/* Heading */}
              <h1 className="display-1 mt-5">
                <span className="text-gradient-primary">
                  {mainHeading || heading}
                </span>
              </h1>
              <h6 className="display-6 mb-3 pb-2">
                {subheading ? subheading.trim() : ""}
              </h6>

                {/* Summary - visible on all devices */}
              <div className="d-flex align-items-start justify-content-center justify-content-md-start">
                <p className="hero-description mb-0 px-2 px-md-3">
                  {summary}
                </p>
              </div>
            </div>

            {/* Scroll down btn */}
            <div className="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative">
              <a
                href="#benefits"
                className="hero-scroll-btn btn btn-icon rounded-circle flex-shrink-0 stretched-link me-3"
                aria-label="Scroll for more"
              ></a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6 order-md-2 order-1 d-flex">
            <div style={{ position: "relative" }}>
              <Image
                className="hero-image img-fluid"
                src={imageUrl}
                width={  data?.Swiper?.images?.[0]?.width}
                height={  data?.Swiper?.images?.[0]?.height}
                alt={imageAlt}
              />
              {/* Decorative gradient overlay */}
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="hero-bg-decorative">
        <div className="hero-bg-circle-1"></div>
        <div className="hero-bg-circle-2"></div>
      </div>
    </section>
  );
}
