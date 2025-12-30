import React from "react";
import Link from "next/link";
import './mainservices.css'
const MainServices = ({ data }) => {
  if (!data?.MainServices?.length) return null;

  return (
   
    

      <section className="services-section">
        {/* Heading */}
        <h3 className="service-heading">Our Services</h3>

        {/* Services Grid - all rows in one container */}
        <div className="services-grid">
          {data.MainServices.map((service) => {
            const isRight = service.imageAlignment === "Right";

            return (
              <div
                key={service.id}
                className={`service-row ${isRight ? 'image-right' : 'image-left'}`}
              >
                {/* IMAGE */}
                <div
                  className="service-image"
                  style={{
                    backgroundImage: `url(${service.image?.url})`,
                  }}
                ></div>

                {/* CONTENT */}
                <div className="service-content">
                  {/* CARET */}
                  <div className="service-caret"></div>

                  <div className="service-inner">
                    <h5 className="service-title">
                      {service.title}
                    </h5>

                    <p className="service-text">
                      {service.text}
                    </p>

                    <Link href={`/${service.ctaUrl}`} className=" btn btn-outline-primary">
                      {service.ctaText || "Learn More"}
                      <span className="service-arrow ">&nbsp;→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  
  );
};

export default MainServices;