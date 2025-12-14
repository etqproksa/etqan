"use client";
import React from "react";

function CtaImage({ data }) {
  if (!data) return null;

  const { middleImage, title, description, ctatitle, ctaUrl } = data;

  return (
    <section
      className="container my-5 py-5 px-0 rounded-3"
      style={{ backgroundColor: "#1A1E28" }}
    >
      <div className="row align-items-center">
        {/* Text column */}
        <div className="col-lg-4 col-md-5 offset-lg-1 text-center text-md-start">
          <h3 className="mb-lg-4 text-white">{title}</h3>

          {description && (
            <p className="text-light opacity-75 mb-4">
              {description}
            </p>
          )}

          {ctatitle && ctaUrl && (
            <a href={ctaUrl} className="btn btn-outline-primary btn-lg">
              {ctatitle}
            </a>
          )}
        </div>

        {/* Image column */}
        {middleImage?.url && (
          <div className="col-lg-6 col-md-7 mt-3 mt-md-0">
            <img
              src={middleImage.url}
              alt={middleImage.alternativeText || middleImage.name}
              className="d-block rounded-3 mx-auto me-md-0 img-fluid"
              width={430}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default CtaImage;

