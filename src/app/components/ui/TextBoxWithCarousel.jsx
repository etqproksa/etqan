"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TextBoxWithCarousel = ({ data }) => {
  if (!data || !data.TextBoxWithCarousel) return null;

  const slides = data.TextBoxWithCarousel;

  useEffect(() => {
    const swiperEl = document.querySelector(".text-carousel-swiper")?.swiper;
    const tabs = document.querySelectorAll(".swiper-tab");

    if (swiperEl && tabs.length) {
      swiperEl.on("slideChange", function () {
        tabs.forEach((tab, index) => {
          tab.classList.toggle("active", index === swiperEl.realIndex);
        });
      });
    }
  }, []);

  return (
    <section className="position-relative pt-5 py-lg-5 mt-3 mt-md-4" style={{backgroundColor:"#3D3E51"}}>
      {/* === Right Side: Background image tabs === */}
      <div className="swiper-tabs position-md-absolute top-0 end-0 w-md-50 h-100">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`swiper-tab position-md-absolute w-100 h-100 bg-position-center bg-repeat-0 bg-size-cover ${
              index === 0 ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${item.image?.url})`,
              transition: "opacity 0.6s ease",
              opacity: index === 0 ? 1 : 0,
            }}
          >
            <div className="ratio ratio-1x1"></div>
          </div>
        ))}
      </div>

      {/* === Left Side: Text and Swiper controls === */}
      <div className="container pt-1 pt-lg-2">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="d-none d-lg-block" style={{ height: "160px" }}></div>
            <div className="d-none d-md-block d-lg-none" style={{ height: "80px" }}></div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              loop={true}
              pagination={{ el: ".swiper-pagination", type: "fraction" }}
              navigation={{
                prevEl: ".btn-prev",
                nextEl: ".btn-next",
              }}
              className="text-carousel-swiper pt-4 pt-md-0"
              onSlideChange={(swiper) => {
                const tabs = document.querySelectorAll(".swiper-tab");
                tabs.forEach((tab, i) => {
                  tab.style.opacity = i === swiper.realIndex ? "1" : "0";
                });
              }}
            >
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  <h2 className="h1 mb-4">{item.title}</h2>
                  <p className="pb-3 mb-3">{item.text}</p>

                  <a href="#" className="btn btn-primary shadow-primary mt-n2">
                    Read more
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Prev / Next buttons + pagination */}
            <div className="d-flex align-items-center ps-2 pb-5 mt-3">
              <button
                type="button"
                className="btn btn-prev btn-icon btn-sm position-static"
                aria-label="Previous"
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <div
                className="swiper-pagination position-static w-auto mx-3"
                style={{ minWidth: "30px" }}
              ></div>
              <button
                type="button"
                className="btn btn-next btn-icon btn-sm position-static"
                aria-label="Next"
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Background Fade Effect Styling === */}
      <style jsx>{`
        .swiper-tabs {
          position: relative;
          overflow: hidden;
        }
        .swiper-tab {
          transition: opacity 0.6s ease-in-out;
          opacity: 0;
          z-index: 0;
        }
        .swiper-tab.active {
          opacity: 1;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default TextBoxWithCarousel;
