// components/AosBlock.jsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const animations = ["fade-up", "fade-down", "fade-left", "fade-right", "zoom-in", "fade-right"];

export default function AosBlock({ children, index }) {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true, offset: 100 });
  }, []);

  return (
    <div
      data-aos={animations[index % animations.length]}
      data-aos-delay={index * 100}
      data-aos-duration="1000"
    >
      {children}
    </div>
  );
}