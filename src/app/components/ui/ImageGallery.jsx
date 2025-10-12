"use client";

import { useState, useEffect } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

/**
 * GallerySection component — displays an image gallery with Lightbox
 * @param {Object} data - API block containing images array
 */
const ImageGallery = ({ data }) => {
  const [photos, setPhotos] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Extract image gallery data
  const gallery = data;
  const images = gallery?.images || [];

  // Load Cloudinary images with real width and height
  useEffect(() => {
    if (images.length > 0) {
      const loadImages = async () => {
        const photoData = await Promise.all(
          images.map(
            (img) =>
              new Promise((resolve) => {
                const image = new window.Image();
                image.src = img.url;
                image.onload = () =>
                  resolve({
                    src: img.url,
                    width: image.width || img.width || 1200,
                    height: image.height || img.height || 800,
                    alt: img?.alternativeText || img?.name || "Gallery Image",
                  });
              })
          )
        );
        setPhotos(photoData);
      };
      loadImages();
    }
  }, [images]);

  if (!images.length) return null;

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <RowsPhotoAlbum
            photos={photos}
            onClick={({ index }) => {
              setIndex(index);
              setGalleryOpen(true);
            }}
          />

          {/* Lightbox Modal */}
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
      </div>
    </section>
  );
};

export default ImageGallery;
