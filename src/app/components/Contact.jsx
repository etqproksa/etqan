"use client";
import React from "react";

const Contact = ({ data }) => {
  if (!data) return null;

  const {
    address,
    map,
    phone,
    email,
    emailIcon,
    phoneIcon,
    locationIcon,
    backgroundImage,
  } = data;

  const Icon = ({ icon, alt }) => {
    if (!icon?.url) return null;
    return (
      <span style={{ display: "flex", alignSelf: "flex-start", flexShrink: 0, marginRight: "0.875rem" }}>
        <img
          src={icon.url}
          alt={icon.alternativeText || alt}
          width={22}
          height={22}
          style={{ display: "block", opacity: 0.85 }}
        />
      </span>
    );
  };

  const sectionStyle = {
    marginTop: "6rem",
    borderRadius: "1.25rem",
    background: backgroundImage?.url
      ? `url(${backgroundImage.url}) center/cover no-repeat`
      : "linear-gradient(135deg, #0f1117 0%, #151822 60%, #1a1d2e 100%)",
    border: "1px solid rgba(255,255,255,0.07)",
    boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
    position: "relative",
    overflow: "hidden",
    padding: "3rem",
  };

  const mapWrapperStyle = {
    borderRadius: "0.875rem",
    overflow: "hidden",
    height: "100%",
    minHeight: "340px",
    filter: "invert(92%) hue-rotate(180deg) brightness(95%) contrast(90%) saturate(0.85)",
    border: "1px solid rgba(99,102,241,0.2)",
  };

  const infoItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    padding: "0.75rem 1rem",
    borderRadius: "0.625rem",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    marginBottom: "0.6rem",
  };

  const infoTextStyle = {
    color: "rgba(255,255,255,0.75)",
    fontSize: "0.9375rem",
    lineHeight: "1.6",
    textDecoration: "none",
  };

  const socialBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "42px",
    height: "42px",
    borderRadius: "0.625rem",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    fontSize: "1.1rem",
  };

  return (
    <section className="container" style={sectionStyle}>

      {/* Decorative glow orbs */}
      <div style={{
        position: "absolute", top: -80, right: -80, width: 300, height: 300,
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -60, width: 240, height: 240,
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="row py-3 align-items-stretch" style={{ position: "relative", zIndex: 1 }}>

        {/* Map with dark filter */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div style={mapWrapperStyle}>
            <div
              style={{ width: "100%", height: "100%", minHeight: "340px" }}
              dangerouslySetInnerHTML={{ __html: map }}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-5 offset-lg-1 d-flex flex-column justify-content-center">

          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "0.5rem" }}>
              Contact Us
            </h2>
            <div style={{
              width: 40, height: 3,
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              borderRadius: 2,
            }} />
          </div>

          <ul className="list-unstyled mb-0">
            {address && (
              <li style={infoItemStyle}>
                <Icon icon={locationIcon} alt="Location" />
                <span style={infoTextStyle}>{address}</span>
              </li>
            )}
            {phone && (
              <li style={infoItemStyle}>
                <Icon icon={phoneIcon} alt="Phone" />
                <a href={`tel:${phone}`} style={infoTextStyle}>{phone}</a>
              </li>
            )}
            {email && (
              <li style={infoItemStyle}>
                <Icon icon={emailIcon} alt="Email" />
                <a href={`mailto:${email}`} style={infoTextStyle}>{email}</a>
              </li>
            )}
          </ul>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem" }}>
            <a href="https://www.linkedin.com/company/etqan-projects/" target="_blank" rel="noreferrer" style={socialBtnStyle} aria-label="LinkedIn">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#" style={socialBtnStyle} aria-label="Facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" style={socialBtnStyle} aria-label="Twitter / X">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;