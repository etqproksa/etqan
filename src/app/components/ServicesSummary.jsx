"use client";
import React from "react";
import "./servicesSummary.css";

function ServicesSummary({ data }) {
  const services = data?.service_summaries || [];

  if (!Array.isArray(services) || services.length === 0) {
    return null;
  }

  return (
    <section className="services-summary-section" id="benefits">
      <div className="container pb-lg-4">
        <div className="row pt-3 g-4">
          {services.map((service, index) => (
            <div
              key={service.documentId}
              className={`col-12 col-sm-6 col-xl-3 ${
                index < services.length - 1 ? "service-col-divider" : ""
              }`}
            >
              <div className="service-card text-center">

                {service.serviceIcon?.url && (
                  <div className="service-icon-wrap mx-auto">
                    <img
                      src={service.serviceIcon.url}
                      alt={service.serviceIcon.alternativeText || service.title}
                      width={36}
                      height={36}
                    />
                  </div>
                )}

                <h5>{service.title}</h5>

                <p className="services-text">
                  {service.summary}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSummary;