import React from 'react'
import {
  DatabaseBackup,
  UserRoundCog,
  MonitorCog ,
  Drill,
  TrendingUpDown ,
  ShieldIcon as ShieldUser,
  BrickWallFire ,
  BrainCircuit,
} from "lucide-react"
function Services() {
  return (

      <section className="bg-secondary pb-md-2 pb-lg-5 mt-5">

        <div className="container pb-4 pt-5">
          <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">Our Services</h2>
          <div className="row align-items-center pb-5 mb-lg-2">
            <div className="col-md-8 text-center text-md-start">
              <p className="fs-lg text-muted mb-md-0">We are focused on helping brands grow through digital transformation services. We bring real solutions to each client’s problems through a deep understanding of their market, solution, and vision.</p>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
              <a href="services-v1.html" className="btn btn-outline-primary btn-lg">See all services</a>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2">

           {/*Item*/}
            <div className="col py-4 my-2 my-sm-3">
              <a href="services-single-v1.html" className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                <div className="card-body pt-3">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                   <MonitorCog size={40} />
                  </div>
                  <h2 className="h4 d-inline-flex align-items-center">
                    Custom Software Development
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                  </h2>
                  <p className="fs-sm text-body mb-0">Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas.</p>
                </div>
              </a>
            </div>
  
           {/*Item*/}
            <div className="col py-4 my-2 my-sm-3">
              <a href="services-single-v1.html" className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                <div className="card-body pt-3">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <img src="assets/img/services/icons/rocket.svg" className="d-block m-1" width="40" alt="Icon" />
                  </div>
                  <h2 className="h4 d-inline-flex align-items-center">
                    Software Integration
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                  </h2>
                  <p className="fs-sm text-body mb-0">Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.</p>
                </div>
              </a>
            </div>
  
           {/*Item*/}
            <div className="col py-4 my-2 my-sm-3">
              <a href="services-single-v1.html" className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                <div className="card-body pt-3">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <img src="assets/img/services/icons/mobile-app.svg" className="d-block m-1" width="40" alt="Icon" />
                  </div>
                  <h2 className="h4 d-inline-flex align-items-center">
                    Mobile App Development
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                  </h2>
                  <p className="fs-sm text-body mb-0">Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci, dictum nunc mus quis semper eu bibendum enim, morbi.</p>
                </div>
              </a>
            </div>
  
           {/*Item*/}
            <div className="col py-4 my-2 my-sm-3">
              <a href="services-single-v1.html" className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                <div className="card-body pt-3">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <img src="assets/img/services/icons/analytics.svg" className="d-block m-1" width="40" alt="Icon" />
                  </div>
                  <h2 className="h4 d-inline-flex align-items-center">
                    Business Analytics
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                  </h2>
                  <p className="fs-sm text-body mb-0">Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet varius nunc a sed.</p>
                </div>
              </a>
            </div>
  
           {/*Item*/}
            <div className="col py-4 my-2 my-sm-3">
              <a href="services-single-v1.html" className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                <div className="card-body pt-3">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <img src="assets/img/services/icons/web-search.svg" className="d-block m-1" width="40" alt="Icon" />
                  </div>
                  <h2 className="h4 d-inline-flex align-items-center">
                    Software Testing
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                  </h2>
                  <p className="fs-sm text-body mb-0">Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies.</p>
                </div>
              </a>
            </div>
  
           {/*Item*/}
            <div className="col py-4 my-2 my-sm-3">
              <a href="services-single-v1.html" className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                <div className="card-body pt-3">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <img src="assets/img/services/icons/timer.svg" className="d-block m-1" width="40" alt="Icon" />
                  </div>
                  <h2 className="h4 d-inline-flex align-items-center">
                    Project Management
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                  </h2>
                  <p className="fs-sm text-body mb-0">Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services