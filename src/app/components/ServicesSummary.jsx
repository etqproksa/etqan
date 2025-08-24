import React from 'react'
import {
  DatabaseBackup,
  UserRoundCog,
  MonitorCog ,
  FolderClock,
  TrendingUpDown ,
  ShieldIcon as ShieldUser,
  BrickWallFire ,
  BrainCircuit,
} from "lucide-react"
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
              <FolderClock  color="#A754F3"  size={48} strokeWidth={2} />
                <h5 className="mb-2 pb-1">Managed IT Serivices</h5>
                <p className="mx-auto" style={{maxWidth: "336px"}}>Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.</p>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide border-end-lg px-2">
              <div className="text-center">
               <BrickWallFire  color="#A754F3"  size={48} strokeWidth={2} />
                <h5 className="mb-2 pb-1">Cybersecurity & Compliance</h5>
                <p className="mx-auto" style={{maxWidth: "336px"}}>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.</p>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide px-2">
              <div className="text-center">
               <BrainCircuit color="#A754F3"  size={48} strokeWidth={2} />
                <h5 className="mb-2 pb-1">Digital Transformation Advisory</h5>
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