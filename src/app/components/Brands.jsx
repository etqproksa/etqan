export default function Brands() {
  return (
    <section className="container pb-4 pb-lg-5 mb-3">
      <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
        <h2 className="mb-0">Trusted by Awesome Clients</h2>
        {/* Slider prev/next buttons + Quotation mark */}
        <div className="d-md-flex d-none ms-4">
          <button type="button" id="prev-brand" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
            <i className="bx bx-chevron-left"></i>
          </button>
          <button type="button" id="next-brand" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <div
        className="swiper mx-n2"
        data-swiper-options='{
          "slidesPerView": 2,
          "navigation": {
            "prevEl": "#prev-brand",
            "nextEl": "#next-brand"
          },
          "loop": true,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 3,
              "spaceBetween": 8
            },
            "650": {
              "slidesPerView": 4,
              "spaceBetween": 8
            },
            "900": {
              "slidesPerView": 5,
              "spaceBetween": 8
            },
            "1100": {
              "slidesPerView": 6,
              "spaceBetween": 8
            }
          }
        }'
      >
        <div className="swiper-wrapper">
          {/* Item */}
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/01.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          {/* Item */}
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/02.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          {/* Item */}
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/03.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          {/* Item */}
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/04.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          {/* Item */}
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/05.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          {/* Item */}
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/06.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          {/* Repeat items for loop */}
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/01.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/02.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/03.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/04.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/05.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img src="/assets/img/brands/06.svg" className="d-block mx-auto my-2" width="154" alt="Brand" />
            </a>
          </div>
        </div>
        {/* Pagination (bullets) */}
        <div className="swiper-pagination position-relative pt-3 mt-4 d-md-none d-flex"></div>
      </div>
    </section>
  )
}
