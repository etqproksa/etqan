"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
const FeaturedProjects = ({ data }) => {
  if (!data) return null;

  const { heading, subheading, etqan_benefits } = data;

  return (
    <section
      className="container mb-5 pt-lg-2 pt-xl-4 pb-2 pb-md-3 pb-lg-5"
      style={{ marginTop: "5rem" }}
    >
      {/* ✅ Heading & Subheading */}
      <h2 className="h1 mb-4 text-center">{heading}</h2>
      <p
        className="mb-4 mx-auto pb-3 fs-lg text-center"
        style={{ maxWidth: "636px" }}
      >
        {subheading}
      </p>

      {/* ✅ Swiper */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: ".custom-pagination", // attach to external div
          clickable: true,
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          560: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {etqan_benefits?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/etqan-benefits/${item.slug}`}
              className="card-portfolio position-relative d-block rounded-3 overflow-hidden"
            >
              <span
                className="position-absolute top-0 start-0 w-100 h-100 zindex-1"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(17, 24, 39, 0) 35.56%, #111827 95.3%)",
                }}
              ></span>
              <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                <div className="px-md-3">
                  <h3 className="h4 text-white mb-0">{item.title}</h3>
                  <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                    <span className="text-white fs-xs text-truncate opacity-70 pe-3">
                      {item.summary}
                    </span>
                    <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                  </div>
                </div>
              </div>
              <div className="card-img">
                <Image
                  src={item.frontimage?.url}
                  width={item.frontimage?.width}
                  height={item.frontimage?.height}
                  alt={item.frontimage?.alternativeText || item.title}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ External Pagination (below the slider) */}
      <div className="swiper-pagination custom-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
    </section>
  );
};

export default FeaturedProjects;
