export default function FeaturedProjects() {
  return (
    <section className="container mb-5 pt-lg-2 pt-xl-4 pb-2 pb-md-3 pb-lg-5">
      <h2 className="h1 mb-4 text-center">Benefits of Choosing Etqan Projects</h2>
      <p className="mb-4 mx-auto pb-3 fs-lg text-center" style={{ maxWidth: "636px" }}>
        We create websites and mobile apps, marketing materials, branding, web design, UX/UI design and illustrations.
      </p>
      {/* Portfolio grid */}
      <div className="masonry-grid row g-md-4 g-3 mb-4">
        {/* Item */}
        <div className="masonry-grid-item col-md-4 col-sm-6 col-12">
          <a href="#" className="card card-portfolio card-hover bg-transparent border-0">
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
              <div className="position-relative zindex-2">
                <h3 className="h5 text-light mb-2">Expertise & Experience</h3>
                <span className="fs-sm text-light opacity-70">3D Render / Graphic Design / Motion Design</span>
              </div>
            </div>
            <div className="card-img">
              <img src="/assets/img/portfolio/grid/29.jpg" className="rounded-3" alt="Image" />
            </div>
          </a>
        </div>
        {/* Item */}
        <div className="masonry-grid-item col-md-4 col-sm-6 col-12">
          <a href="#" className="card card-portfolio card-hover bg-transparent border-0">
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
              <div className="position-relative zindex-2">
                <h3 className="h5 text-light mb-2">Inovative Solutions</h3>
                <span className="fs-sm text-light opacity-70">We proud overselves to be inovative and stay ahead of curve</span>
              </div>
            </div>
            <div className="card-img">
              <img src="/assets/img/portfolio/grid/27.jpg" className="rounded-3" alt="Image" />
            </div>
          </a>
        </div>
        {/* Item */}
        <div className="masonry-grid-item col-md-4 col-sm-6 col-12">
          <a href="#" className="card card-portfolio card-hover bg-transparent border-0">
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
              <div className="position-relative zindex-2">
                <h3 className="h5 text-light mb-2">Security & Compliance</h3>
                <span className="fs-sm text-light opacity-70">3D Pollygonal Shape / Graphic Design / Art</span>
              </div>
            </div>
            <div className="card-img">
              <img src="/assets/img/portfolio/grid/security.jpg" className="rounded-3" alt="Image" />
            </div>
          </a>
        </div>
        {/* Item */}
        <div className="masonry-grid-item col-md-8 col-12">
          <a href="#" className="card card-portfolio card-hover bg-transparent border-0">
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
              <div className="position-relative zindex-2">
                <h3 className="h5 text-light mb-2">Commitment to Quality</h3>
                <span className="fs-sm text-light opacity-70">3D Design / Illustration / Art</span>
              </div>
            </div>
            <div className="card-img">
              <img src="/assets/img/portfolio/grid/quality2.jpg" className="rounded-3" alt="Image" />
            </div>
          </a>
        </div>
      </div>
      <div className="pt-md-3 pt-2 text-center">
        <a href="#" className="btn btn-lg btn-primary w-sm-auto w-100">
          Explore all
        </a>
      </div>
    </section>
  )
}
