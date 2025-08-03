export default function Hero() {
  return (
    <section
      className="jarallax position-relative d-flex align-items-center min-vh-100 bg-light mb-5 py-lg-5 pt-5"
      style={{ backgroundImage: "url(/assets/img/landing/digital-agency/hero-bg.svg)" }}
      data-jarallax
      data-img-position="0% 100%"
      data-speed="0.5"
    >
      <div className="container position-relative zindex-5 py-5">
        <div className="row justify-content-md-start justify-content-center">
          <div className="col-md-6 col-sm-8 order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center">
            <div className="mb-md-5 pb-xl-5 mb-4">
              {/* Video popup btn */}
              <div className="d-inline-flex align-items-center position-relative mb-3">
                <a
                  href="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
                  className="btn btn-video btn-icon btn-lg flex-shrink-0 me-3 stretched-link"
                  data-bs-toggle="video"
                  aria-label="Play video"
                >
                  <i className="bx bx-play"></i>
                </a>
                <h4 className="mb-0">Etqan Agency Promo</h4>
              </div>
              {/* Text */}
              <h1 className="display-2 mb-md-5 mb-3 pb-3">
                We <span className="text-gradient-primary">Transform</span> Your Ideas into Reality
              </h1>
              <div className="d-md-flex align-items-md-start">
                <a href="#" className="btn btn-lg btn-primary flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3">
                  Work with us
                </a>
                <p className="d-lg-block d-none mb-0 ps-md-3" style={{ textAlign: "justify" }}>
                 Founded in 2020 and head office in Riyadh, Saudi Arabia, is a trusted partner in digital transformation. We deliver cutting-edge IT services designed to optimize operations, enhance security, and accelerate growth for organizations across diverse sectors.
                </p>
              </div>
            </div>
            {/* Scroll down btn */}
            <div className="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative">
              <a
                href="#benefits"
                data-scroll
                data-scroll-offset="100"
                className="btn btn-video btn-icon rounded-circle shadow-sm flex-shrink-0 stretched-link me-3"
                aria-label="Scroll for more"
              >
                <i className="bx bx-chevron-down"></i>
              </a>
              <span className="fs-sm">Discover more</span>
            </div>
          </div>
          {/* Animated gfx */}
          <div className="col-sm-6 col-9 order-md-2 order-1">
            <lottie-player
              className="mx-auto"
              src="/assets/json/animation-digital-agency.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>
  )
}
