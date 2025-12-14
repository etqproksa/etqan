"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./brands.css"; // 👈 add this

export default function Brands({ data }) {
  if (!data) return null;

  const { heading, logos } = data;

  return (
    <section className="container pb-4 pb-lg-5 mb-3 " style={{marginTop:"5rem"}}>
      {/* Heading + Navigation */}
       <h2 className="mb-0 text-center">{heading}</h2>
      <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3 position-relative">
 

  {/* Navigation buttons on desktop */}
  <div className="d-md-flex d-none position-absolute end-0">
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


      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        loop
        navigation={{
          prevEl: "#prev-brand",
          nextEl: "#next-brand",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          500: { slidesPerView: 3, spaceBetween: 8 },
          650: { slidesPerView: 4, spaceBetween: 8 },
          900: { slidesPerView: 5, spaceBetween: 8 },
          1100: { slidesPerView: 6, spaceBetween: 8 },
        }}
        
      >
        {logos?.map((logo) => (
          <SwiperSlide key={logo.id} className="py-3">
            <a href="#" className="card card-body card-hover px-2  brand-card">
              <img
                src={logo.url}
                alt={logo.alternativeText || logo.name}
                className="brand-logo"
                loading="lazy"
              />
            </a>
          </SwiperSlide>
        ))}

        {/* Pagination (mobile only) */}
        <div className="swiper-pagination position-relative pt-3 mt-4 d-md-none d-flex" />
      </Swiper>
    </section>
  );
}
