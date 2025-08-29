export default function Footer() {
  return (
    <footer className="footer bg-secondary pt-5 pb-4 pb-lg-5 mt-2 mt-md-0">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              <img src="/assets/img/etqanlogo.png" width="130" alt="Silicon" />
             
            </div>
            <p className="fs-sm pb-lg-3 mb-4">
              Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam
              proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor
              ullamcorper sodales ultrices eros.
            </p>
          
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <a
                    href="#useful-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Useful Links
                  </a>
                </h6>
                <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column pb-lg-1 mb-lg-3">
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Our Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Blog
                      </a>
                    </li>
                  </ul>
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <h6 className="mb-2">
                  <a
                    href="#social-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Socials
                  </a>
                </h6>
                <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Facebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        LinkedIn
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">
                        Behance
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
               {/**you can add fourth column here  */}
              </div>
            </div>
          </div>
        </div>
        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          &copy; All rights reserved. Made by{" "}
          <a
            className="nav-link d-inline-block p-0"
            href="https://createx.studio/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Createx Studio
          </a>
        </p>
      </div>
    </footer>
  )
}
