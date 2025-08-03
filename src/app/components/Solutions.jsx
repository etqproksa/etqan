export default function Solutions() {
  return (

    <section className="pb-5 mb-2 mb-md-4 mb-lg-5" style ={{paddingTop: "80px"}}>
      <div className="bg-secondary pb-lg-4 pb-xl-5">
        <div className="container pb-4 pb-md-5">
          <div className="row">
            <div className="col-xl-5 col-lg-6" style={{marginTop: "-80px"}}>

             {/* Swiper tabs */}
              <div className="swiper-tabs mx-auto" style={{ maxWidth: "526px" }}>
                <div id="image-1" className="swiper-tab active">
                  <img src="assets/img/landing/medical/cta/01.jpg" className="rounded-3" alt="Image"/>
                </div>
                <div id="image-2" className="swiper-tab">
                  <img src="assets/img/landing/medical/cta/02.jpg" className="rounded-3" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1 pt-2 pt-md-4 pt-lg-5 mt-4">

             {/* Slider prev/next buttons */}
              <div className="d-flex justify-content-center justify-content-lg-start pb-3 mb-3">
                <button type="button" id="prev" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
                  <i className="bx bx-chevron-left"></i>
                </button>
                <button type="button" id="next" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
                  <i className="bx bx-chevron-right"></i>
                </button>
              </div>

             {/* Swiper slider */}
              <div className="swiper mx-0 mb-md-n2 mb-xxl-n3" data-swiper-options='{
                "spaceBetween": 30,
                "loop": true,
                "tabs": true,
                "navigation": {
                  "prevEl": "#prev",
                  "nextEl": "#next"
                }
              }'>
                <div className="swiper-wrapper text-center text-lg-start">

                 {/* Item */}
                  <div className="swiper-slide pb-4" data-swiper-tab="#image-1">
                    <h2 className="h1 mb-4">New Service — Start Your Care <span className="text-success">Online</span> Now</h2>
                    <p className="pb-2 pb-xl-0 mb-4 mb-xl-5">Morbi lacus vulputate mauris ut et nunc, tempor. Placerat augue eu amet feugiat mi sagittis velit. Sed suscipit nunc suspendisse morbi pharetra libero consectetur. Proin eros sollicitudin augue tempus. Aliquet id sit donec aliquam.</p>
                    <a href="#" className="btn btn-success btn-lg shadow-success">Learn more</a>
                  </div>

                 {/* Item */}
                  <div className="swiper-slide pb-4" data-swiper-tab="#image-2">
                    <h2 className="h1 mb-4">Support Groups for <span className="text-danger">Depression</span> &amp; Anxiety</h2>
                    <p className="pb-2 pb-xl-0 mb-4 mb-xl-5">Magna cursus feugiat sed sodales praesent vehicula integer arcu. Felis duis lectus felis, tempus aliquet quis non. At integer consectetur eget nunc, fames. Et facilisi vel, luctus sed interdum vitae nec, velit. Maecenas purus et pharetra, at volutpat aenean.</p>
                    <a href="#" className="btn btn-danger btn-lg shadow-danger">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
