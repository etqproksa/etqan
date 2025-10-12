"use client";

import React, { useState } from "react";
import Image from "next/image";

const VideoSection = ({ data }) => {
  const [videoOpen, setVideoOpen] = useState(false);

  if (!data) return null;
console.log("this is the video data",data)
  const { videolink, coverImage } = data;

  return (
    <>
      <section className="container pb-5 mt-5 mt-md-0 mb-md-2 mb-lg-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="position-relative rounded-3 overflow-hidden">
              {/* Play Button */}
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
                <button
                  className="btn btn-video btn-icon btn-xl stretched-link bg-white"
                  aria-label="Play video"
                  onClick={() => setVideoOpen(true)}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  <i className="bx bx-play"></i>
                </button>
              </div>

              {/* Dark Overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-35"></div>

              {/* Video Thumbnail */}
              <div className="w-100" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={coverImage?.url || "/assets/img/landing/digital-agency/cover.jpg"}
                  alt={coverImage?.alternativeText || "Video thumbnail"}
                  fill
                  className="object-cover rounded-3"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{
              maxWidth: "min(400px, 90vw)",
              margin: "1rem auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-transparent border-0">
              <div className="modal-header border-0 pb-2">
                <button
                  type="button"
                  className="btn-close btn-close-white ms-auto"
                  onClick={() => setVideoOpen(false)}
                ></button>
              </div>
              <div className="modal-body p-0">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: "60vh" }}
                >
                  <iframe
                    src={videolink}
                    style={{
                      border: "none",
                      width: "min(350px, 90vw)",
                      height: "min(600px, 80vh)",
                      maxWidth: "100%",
                      borderRadius: "10px",
                    }}
                    frameBorder="0"
                    allow="encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title="Video Player"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
