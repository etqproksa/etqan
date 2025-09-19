"use client";
import Link from "next/link";

export default function Header({ header, menuLinks, dropdown }) {
  const logo = header?.logo?.[0];
  const links = menuLinks?.Menulinks || [];
  const sections = dropdown?.sections || [];

  return (
    <header className="header navbar navbar-expand-lg position-absolute navbar-sticky">
      <div className="container px-3">
        <Link href="/" className="navbar-brand pe-3">
          {logo ? (
            <img src={logo.url} width="130" alt={logo.alternativeText || logo.name} />
          ) : (
            <span>Etqan</span>
          )}
        </Link>

        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Menu links */}
              {links.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link href={item.url || "#"} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* Dropdown (Sectors) */}
              {dropdown && (
                <li className="nav-item dropdown">
                  <a
                    href={dropdown.titleUrl || "#"}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {dropdown.title}
                  </a>
                  <ul className="dropdown-menu">
                    {sections.map((section) =>
                      section.Links.map((link) => (
                        <li key={link.id}>
                          <Link href={link.url || "#"} className="dropdown-item">
                            {link.title}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </li>
              )}
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
      </div>
    </header>
  );
}
