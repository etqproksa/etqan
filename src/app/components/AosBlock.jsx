// components/AosBlock.jsx
"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const animations = ["fade-up", "fade-down", "zoom-in", "fade-up", "zoom-in", "fade-down"];

export default function AosBlock({ children, index }) {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
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