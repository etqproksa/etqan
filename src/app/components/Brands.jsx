"use client";
import React from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import styles from "./Brands.module.css";
import Image from "next/image";
export default function Brands({ data }) {
  if (!data) return null;

  const { heading, logos } = data;

  // Transform your logos data to match react-photo-album format
  const photos = logos?.map((logo) => ({
    src: logo.url,
    width: logo.width || 800,
    height: logo.height || 600,
    alt: logo.alternativeText || logo.name,
    key: logo.id,
  }));

  return (
    <section className="container pb-4 pb-lg-5 mb-3">
      <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3">
        <h2 className="mb-0">{heading}</h2>
      </div>

      <div className={styles.brandsGallery}>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          spacing={16}
          padding={0}
          targetRowHeight={100}
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <div style={wrapperStyle}>
             
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  className={styles.brandImage}
                  width={100}
                  height={100}
                  style={{
                    display: "block",
                 
                    objectFit: "contain",
                  }}
                />
             
            </div>
          )}
        />
      </div>
    </section>
  );
}