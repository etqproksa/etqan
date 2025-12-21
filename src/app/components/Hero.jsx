"use client";
import "./hero.css";
import Image from "next/image";

export default function Hero({ data }) {
  const heading = data?.heading || "Etqan";
  const subheading = data?.subheading || "Digital Transformation";
  const summary =
    data?.summary ||
    "Founded in 2020 and head office in Riyadh, Saudi Arabia...";

  const image = data?.Swiper?.images?.[0];

  const imageUrl = image?.url || "/assets/img/fallback.jpg";
  const imageAlt =
    image?.alternativeText || "Etqan Agency - Digital Transformation";

  const [mainHeading] = heading.split("—");

  return (
    <section className="hero-section position-relative d-flex align-items-center mt-5">
      <div className="container hero-container py-5">
        <div className="row align-items-start g-4 g-lg-3">
          {/* TEXT COLUMN */}
          <div className="col-lg-5 col-md-6 order-md-1 order-2 text-md-start text-center d-flex flex-column justify-content-between">
            <div>
              <h3 className="display-3 mb-3">
                <span className="text-gradient">{mainHeading || heading}</span>
              </h3>

              <h7
                className="display-7 mb-3 pb-2 text-gradient-primary"
                style={{ fontSize: "1.8rem", fontWeight: "bold" }}
              >
                {subheading?.trim()}
              </h7>

              <p className="hero-description mx-auto mx-md-0">{summary}</p>
            </div>

            {/* SCROLL BUTTON */}
            <div className="mt-4 d-flex justify-content-center justify-content-md-start">
              <a
                href="#benefits"
                className="hero-scroll-btn btn btn-icon rounded-circle"
                aria-label="Scroll for more"
              />
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="col-lg-7 col-md-6 order-md-2 order-1 d-flex justify-content-center justify-content-lg-end">
            <div className="hero-image-wrapper">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={image?.width || 800}
                height={image?.height || 600}
                className="hero-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                priority
              />
              <div className="hero-image-overlay" />
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND DECOR */}
      <div className="hero-bg-decorative">
        <div className="hero-bg-circle-1" />
        <div className="hero-bg-circle-2" />
      </div>
    </section>
  );
}
