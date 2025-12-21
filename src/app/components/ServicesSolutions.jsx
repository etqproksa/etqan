import React from "react";
import Link from "next/link";

const ServicesSolutions = ({ data }) => {
  if (!data) return null;

  const {
    heading,
    summary,
    image,
    imageAlignment,
    backgroundImage,
    icon,
    ctaTitle,
    ctaUrl,
  } = data;

  return (
    <section
      className="container py-2 mb-2 shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage?.url || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
        marginTop: "5rem",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">

          {/* IMAGE LEFT */}
          {imageAlignment === "Left" && (
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={image?.url}
                alt={image?.alternativeText || heading}
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          )}

          {/* CONTENT */}
          <div className="col-md-6 text-center text-md-start">

            {/* ICON + HEADING */}
            {heading && (
              <div className="d-flex align-items-center gap-3 mb-4">

                {/* ICON */}
                {icon?.url && (
                  <img
                    src={icon.url}
                    alt={icon.alternativeText || "service-icon"}
                    width="60"
                    height="60"
                  />
                )}

                <h2 className="mb-0 text-white">{heading}</h2>
              </div>
            )}

            {/* SUMMARY */}
            {summary && (
              <p className="fs-md text-light" style={{ textAlign: "justify" }}>
                {summary}
              </p>
            )}

            {/* CTA */}
            {ctaTitle && ctaUrl && (
              <Link href={ctaUrl} className="btn  btn-outline-primary mt-3">
                {ctaTitle}
              </Link>
            )}
          </div>

          {/* IMAGE RIGHT */}
          {imageAlignment === "Right" && (
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={image?.url}
                alt={image?.alternativeText || heading}
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ServicesSolutions;
