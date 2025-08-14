import React from 'react'

function Videocomp() {
  return (
      
      <section className="container text-center pb-5 mb-3 mb-md-4 mb-lg-5 mt-5">
        <h2 className="h1 pt-1 mb-4">See What Makes Us Different</h2>
        <div className="row justify-content-center mb-md-2 mb-lg-5">
          <div className="col-lg-6 col-md-8">
            <p className="fs-lg text-muted mb-lg-0">Your best care begins here. Hurry up to get top health care quality from leading doctors of the world.</p>
          </div>
        </div>
        <div className="position-relative rounded-3 overflow-hidden mb-lg-3">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
            <a href="https://www.youtube.com/watch?v=wJC1LFT_GD0" className="btn btn-video btn-icon btn-xl stretched-link bg-white" data-bs-toggle="video" aria-label="Play video">
              <i className="bx bx-play"></i>
            </a>
          </div>
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
          <img src="assets/img/landing/medical/video-cover.jpg" alt="Cover image" />
        </div>
      </section>
  )
}

export default Videocomp