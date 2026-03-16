"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Preloader from "../../../components/Preloader";
import "./slug.css";

const SolutionsDetails = ({ params: paramsPromise }) => {
  const [solution, setSolution] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSolution = async () => {
      try {
        const params = await paramsPromise;
       const { category, slug } = params;  // ← get both
      ///  console.log("this is the slug",slug);
        const res = await fetch(`/api/solutions/${slug}`);
        console.log("this is the data from solutions api",res);
        if (!res.ok) throw new Error(`Failed with status ${res.status}`);

        const data = await res.json();
        const solutionData = data?.data?.[0] || null;
        setSolution(solutionData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSolution();
  }, [paramsPromise]);

  if (isLoading) return <Preloader />;
  if (error) return <div className="sd-error">Error: {error}</div>;
  if (!solution) return <div className="sd-error">No record found</div>;

  const bannerImage = solution.bannerImage;

  return (
    <div className="sd-page">

      {/* ── BANNER ─────────────────────────────────────────────── */}
      <div className="sd-banner">
        {bannerImage ? (
          <Image
            src={bannerImage.url}
            alt={bannerImage.alternativeText || solution.title}
            fill
            priority
            className="sd-banner-img"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        ) : (
          <div className="sd-banner-placeholder" />
        )}

        {/* Dark gradient overlays */}
        <div className="sd-banner-overlay" />
        <div className="sd-banner-overlay-bottom" />

        {/* Animated grid */}
        <div className="sd-grid" />

        {/* Scan line */}
        <div className="sd-scan" />

        {/* Banner content */}
        <div className="sd-banner-content">
          {solution.SolutionIcon?.url && (
            <div className="sd-icon-wrap">
              <Image
                src={solution.SolutionIcon.url}
                alt="icon"
                width={36}
                height={36}
                className="sd-icon"
              />
            </div>
          )}
          <div className="sd-breadcrumb">Solutions</div>
          <h1 className="sd-title">{solution.title}</h1>
          <div className="sd-title-bar" />
        </div>

        {/* Corner HUD accents */}
        <div className="sd-corner sd-corner-tl" />
        <div className="sd-corner sd-corner-br" />
      </div>

      {/* ── BODY ───────────────────────────────────────────────── */}
      <div className="sd-body">

        {/* Decorative side line */}
        <div className="sd-side-line" />

        <div className="sd-content-wrap">

          {/* Section label */}
          <div className="sd-section-label">
            <span className="sd-label-dot" />
            Overview
          </div>

          {/* Description */}
          <div className="sd-description markdown-container">
            <ReactMarkdown>{solution.description}</ReactMarkdown>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SolutionsDetails;