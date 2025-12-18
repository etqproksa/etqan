"use client";
import React, { useEffect, useState } from "react";
import { ImageUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ headerdata, menu }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const logo = headerdata?.logo?.[0];
  const sections = menu?.sections || [];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close the offcanvas menu
  const closeOffcanvas = () => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const offcanvasEl = document.getElementById("navbarNav");
      if (offcanvasEl) {
        // ✅ force instance creation if not present
        const offcanvas = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
        offcanvas.hide();
      }
    }
  };

  return (
    <header 
      className={`header navbar navbar-expand-lg fixed-top shadow-sm ${isScrolled ? 'scrolled' : ''}`}
      style={{
        backgroundColor: isScrolled ? '#131222' : 'transparent',
        transition: 'background-color 0.3s ease'
      }}
    >
      <div className="container px-3">
        <Link href="/" className="navbar-brand pe-3" onClick={closeOffcanvas}>
          {logo ? (
            <img src={logo.url} width="130" alt={logo.alternativeText || logo.name} />
          ) : (
            <span>Etqan Project</span>
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarNav"
          className="offcanvas offcanvas-end flex-grow-1"
          tabIndex={-1}
          aria-labelledby="navbarNavLabel"
        >
          <div className="offcanvas-header border-bottom d-lg-none">
            <h5 className="offcanvas-title" id="navbarNavLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {sections.map((section) => (
                section.dropdown?.length > 0 ? (
                  <li key={section.id} className="nav-item dropdown">
                    <div className="d-flex align-items-center">
                      <Link
                        href={section.headingUrl || "#"}
                        className={`nav-link pe-1 ${pathname === section.headingUrl ? "active" : ""}`}
                        onClick={closeOffcanvas}
                      >
                        {section.heading}
                      </Link>
                      <a
                        href="#"
                        className="nav-link dropdown-toggle ps-0"
                        role="button"
                        data-bs-toggle="dropdown"
                        onClick={(e) => e.preventDefault()}
                      ></a>
                    </div>
                    <ul className="dropdown-menu">
                      {section.dropdown.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.titleUrl || "#"}
                            className="dropdown-item text-wrap text-break"
                            onClick={closeOffcanvas}
                          >
                            {item.title} 
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={section.id} className="nav-item">
                    <Link
                      href={section.headingUrl || "#"}
                      className={`nav-link ${pathname === section.headingUrl ? "active" : ""}`}
                      onClick={closeOffcanvas}
                    >
                      {section.heading}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}