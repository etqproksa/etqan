"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import PageHeading from "../../components/ui/pageHeading";
import ReactMarkdown from "react-markdown";

const BenefitsDetails = ({ params: paramsPromise }) => {
  const [benefit, setBenefit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchBenefit = async () => {
      try {
        const params = await paramsPromise; // unwrap promise
        const { slug } = params;

        const res = await fetch(`/api/etqan-benefits/${slug}`);
        console.log("Fetching benefits",res);
        if (!res.ok) throw new Error(`Failed with ${res.status}`);

        const data = await res.json();
        const benefitData = data?.data?.[0] || null;
        setBenefit(benefitData);
        console.log("Benefit  Data",benefitData);
        const photoData =
          benefitData?.images?.map((img) => ({
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

    fetchBenefit();
  }, [paramsPromise]);

  if (isLoading) return <Skeleton count={5} height={300} />;
  if (error) return <div>Error: {error}</div>;
  if (!benefit) return <div>No benefit found</div>;

  return (
    <section className="container bg-dark bordered-3 mb-5" style={{ marginTop: "100px" }}>
      <div
        className="row mb-2"
        style={{
          textAlign: "justify",
          border: "1px solid #DCDCE4",
        
        }}
      >
        <div className="col-md-12 mb-4 pt-2">
         <PageHeading heading={benefit.title} icon="" show={true}/>
        </div>

        <ReactMarkdown>{benefit.description}</ReactMarkdown>
      </div>

      {photos.length > 0 && (
        <div
          className="row p-5 mt-2"
          style={{ backgroundColor: "rgb(228, 240, 221)" }}
        >
          <RowsPhotoAlbum
            photos={photos}
            onClick={() => {
              setOpen(true);
            }}
          />
          <Lightbox
            slides={photos.map((photo) => ({
              src: photo.src,
              title: photo.alt,
            }))}
            open={open}
            close={() => setOpen(false)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      )}
    </section>
  );
};

export default BenefitsDetails;
