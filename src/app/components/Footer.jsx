"use client";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function Footer({ footerData }) {
  const links = footerData?.Menulinks || [];
  const socials = footerData?.Sociallinks || [];
  const bgImage = footerData?.backgroundImage?.url;
  const icon = footerData?.icon?.url || footerData?.icon?.[0]?.url || null;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row pb-4">

          {/* BRAND + DESCRIPTION */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer-brand d-flex align-items-center gap-2 mb-3">
              {icon && (
                <Image src={icon} alt="Footer Icon" width={46} height={46} />
              )}
              <span>{footerData?.heading}</span>
            </div>
            <p className="footer-desc">{footerData?.description}</p>
          </div>

          {/* LINKS + SOCIALS */}
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-2 pt-lg-0">
            <div className="row">

              {/* NAV LINKS */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <p className="footer-col-heading">Quick Links</p>
                <ul className="nav flex-column">
                  {links.map((link) => (
                    <li key={link.id} className="nav-item">
                      <Link
                        href={`/pages${link.titleUrl || "#"}`}
                        className="nav-link d-inline-block px-0"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOCIAL LINKS */}
              <div className="col-lg-6">
                <p className="footer-col-heading">Follow Us</p>
                <div className="d-flex flex-row gap-2">
                  {socials.map((social) => (
                    <Link
                      key={social.id}
                      href={social.titleUrl || "#"}
                      target="_blank"
                      className="social-btn"
                    >
                      {social.icon?.url ? (
                        <Image
                          src={social.icon.url}
                          alt={social.title}
                          width={18}
                          height={18}
                        />
                      ) : (
                        <span className="text-white" style={{ fontSize: "12px" }}>
                          {social.title?.charAt(0)}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER + COPYRIGHT */}
        <hr className="footer-divider" />
        <p className="footer-copy text-center text-md-start mb-0">
          &copy; {footerData?.copyright}
        </p>

      </div>
    </footer>
  );
}