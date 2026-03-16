"use client";
import "./hero.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function Hero({ data }) {
  const heading = data?.heading || "Etqan";
  const subheading = data?.subheading || "Technology You Trust, Security You Rely On!";
  const summary =
    data?.summary ||
    "A premier IT solutions provider delivering innovative, comprehensive cybersecurity and infrastructure services — built to drive operational excellence and business growth across industries.";
  const imageUrl =
    data?.Swiper?.images?.[0]?.url || "/assets/img/fallback.jpg";
  const imageAlt =
    data?.Swiper?.images?.[0]?.alternativeText ||
    "Etqan Agency - Digital Transformation";

  const [mainHeading, subHeading] = heading.split("—");

  return (
    <section className="hero-section">
      {/* Background layers */}
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="accent-line" />

      <div className="hero-container">

        {/* LEFT COLUMN */}
        <div className="hero-left">

          <div className="hero-badge">
            <span className="badge-dot" />
            <span className="badge-text">Est. 2020 · Riyadh, Saudi Arabia</span>
          </div>

          <h1 className="hero-heading">
            <span className="heading-main">{mainHeading || heading}</span>
            <span className="heading-gradient">Projects</span>
          </h1>

          <p className="hero-subheading">{subheading?.trim()}</p>

          <div className="hero-body markdown-container">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">5<span>+</span></div>
              <div className="stat-label">Years Active</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-num">200<span>+</span></div>
              <div className="stat-label">Projects Done</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-num">50<span>+</span></div>
              <div className="stat-label">Clients Served</div>
            </div>
          </div>

          <div className="hero-ctas">
            <Link href="/pages/main-services" className="btn-primary">
              <span>Explore Services</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/pages/about" className="btn-secondary">  About Us ↗</Link>
            
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right">

          <div className="image-frame">
            <div className="image-inner">
              <Image
                className="hero-image"
                src={imageUrl}
                width={data?.Swiper?.images?.[0]?.width || 700}
                height={data?.Swiper?.images?.[0]?.height || 500}
                alt={imageAlt}
                priority
              />
              <div className="image-overlay" />
              <div className="scan-line" />
            </div>
            <div className="corner-tl" />
            <div className="corner-br" />
          </div>

          {/* Floating tags */}
          <div className="float-tag tag-tl">
            <div className="float-tag-icon ft-blue">🔐</div>
            <div className="float-tag-text">
              <span className="ft-label">Status</span>
              <span className="ft-value teal">Protected</span>
            </div>
          </div>

          <div className="float-tag float-tag-2 tag-tr">
            <div className="float-tag-icon ft-teal">🛡️</div>
            <div className="float-tag-text">
              <span className="ft-label">Threat Level</span>
              <span className="ft-value teal">Neutralized</span>
            </div>
          </div>

          <div className="float-tag float-tag-3 tag-br">
            <div className="float-tag-icon ft-cyan">📡</div>
            <div className="float-tag-text">
              <span className="ft-label">Network</span>
              <span className="ft-value">Secured 24/7</span>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </div>

    </section>
  );
}