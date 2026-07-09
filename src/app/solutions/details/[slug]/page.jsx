"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import PageHeading from "../../../components/ui/pageHeading";

const ServicesDetails = ({ params: paramsPromise }) => {
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const params = await paramsPromise;
        const { slug } = params;

        const res = await fetch(`/api/services/${slug}`);

        if (!res.ok) {
          throw new Error(`Failed with ${res.status}`);
        }

        const data = await res.json();
        const serviceData = data?.data?.[0] || null;

        setService(serviceData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchService();
  }, [paramsPromise]);

  if (isLoading) return <Skeleton count={5} height={300} />;
  if (error) return <div>Error: {error}</div>;
  if (!service) return <div>No record found</div>;

  return (
    <section
      className="container bg-dark bordered-3 mb-5"
      style={{ marginTop: "100px" }}
    >
      <div
        className="row mb-2"
        style={{
          textAlign: "justify",
          border: "1px solid #DCDCE4",
        }}
      >
        <div className="col-md-12 mb-4 pt-2">
          <PageHeading
            heading={service.title}
            icon={service.serviceIcon?.url}
            show={true}
          />
        </div>

        <ReactMarkdown>{service.description}</ReactMarkdown>
      </div>
    </section>
  );
};

export default ServicesDetails;