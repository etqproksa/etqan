import React from "react";

const Contact = ({ data }) => {
  if (!data) return null;

  const {
    address,
    map,
    phone,
    email,
    emailIcon,
    phoneIcon,
    locationIcon,
    backgroundImage,
  } = data;

  return (
    <section
      className="container p-5"
      style={{
        marginTop: "5rem",
        borderRadius: "1rem",
        backgroundImage: backgroundImage?.url
          ? `url(${backgroundImage.url})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay for readability */}
      <div
        className="row py-5 align-items-stretch"
      
      >
        {/* Map */}
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="h-100 shadow-sm rounded-3 overflow-hidden">
            <div
              className="h-100"
              style={{ minHeight: "320px" }}
              dangerouslySetInnerHTML={{ __html: map }}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-5 offset-lg-1">
          <h1 className="mb-4">Contact Us</h1>

          <ul className="list-unstyled mb-4">
            {/* Address */}
            {address && (
              <li className="d-flex align-items-start mb-3">
                {locationIcon?.url && (
                  <img
                    src={locationIcon.url}
                    alt={locationIcon.alternativeText || "Location"}
                    width={28}
                    height={28}
                    className="me-3 mt-1"
                  />
                )}
                <span style={{ whiteSpace: "pre-line" }}>{address}</span>
              </li>
            )}

            {/* Phone */}
            {phone && (
              <li className="d-flex align-items-center mb-3">
                {phoneIcon?.url && (
                  <img
                    src={phoneIcon.url}
                    alt={phoneIcon.alternativeText || "Phone"}
                    width={28}
                    height={28}
                    className="me-3"
                  />
                )}
                <a
                  href={`tel:${phone}`}
                  className="text-decoration-none text-dark"
                >
                  {phone}
                </a>
              </li>
            )}

            {/* Email */}
            {email && (
              <li className="d-flex align-items-center">
                {emailIcon?.url && (
                  <img
                    src={emailIcon.url}
                    alt={emailIcon.alternativeText || "Email"}
                    width={28}
                    height={28}
                    className="me-3"
                  />
                )}
                <a
                  href={`mailto:${email}`}
                  className="text-decoration-none text-dark"
                >
                  {email}
                </a>
              </li>
            )}
          </ul>

          {/* Social Links */}
          <div className="d-flex pt-2">
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-facebook me-3"
              aria-label="Facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-instagram me-3"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-twitter me-3"
              aria-label="Twitter"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-youtube"
              aria-label="YouTube"
            >
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
