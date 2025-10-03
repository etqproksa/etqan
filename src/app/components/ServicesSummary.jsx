"use client";
import React from "react";

function ServicesSummary({ data }) {
  const services = data?.service_summaries || []; // <-- safe access

  if (!Array.isArray(services) || services.length === 0) {
    return null; // nothing to render
  }

  return (
    <section className="container mb-5 pt-lg-5" id="benefits">
      <div className="row pt-3">
        {services.map((service) => (
          <div
            key={service.documentId}
            className="col-12 col-sm-6 col-lg-4 border-end-lg px-2 mb-4"
          >
            <div className="text-center">
              {service.serviceIcon?.url && (
                <img
                  src={service.serviceIcon.url}
                  alt={service.serviceIcon.alternativeText || service.title}
                  width={60}
                  height={60}
                />
              )}
              <h5 className="mb-2 pb-1 mt-2">{service.title}</h5>
              <p className="mx-auto" style={{ maxWidth: "336px",textAlign:"justify" }}>
                {service.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSummary;
