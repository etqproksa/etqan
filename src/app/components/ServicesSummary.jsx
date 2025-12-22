"use client";
import React from "react";

function ServicesSummary({ data }) {
  const services = data?.service_summaries || [];

  if (!Array.isArray(services) || services.length === 0) {
    return null;
  }

  return (
    <section className="container mb-5 pt-lg-5" id="benefits">
      <div className="row pt-3 g-4">
        {services.map((service, index) => (
          <div
            key={service.documentId}
            className={`col-12 col-sm-6 col-xl-3 ${
              index < services.length - 1 ? "border-end-lg" : ""
            }`}
          >
            <div className="text-center h-100">
              {service.serviceIcon?.url && (
                <img
                  src={service.serviceIcon.url}
                  alt={service.serviceIcon.alternativeText || service.title}
                  width={60}
                  height={60}
                  className="mb-3"
                />
              )}

              <h5 className="mb-3">{service.title}</h5>

              {/* Balanced text container */}
              <p className="mx-auto text-muted text-justify services-text">
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