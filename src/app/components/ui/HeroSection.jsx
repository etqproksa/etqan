"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "../Breadcrumb";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const HeroSection = ({ data }) => {
  const [photos, setPhotos] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const hero = data?.Hero;
  const bgImage = hero?.backgroundImage?.url;

  useEffect(() => {
    if (hero?.images?.length) {
      const loadImages = async () => {
        const photoData = await Promise.all(
          hero.images.map(
            (img) =>
              new Promise((resolve) => {
                const image = new window.Image();
                image.src = img.url;
                image.onload = () =>
                  resolve({
                    src: img.url,
                    width: image.width,
                    height: image.height,
                    alt: img?.alternativeText || "Gallery Image",
                  });
              })
          )
        );
        setPhotos(photoData);
      };
      loadImages();
    }
  }, [hero?.images]);

  if (!hero) return null;

  return (
 <section className="container  py-2 bg-secondary mb-5"
  style={{
    position: "relative",
    marginTop: "6rem",
    minHeight: "90vh",
    overflow: "hidden",
    borderRadius: "1.5rem",
  
  }}
>
      {/* ✅ Background (GUARANTEED VISIBLE) */}
      {bgImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />
      )}

      {/* ✅ Content */}
      <div
        className="container py-5"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="row">
          <div className="col-lg-7">
            <Breadcrumb />
            <h1 className="text-white mb-3">{hero.title}</h1>
            <p
              className="text-white"
              style={{ textAlign: "justify", fontSize: "1rem" }}
            >
              {hero.summary}
            </p>
          </div>

          <div className="col-lg-5 pt-4">
            {photos.length > 0 && (
              <>
                <RowsPhotoAlbum
                  photos={photos}
                  onClick={({ index }) => {
                    setIndex(index);
                    setGalleryOpen(true);
                  }}
                />

                <Lightbox
                  open={galleryOpen}
                  index={index}
                  close={() => setGalleryOpen(false)}
                  plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  slides={photos.map((p) => ({ src: p.src }))}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
