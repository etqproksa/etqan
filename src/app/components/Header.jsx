"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ headerdata, menu }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  // track which dropdown is open by section id
  const [openDropdown, setOpenDropdown] = useState(null);
  const hoverTimerRef = useRef(null);

  const logo = headerdata?.logo?.[0];
  const sections = menu?.sections || [];

  /* ── scroll effect ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── close offcanvas (mobile) ── */
  const closeOffcanvas = () => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const el = document.getElementById("navbarNav");
      if (el) window.bootstrap.Offcanvas.getOrCreateInstance(el).hide();
    }
  };

  /* ── hover handlers with small delay to avoid flicker ── */
  const handleMouseEnter = (id) => {
    clearTimeout(hoverTimerRef.current);
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    hoverTimerRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  /* ── find the "services" headingUrl from sections to use as View All link ── */
  const getViewAllUrl = (section) => section.headingUrl || "/services";

  return (
    <>
      <header
        className={`header navbar navbar-expand-lg fixed-top shadow-sm ${isScrolled ? "scrolled" : ""}`}
        style={{
          backgroundColor: isScrolled ? "#131222" : "transparent",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="container px-3">
          {/* ── Logo ── */}
          <Link href="/" className="navbar-brand pe-3" onClick={closeOffcanvas}>
            {logo ? (
              <img src={logo.url} width="130" alt={logo.alternativeText || logo.name} />
            ) : (
              <span>Etqan Project</span>
            )}
          </Link>

          {/* ── Mobile toggler ── */}
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

          {/* ── Nav ── */}
          <div
            id="navbarNav"
            className="offcanvas offcanvas-end flex-grow-1"
            tabIndex={-1}
            aria-labelledby="navbarNavLabel"
          >
            <div className="offcanvas-header border-bottom d-lg-none">
              <h5 className="offcanvas-title" id="navbarNavLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {sections.map((section) =>
                  section.dropdown?.length > 0 ? (

                    /* ── Hover dropdown item ── */
                    <li
                      key={section.id}
                      className="nav-item hd-dropdown-wrap"
                      onMouseEnter={() => handleMouseEnter(section.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Label — NOT a link, just shows the name + chevron */}
                      <span
                        className={`nav-link hd-dropdown-label ${
                          pathname.startsWith(section.headingUrl || "__") ? "active" : ""
                        }`}
                      >
                        {section.heading}
                        <svg
                          className={`hd-chevron ${openDropdown === section.id ? "hd-chevron--open" : ""}`}
                          width="12" height="12" viewBox="0 0 12 12" fill="none"
                        >
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6"
                            strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>

                      {/* ── Dropdown panel ── */}
                      <div className={`hd-dropdown-menu ${openDropdown === section.id ? "hd-dropdown-menu--open" : ""}`}>

                        {/* View All Services — top link */}
                        <Link
                          href={getViewAllUrl(section)}
                          className="hd-dropdown-viewall"
                          onClick={closeOffcanvas}
                        >
                          <span>View All {section.heading}</span>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>

                        <div className="hd-dropdown-divider" />

                        {/* Individual service links */}
                        {section.dropdown.map((item) => (
                          <Link
                            key={item.id}
                            href={item.titleUrl || "#"}
                            className="hd-dropdown-item"
                            onClick={closeOffcanvas}
                          >
                            <span className="hd-dropdown-dot" />
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </li>

                  ) : (

                    /* ── Plain nav link ── */
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
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* ── Scoped styles ── */}
      <style>{`
        /* ── dropdown wrapper ── */
        .hd-dropdown-wrap {
          position: relative;
        }

        /* ── label (non-clickable) ── */
        .hd-dropdown-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          cursor: default;
          user-select: none;
        }

        /* ── chevron ── */
        .hd-chevron {
          transition: transform 0.22s ease;
          opacity: 0.7;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .hd-chevron--open {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* ── dropdown panel ── */
        .hd-dropdown-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          min-width: 240px;
          background: #1a1c2e;
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 10px;
          padding: 6px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
          z-index: 9999;
        }
        .hd-dropdown-menu--open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        /* ── view all link ── */
        .hd-dropdown-viewall {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 7px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #818cf8;
          background: rgba(99,102,241,0.1);
          text-decoration: none;
          transition: background 0.18s ease, color 0.18s ease;
        }
        .hd-dropdown-viewall:hover {
          background: rgba(99,102,241,0.2);
          color: #c7d2fe;
        }
        .hd-dropdown-viewall svg {
          flex-shrink: 0;
          transition: transform 0.18s ease;
        }
        .hd-dropdown-viewall:hover svg {
          transform: translateX(3px);
        }

        /* ── divider ── */
        .hd-dropdown-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 6px 4px;
        }

        /* ── individual item ── */
        .hd-dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 14px;
          border-radius: 7px;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.72);
          text-decoration: none;
          transition: background 0.18s ease, color 0.18s ease;
        }
        .hd-dropdown-item:hover {
          background: rgba(255,255,255,0.06);
          color: #fff;
        }

        .hd-dropdown-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(99,102,241,0.6);
          flex-shrink: 0;
          transition: background 0.18s ease;
        }
        .hd-dropdown-item:hover .hd-dropdown-dot {
          background: #818cf8;
        }

        /* ── mobile: show as static list inside offcanvas ── */
        @media (max-width: 991px) {
          .hd-dropdown-menu {
            position: static;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
            box-shadow: none;
            border: none;
            border-left: 2px solid rgba(99,102,241,0.3);
            border-radius: 0;
            background: transparent;
            padding: 4px 0 4px 12px;
            margin-top: 4px;
            display: none;
          }
          .hd-dropdown-menu--open {
            display: block;
          }
          .hd-dropdown-label {
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
}