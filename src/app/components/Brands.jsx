"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Brands({ data }) {
  if (!data) return null;

  const { heading, logos } = data;

  return (
    <section className="container pb-4 pb-lg-5 mb-3">
      <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
        <h2 className="mb-0">{heading}</h2>

        {/* Prev/Next buttons (only visible on md+) */}
        <div className="d-md-flex d-none ms-4">
          <button
            type="button"
            id="prev-brand"
            className="btn btn-prev btn-icon btn-sm me-2"
            aria-label="Previous"
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            type="button"
            id="next-brand"
            className="btn btn-next btn-icon btn-sm ms-2"
            aria-label="Next"
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: "#prev-brand",
          nextEl: "#next-brand",
        }}
        pagination={{
          el: ".brands-pagination",
          clickable: true,
        }}
        loop={true}
        spaceBetween={8}
        slidesPerView={2}
        breakpoints={{
          500: { slidesPerView: 3, spaceBetween: 8 },
          650: { slidesPerView: 4, spaceBetween: 8 },
          900: { slidesPerView: 5, spaceBetween: 8 },
          1100: { slidesPerView: 6, spaceBetween: 8 },
        }}
      >
        {logos?.map((logo) => (
          <SwiperSlide key={logo.id} className="py-3">
            <a
              href="#"
              className="card card-body card-hover px-2 mx-2 d-flex align-items-center"
            >
              <img
                src={logo.url}
                alt={logo.alternativeText || logo.name}
                className="d-block mx-auto my-2"
                width="154"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination (mobile only) */}
      <div className="swiper-pagination brands-pagination position-relative pt-3 mt-4 d-md-none d-flex"></div>
    </section>
  );
}
