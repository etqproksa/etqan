"use client";
import React from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/columns.css";
import styles from "./Brands.module.css";

export default function Brands({ data }) {
  if (!data) return null;

  const { heading, logos } = data;
  console.log("this is the new brands data", data);
  
  // Transform your logos data to match react-photo-album format
  const photos = logos?.map((logo) => ({
    src: logo.url,
    width: logo.width,
    height: logo.height,
    alt: logo.alternativeText || logo.name,
    key: logo.id,
  }));

  return (
    <section className="container pb-4 pb-lg-5 mb-3 mt-5">
      <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3">
        <h2 className="mb-0">{heading}</h2>
      </div>

      <div className={styles.brandsGallery}>
        <PhotoAlbum
          layout="columns"
          photos={photos}
          targetRowHeight={(containerWidth) => {
            // Adaptive row height based on container width
            if (containerWidth < 600) return 80;
            if (containerWidth < 900) return 100;
            return 120;
          }}
          rowConstraints={{
            minPhotos: 3,
            maxPhotos: 6,
            singleRowMaxHeight: 150,
          }}
          spacing={16}
          padding={0}
          sizes={{
            size: "calc(100vw - 240px)",
            sizes: [
              { viewport: "(max-width: 600px)", size: "calc(100vw - 32px)" },
              { viewport: "(max-width: 900px)", size: "calc(100vw - 64px)" },
            ],
          }}
          renderPhoto={({ photo, imageProps: { style, ...restImageProps } }) => (
            <div className={styles.brandWrapper} style={style}>
              <img
                {...restImageProps}
                style={{
                  objectFit: "contain",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
                className={styles.brandImage}
              />
            </div>
          )}
        />
      </div>
    </section>
  );
}