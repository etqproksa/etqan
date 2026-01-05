"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ footerData }) {
  console.log("this is the footer", footerData);

  const links = footerData?.Menulinks || [];
  const socials = footerData?.Sociallinks || [];

  // background image
  const bgImage = footerData?.backgroundImage?.url;

  // icon image (single or multiple media support)
  const icon =
    footerData?.icon?.url || footerData?.icon?.[0]?.url || null;

  return (
    <footer
      className="footer pt-5 pb-4 pb-lg-5"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundColor: bgImage ? "transparent" : "#151822",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "2.5rem",
      }}
    >
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-white p-0 me-0 mb-3 mb-lg-4 d-flex align-items-center gap-2">
              
              {/* 👇 ICON */}
              {icon && (
                <Image
                  src={icon}
                  alt="Footer Icon"
                  width={50}
                  height={50}
                />
              )}

              {/* 👇 HEADING */}
              <span className="text-white">{footerData?.heading}</span>
            </div>

            <p className="fs-sm pb-lg-3 mb-4 text-muted" style={{textAlign:"justify"}}>
              {footerData?.description}
            </p>
          </div>

          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-6">
                <h6 className="mb-2">
                  <a
                    href="#useful-links"
                    className="d-block text-white dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Useful Links
                  </a>
                </h6>
                <div
                  id="useful-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column mb-lg-3">
                    {links.map((link) => (
                      <li key={link.id} className="nav-item">
                        <Link
                          href={`/pages${link.titleUrl || "#"}`}
                          className="nav-link d-inline-block px-0 pt-1 pb-2 text-muted"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <h6 className="mb-2">
                  <a
                    href="#social-links"
                    className="d-block text-white dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Socials
                  </a>
                </h6>
                <div
                  id="social-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    {socials.map((social) => (
                      <li key={social.id} className="nav-item">
                        <Link
                          href={social.titleUrl || "#"} target="_blank"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 text-muted"
                        >
                          {social.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0 text-muted">
          &copy; {footerData?.copyright}
        </p>
      </div>
    </footer>
  );
}
