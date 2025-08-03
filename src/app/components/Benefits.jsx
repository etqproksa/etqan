export default function Benefits() {
  return (
   
      <section className="container py-5 mb-2 mb-md-4 mb-lg-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 pt-2 pt-md-4 pb-lg-2">

          {/* Item */}
          <div className="col">
            <div className="card flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100">
              <img src="assets/img/landing/medical/icons/doctor.svg" width="168" alt="Doctor icon" />
              <div className="card-body text-center text-sm-start text-md-center text-xxl-start pb-3 pb-sm-2 pb-md-3 pb-xxl-2">
                <h3 className="h5 mb-2 mt-n4 mt-sm-0 mt-md-n4 mt-xxl-0">Find a Doctor</h3>
                <p className="fs-sm mb-1">Search the right doctor by location and specialty.</p>
                <a href="#" className="btn btn-link stretched-link px-0">
                  See all doctors
                  <i className="bx bx-right-arrow-alt fs-xl ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="card flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100">
              <img src="assets/img/landing/medical/icons/ambulance.svg" width="168" alt="Ambulance icon" />
              <div className="card-body text-center text-sm-start text-md-center text-xxl-start pb-3 pb-sm-2 pb-md-3 pb-xxl-2" />
                <h3 className="h5 mb-3 mt-n4 mt-sm-0 mt-md-n4 mt-xxl-0">Emergency Service</h3>
                <p className="d-flex align-items-center text-nav fs-xl fw-medium mb-2">
                  <i className="bx bx-phone-call fs-4 text-muted me-1"></i>
                  (406) 555-0120
                </p>
                <a href="#" className="btn btn-link stretched-link px-0">
                  Contact us
                  <i className="bx bx-right-arrow-alt fs-xl ms-1"></i>
                </a>
              </div>
            </div>
          

          {/* Item */}
          <div className="col">
            <div className="card flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100">
              <img src="assets/img/landing/medical/icons/virus.svg" width="168" alt="Virus icon" />
              <div className="card-body text-center text-sm-start text-md-center text-xxl-start pb-3 pb-sm-2 pb-md-3 pb-xxl-2">
                <h3 className="h5 mb-2 mt-n4 mt-sm-0 mt-md-n4 mt-xxl-0">COVID-19 Info</h3>
                <p className="fs-sm mb-1">We offer quick COVID-19 testing by appointment.</p>
                <a href="#" className="btn btn-link stretched-link px-0">
                  Learn more
                  <i className="bx bx-right-arrow-alt fs-xl ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
