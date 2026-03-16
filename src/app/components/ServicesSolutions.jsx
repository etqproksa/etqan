import React from "react";
import Link from "next/link";
import "./servicesSolutions.css";

const ServicesSolutions = ({ data }) => {
  if (!data) return null;

  const {
    heading,
    summary,
    image,
    imageAlignment,
    icon,
    ctaTitle,
    ctaUrl,
  } = data;

  return (
    <section className="ss-section">
      <div className="container">
        <div className="ss-card">
          <div className="row align-items-center g-4">

            {/* IMAGE LEFT */}
            {imageAlignment === "Left" && (
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src={image?.url}
                  alt={image?.alternativeText || heading}
                  className="ss-image"
                />
              </div>
            )}

            {/* CONTENT */}
            <div className="col-md-6 text-center text-md-start">

              {heading && (
                <div className="d-flex align-items-center gap-3 mb-4">
                  {icon?.url && (
                    <img
                      src={icon.url}
                      alt={icon.alternativeText || "icon"}
                      width="60"
                      height="60"
                      className="ss-icon"
                    />
                  )}
                  <h2 className="mb-0">{heading}</h2>
                </div>
              )}

              {summary && (
                <p className="ss-summary">{summary}</p>
              )}

              {ctaTitle && ctaUrl && (
                <Link href={ctaUrl} className="btn-ss-cta">
                  {ctaTitle} →
                </Link>
              )}

            </div>

            {/* IMAGE RIGHT */}
            {imageAlignment === "Right" && (
              <div className="col-md-6 text-center mt-4 mt-md-0">
                <img
                  src={image?.url}
                  alt={image?.alternativeText || heading}
                  className="ss-image"
                />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSolutions;