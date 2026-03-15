import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import './mainservices.css';

const MainServices = ({ data }) => {
  if (!data?.MainServices?.length) return null;

  return (
    <div className="ms-wrapper">

      {/* ── FULL-WIDTH BANNER (right below navbar) ── */}
      {data.bannerImage?.url && (
        <div className="ms-banner">
          <div
            className="ms-banner-bg"
            style={{ backgroundImage: `url(${data.bannerImage.url})` }}
          />
          <div className="ms-banner-overlay" />
          <div className="ms-banner-content">
            <span className="ms-banner-eyebrow">Etqan Projects</span>
            <h1 className="ms-banner-title">Our Services</h1>
            <p className="ms-banner-sub">
              Strengthening your technology environment — from managed IT to compliance assurance.
            </p>
          </div>
        </div>
      )}

      {/* ── SERVICES LIST ── */}
      <section className="ms-section">
        <div className="ms-container">

          {data.MainServices.map((service, index) => (
            <article className="ms-card" key={service.id}>

              {/* left: number + vertical line */}
              <div className="ms-card-aside">
                <span className="ms-card-num">0{index + 1}</span>
                <div className="ms-card-line" />
              </div>

              {/* right: text content */}
              <div className="ms-card-body">
                <h2 className="ms-card-title">{service.title}</h2>
                <div className="ms-card-text">
                  <ReactMarkdown>{service.text}</ReactMarkdown>
                </div>
                <Link href={`/${service.ctaUrl}`} className="ms-card-cta">
                  <span>{service.ctaText || "Read More"}</span>
                  <svg className="ms-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </article>
          ))}

        </div>
      </section>

    </div>
  );
};

export default MainServices;