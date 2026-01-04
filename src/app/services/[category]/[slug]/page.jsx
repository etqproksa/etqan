"use client";

import React, { useState, useEffect } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import PageHeading from "../../../components/ui/pageHeading";
import ReactMarkdown from "react-markdown";
import Preloader from "../../../components/ui/Preloader";

const ServicesDetails = ({ params: paramsPromise }) => {
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const params = await paramsPromise;
        const { slug } = params;

        const res = await fetch(`/api/services/${slug}`);
        if (!res.ok) throw new Error(`Failed with status ${res.status}`);

        const data = await res.json();
        const serviceData = data?.data?.[0] || null;

        setService(serviceData);

        const photoData =
          serviceData?.images?.map((img) => ({
            src: img?.url,
            width: img?.width || 600,
            height: img?.height || 400,
            alt: img?.alternativeText || "Service Image",
          })) || [];

        setPhotos(photoData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchService();
  }, [paramsPromise]);

  if (isLoading) return <Preloader />;
  if (error) return <div className="container mt-5">Error: {error}</div>;
  if (!service) return <div className="container mt-5">No record found</div>;

  return (
    <section
      className="container bg-secondary bordered-3 mb-5"
      style={{ marginTop: "100px" }}
    >
      <div className="row mb-2" style={{ textAlign: "justify" }}>
        <div className="col-md-12 mb-4 pt-2">
          <PageHeading
            heading={service.title}
            icon={service.serviceIcon?.url}
            show={true}
          />
        </div>

        <div className="markdown-container">
          <ReactMarkdown>{service.description}</ReactMarkdown>
        </div>
      </div>

      {photos.length > 0 && (
        <div className="row p-5 mt-2">
          <RowsPhotoAlbum photos={photos} onClick={() => setOpen(true)} />

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={photos.map((photo) => ({
              src: photo.src,
              title: photo.alt,
            }))}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      )}
    </section>
  );
};

export default ServicesDetails;
