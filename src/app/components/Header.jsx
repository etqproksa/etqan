export default function Header() {
  return (
    <header className="header navbar navbar-expand-lg position-absolute navbar-sticky">
      <div className="container px-3">
        <a href="/" className="navbar-brand pe-3">
          <img src="/assets/img/logo.svg" width="47" alt="Silicon" />
          Etqan
        </a>
        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link " data-bs-toggle="dropdown" aria-current="page">
                 Home
                </a>
                {/* <div className="dropdown-menu p-0">
                  <div className="d-lg-flex">
                    <div
                      className="mega-dropdown-column d-flex justify-content-center align-items-center rounded-3 rounded-end-0 px-0"
                      style={{ margin: "-1px", backgroundColor: "#f3f6ff" }}
                    >
                      <img src="/assets/img/landings.jpg" alt="Landings" />
                    </div>
                    <div
                      className="mega-dropdown-column pt-lg-3 pb-lg-4"
                      style={{ "--si-mega-dropdown-column-width": "15rem" }}
                    >
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="/" className="dropdown-item">
                            Template Intro Page
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Mobile App Showcase v.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Mobile App Showcase v.2
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Mobile App Showcase v.3<span className="badge bg-success ms-2">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item d-flex align-items-center">
                            Product Landing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            SaaS v.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            SaaS v.2
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            SaaS v.3
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            SaaS v.4
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            SaaS v.5<span className="badge bg-success ms-2">New</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#" className="dropdown-item d-flex align-items-center">
                            Startup
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Financial Consulting
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Online Courses
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Medical
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Software Dev Agency v.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Software Dev Agency v.2
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Software Dev Agency v.3
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Conference
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Digital Agency
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Blog Homepage
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  What We Do
                </a>
                <div className="dropdown-menu">
                  <div className="d-lg-flex pt-lg-3">
                    <div className="mega-dropdown-column">
                      <h6 className="px-3 mb-2">Services</h6>
                      <ul className="list-unstyled mb-3">
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            About v.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            About v.2
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            About v.3
                          </a>
                        </li>
                      </ul>
                      <h6 className="px-3 mb-2">Solutions</h6>
                      <ul className="list-unstyled mb-3">
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            List View with Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Grid View with Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            List View no Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Grid View no Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Simple Feed
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Single Post
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Podcast
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-dropdown-column">
                      <h6 className="px-3 mb-2">Portfolio</h6>
                      <ul className="list-unstyled mb-3">
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Grid View
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            List View
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Slider View
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Courses
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Single Project
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Single Course
                          </a>
                        </li>
                      </ul>
                      <h6 className="px-3 mb-2">Services</h6>
                      <ul className="list-unstyled mb-3">
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Services v.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Services v.2
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Service Details v.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Service Details v.2
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-dropdown-column">
                      <h6 className="px-3 mb-2">Pricing</h6>
                      <ul className="list-unstyled mb-3">
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Pricing Page
                          </a>
                        </li>
                      </ul>
                      <h6 className="px-3 mb-2">Contacts</h6>
                      <ul className="list-unstyled mb-3">
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Contacts v.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Contacts v.2
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            Contacts v.3
                          </a>
                        </li>
                      </ul>
                      <h6 className="px-3 mb-2">Specialty</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            404 Error v.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item py-1">
                            404 Error v.2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Why Etqan Projects
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Account Details
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Messages
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Saved Items
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      My Collections
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Payment Details
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </li>
           <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                 Sectors
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Account Details
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Messages
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Saved Items
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      My Collections
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Payment Details
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </li>
               <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                     Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      FAQs
                    </a>
                  </li>               
                
                </ul>
              </li>
            </ul>
          </div>
          <div className="offcanvas-header border-top">
            <a href="#" className="btn btn-primary w-100" target="_blank" rel="noreferrer noopener">
              <i className="bx bx-cart fs-4 lh-1 me-1"></i>
              &nbsp;Buy now
            </a>
          </div>
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          href="#"
          className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="bx bx-cart fs-5 lh-1 me-1"></i>
          &nbsp;Buy now
        </a>
      </div>
    </header>
  )
}
