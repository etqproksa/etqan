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
import Image from "next/image";

{/* This is the hero section with right image gallery */}
const HeroSection = ({ data }) => {
  // ✅ All hooks MUST be declared before any early returns
  const [photos, setPhotos] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // ✅ Extract hero data after hooks but before early return
  const hero = data?.Hero;
  const bgImage = hero?.backgroundImage?.url;
//  console.log("this is the about us data",hero)

  // Load Cloudinary images with real dimensions
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
                    alt: img?.alternativeText || img?.name || "Gallery Image",
                  });
              })
          )
        );
        setPhotos(photoData);
      };
      loadImages();
    }
  }, [hero?.images]);

  // ✅ Early return AFTER all hooks are declared
  if (!hero) return null;

  return (
    
   
       <section
        className="container py-2 bg-secondary mb-5 pb-5"
        style={{ marginTop: "6rem" }}
      >
        {/* Background */}
        {bgImage && (
          <div
            className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0 bg-dark"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
          
          </div>
        )}

        <div className="container position-relative zindex-5 pt-5">
          <div className="row">
            <div className="col-lg-7">
              <Breadcrumb />
              <h1 className="pb-2 pb-md-3 text-white">{hero?.title}</h1>
              <p className="pb-4 mb-1 mb-md-2 mb-lg-3 text-white " style={{fontSize:"1rem",textAlign:"justify"}}>
                {hero?.summary}
              </p>
            </div>

            {/* Gallery */}
            <div className="col-lg-5 mt-xl-3 pt-5 pt-lg-4">
              {photos.length > 0 && (
                <div className="mt-2">
                  <RowsPhotoAlbum
                    photos={photos}
                    onClick={({ index }) => {
                      setIndex(index);
                      setGalleryOpen(true);
                    }}
                  />

                  {/* Lightbox for images only */}
                  <Lightbox
                    open={galleryOpen}
                    index={index}
                    close={() => setGalleryOpen(false)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    slides={photos.map((p) => ({
                      src: p.src,
                      title: p.alt,
                    }))}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    
   
  );
};

export default HeroSection;