"use client";

import React from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";

export default function Brands({ data }) {
  if (!data) return null;

  const { heading, logos } = data;

  const photos = logos?.map((logo) => ({
    src: logo.url,
    width: logo.width || 800,
    height: logo.height || 600,
    alt: logo.alternativeText || logo.name || "Brand logo",
  }));

  return (
    <section className="container pb-4 pb-lg-5 mb-3">
      <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
        <h2 className="mb-0">{heading}</h2>
      </div>

      {/* Brand Logos */}
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={140}
        spacing={10}
        padding={0}
        renderPhoto={({ imageProps }) => (
          <div className="card card-body border-0 shadow-none mx-1 my-2 d-flex align-items-center justify-content-center">
            <img
              {...imageProps}
              className="brand-logo"
              style={{
                maxHeight: "100px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                transition: "filter 0.3s ease, transform 0.3s ease",
              }}
            />
          </div>
        )}
      />
    </section>
  );
}
