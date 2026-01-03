import React from "react";
import Link from "next/link";
import './mainservices.css';
import ReactMarkdown from "react-markdown";
const MainSolutions = ({ data }) => {
  if (!data?.MainSolutions?.length) return null;

  return (
      <section className="services-section">
        {/* Heading */}
        <h1 className="mb-5">Our Solutions</h1>

        {/* Services Grid - all rows in one container */}
        <div className="services-grid">
          {data.MainSolutions.map((solution) => {
            const isRight = solution.imageAlignment === "Right";
            return (
              <div
                key={solution.id}
                className={`service-row ${isRight ? 'image-right' : 'image-left'}`}
              >
                {/* IMAGE */}
                <div
                  className="service-image"
                  style={{
                    backgroundImage: `url(${solution.image?.url})`,
                  }}
                ></div>

                {/* CONTENT */}
                <div className="service-content">
                  {/* CARET */}
                  <div className="service-caret"></div>

                  <div className="service-inner">
                    <h4 className="mb-3">
                      {solution.title}
                    </h4>

                  <div className="markdown-container">
                          <ReactMarkdown>{solution.text}</ReactMarkdown>
                  </div>

                    <Link href={`/${solution.ctaUrl}`} className=" btn btn-outline-primary">
                      {solution.ctaText || "Learn More"}
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

export default MainSolutions;