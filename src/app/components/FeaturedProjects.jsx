import React from 'react'

const FeaturedProjects = () => {
  return (
  
      <section className="container mb-5 pt-lg-2 pt-xl-4 pb-2 pb-md-3 pb-lg-5 " style={{marginTop:"5rem"}}>
        <h2 className="h1 mb-4 text-center">Benefits of Choosing Etqan Projects</h2>
       <p className="mb-4 mx-auto pb-3 fs-lg text-center" style={{ maxWidth: "636px" }}>
        We create websites and mobile apps, marketing materials, branding, web design, UX/UI design and illustrations.
       </p>
      
        
        <div className="swiper" data-swiper-options='{
          "slidesPerView": 1,
          "spaceBetween": 24,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "560": {
              "slidesPerView": 2
            },
            "960": {
              "slidesPerView": 3
            }
          }
        }'>
          <div className="swiper-wrapper">

           {/* Item */}
            <div className="swiper-slide">
              <a href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" style={{ background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%);" }}></span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-md-3">
                    <h3 className="h4 text-white mb-0">E-commerce</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Order processing, price suggestions, user research</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <img src="assets/img/landing/saas-5/categories/ecommerce.jpg" alt="Ecommerce" />
                </div>
              </a>
            </div>

           {/* Item */}
            <div className="swiper-slide">
              <a href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" style={{ background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%);" }}></span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-md-3">
                    <h3 className="h4 text-white mb-0">Transportation</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Itinerary planning, freight pricing culculations, etc.</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <img src="assets/img/landing/saas-5/categories/transportation.jpg" alt="Transportation" />
                </div>
              </a>
            </div>

           {/* Item */}
            <div className="swiper-slide">
              <a href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" style={{ background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%);" }}></span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-md-3">
                    <h3 className="h4 text-white mb-0">Marketing</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Market research, data visualization, user testing</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <img src="assets/img/landing/saas-5/categories/marketing.jpg" alt="Marketing" />
                </div>
              </a>
            </div>

           {/* Item */}
            <div className="swiper-slide">
              <a href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" style={{ background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%);" }}></span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-3">
                    <h3 className="h4 text-white mb-0">Robotics</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Enhancing robot learning, improve robotic precision</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <img src="assets/img/landing/saas-5/categories/robotics.jpg" alt="Robotics" />
                </div>
              </a>
            </div>

           {/* Item */}
            <div className="swiper-slide">
              <a href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" style={{ background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%);" }}></span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-3">
                    <h3 className="h4 text-white mb-0">Programming</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Code generation, code debugging and optimization</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <img src="assets/img/landing/saas-5/categories/programming.jpg" alt="Programming" />
                </div>
              </a>
            </div>
          </div>

         {/* Pagination (bullets) */}
          <div className="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
        </div>
      </section>
  )
}

export default FeaturedProjects