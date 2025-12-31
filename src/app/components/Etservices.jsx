import React from "react";
//This is the landing page services component
function Services({ data }) {
  if (!data || !data.services) return null;

  return (
    <section className="bg-secondary pb-md-2 pb-lg-5 mt-5">
      <div className="container pb-4 pt-5">
        <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">
          {data.heading}
        </h2>
        <div className="row align-items-center pb-5 mb-lg-2">
          <div className="col-md-8 text-center text-md-start">
            <p className="fs-lg text-muted mb-md-0">{data.summary}</p>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            <a href="/services" className="btn btn-outline-primary btn-lg">
              See all services
            </a>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2">
          {data.services.map((service) => (
            <div key={service.id} className="col py-4 my-2 my-sm-3">
              <a
                href={`/services/${service.slug}`}
                className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
              >
                <div className="card-body pt-3">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    {service.serviceIcon?.url && (
                      <img
                        src={service.serviceIcon.url}
                        alt={service.serviceIcon.alternativeText || service.title}
                        width="55"
                        className="d-block m-1"
                      />
                    )}
                  </div>
                  <h2 className="h4 d-inline-flex align-items-center text-muted">
                    {service.title}
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                  </h2>
                  <p className="fs-sm mb-0 text-muted">{service.summary}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
