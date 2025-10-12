"use client";

import React from "react";

const TextBoxWithImage = ({ data }) => {
  if (!data) return null;

  const { title, text, image, imageAlignment } = data;

  // Determine layout based on imageAlignment ("Left" or "Right")
  const isLeft = imageAlignment?.toLowerCase() === "left";

  return (
    <section className="container my-5">
      <div className="card overflow-hidden border-0 shadow-sm">
        <div className="row g-0 align-items-center">
          {/* Image Column */}
          <div
            className={`col-sm-4 bg-repeat-0 bg-size-cover ${
              isLeft ? "" : "order-sm-2"
            }`}
            style={{
              backgroundImage: `url(${image?.url})`,
              minHeight: "20rem",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Text Column */}
          <div className={`col-sm-8 ${isLeft ? "" : "order-sm-1"}`}>
            <div className="card-body">
              {title && <h3 className="card-title mb-3">{title}</h3>}
              {text && <p className="card-text fs-sm text-muted">{text}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBoxWithImage;
