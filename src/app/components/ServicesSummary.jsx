import React from 'react'

function ServicesSummary() {
  return (
    <section className="container mb-5 pt-lg-5" id="benefits">
        <div className="swiper pt-3" data-swiper-options='{
          "slidesPerView": 1,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 2
            },
            "991": {
              "slidesPerView": 3
            }
          }
        }'>
          <div className="swiper-wrapper">

            {/* Item */}
            <div className="swiper-slide border-end-lg px-2">
              <div className="text-center">
                <img src="assets/img/landing/digital-agency/icons/idea.svg" width="48" alt="Bulb icon" className="d-block mb-4 mx-auto" />
                <h4 className="mb-2 pb-1">Creative Solutions</h4>
                <p className="mx-auto" style={{maxWidth: "336px"}}>Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.</p>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide border-end-lg px-2">
              <div className="text-center">
                <img src="assets/img/landing/digital-agency/icons/award.svg" width="48" alt="Award icon" className="d-block mb-4 mx-auto" />
                <h4 className="mb-2 pb-1">Award Winning</h4>
                <p className="mx-auto" style={{maxWidth: "336px"}}>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.</p>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide px-2">
              <div className="text-center">
                <img src="assets/img/landing/digital-agency/icons/team.svg" width="48" alt="Team icon" className="d-block mb-4 mx-auto" />
                <h4 className="mb-2 pb-1">Team of Professionals</h4>
                <p className="mx-auto" style={{maxWidth: "336px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>

          {/* Pagination (bullets) */}
          <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </div>
      </section>
  )
}

export default ServicesSummary