"use client";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero-section position-relative d-flex align-items-center min-vh-100" style={{paddingBottom:"1.5rem",paddingTop:"3rem"}}>  
      <div className="hero-container container position-relative py-5">
        <div className="row justify-content-between align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-md-6 order-md-1 order-2 d-flex flex-column justify-content-between text-md-start text-center">
            <div className="mb-5">
              {/* Video popup btn */}

              {/* Text */}

              <h1 className="display-2 mb-md-5 mb-3 pb-3">
                  We <span className="text-gradient-primary">Transform</span> Your Ideas into Reality
                </h1>

              <div className="d-md-flex align-items-md-start">
                <p className="hero-description d-lg-block d-none mb-0 ps-md-3">
                  Founded in 2020 and head office in Riyadh, Saudi Arabia, is a
                  trusted partner in digital transformation. We deliver
                  cutting-edge IT services designed to optimize operations,
                  enhance security, and accelerate growth for organizations
                  across diverse sectors.
                </p>
              </div>
            </div>

            {/* Scroll down btn */}
            <div className="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative">
              <a
                href="#benefits"
                className="hero-scroll-btn btn btn-icon rounded-circle flex-shrink-0 stretched-link me-3"
                aria-label="Scroll for more"
              >
                <i className="hero-scroll-icon bx bx-chevron-down"></i>
              </a>
              <span className="hero-scroll-text">Discover more</span>
            </div>
          </div>

          {/* Right Column - Image with larger gap */}
          <div className="col-md-5 order-md-2 order-1 d-flex justify-content-end">
            <div style={{ position: "relative" }}>
              <img
                className="hero-image img-fluid"
                src="/assets/img/etqanimages/mainimage2.jpg"
                alt="Etqan Agency - Digital Transformation"
              />
              {/* Decorative gradient overlay */}
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="hero-bg-decorative">
        <div className="hero-bg-circle-1"></div>
        <div className="hero-bg-circle-2"></div>
      </div>
    </section>
  );
}
