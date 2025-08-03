export default function Awards() {
  return (
    <section className="container mb-5 pb-2 pb-md-4 pb-lg-5">
      <div className="row gy-4 py-xl-2">
        <div className="col-md-4">
          <h2 className="mb-0 text-md-start text-center">Award-winning designs featured by</h2>
        </div>
        <div className="col-lg-7 offset-lg-1 col-md-8">
          <div className="row row-cols-sm-4 row-cols-2 gy-4">
            <div className="col">
              <div className="position-relative text-center">
                <img
                  src="/assets/img/landing/digital-agency/awards/webby.svg"
                  width="100"
                  alt="Webby"
                  className="d-block mx-auto mb-3"
                />
                <a href="#" className="text-body justify-content-center fs-sm stretched-link text-decoration-none">
                  4x mobile of the day
                </a>
              </div>
            </div>
            <div className="col">
              <div className="position-relative text-center">
                <img
                  src="/assets/img/landing/digital-agency/awards/cssda.svg"
                  width="100"
                  alt="CSSDA"
                  className="d-block mx-auto mb-3"
                />
                <a href="#" className="text-body justify-content-center fs-sm stretched-link text-decoration-none">
                  1x Kudos
                </a>
              </div>
            </div>
            <div className="col">
              <div className="position-relative text-center">
                <img
                  src="/assets/img/landing/digital-agency/awards/awwwards.svg"
                  width="100"
                  alt="Awwwards"
                  className="d-block mx-auto mb-3"
                />
                <a href="#" className="text-body justify-content-center fs-sm stretched-link text-decoration-none">
                  3x website of the day
                </a>
              </div>
            </div>
            <div className="col">
              <div className="position-relative text-center">
                <img
                  src="/assets/img/landing/digital-agency/awards/fwa.svg"
                  width="100"
                  alt="FWA"
                  className="d-block mx-auto mb-3"
                />
                <a href="#" className="text-body justify-content-center fs-sm stretched-link text-decoration-none">
                  2x best website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
