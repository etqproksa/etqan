import React from "react";

const Contact = ({ data }) => {
  if (!data) return null;
  console.log("this is the data for contact",data);
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
      className="container bg-secondary p-5"
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
      <div className="row py-5 align-items-stretch">
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
            {address && (
              <li className="d-flex mb-3">
                {locationIcon?.url && (
                  <span
                    className="me-3 flex-shrink-0"
                    style={{
                      display: "flex",
                      alignSelf: "flex-start",
                    }}
                  >
                    <img
                      src={locationIcon.url}
                      alt={locationIcon.alternativeText || "Location"}
                      width={24}
                      height={24}
                      style={{ display: "block" }}
                    />
                  </span>
                )}

                <span
                  style={{
                    whiteSpace: "pre-line",
                    lineHeight: "1.7",
                  }}
                >
                  {address}
                </span>
              </li>
            )}

           <span
  className="me-3 flex-shrink-0"
  style={{ display: "flex", alignSelf: "flex-start" }}
>
  <img
    src={phoneIcon.url}
    alt="Phone"
    width={28}
    height={28}
    style={{ display: "block" }}
  />
</span>

            {/* Email */}
            {email && (
              <li className="d-flex align-items-start">
                {emailIcon?.url && (
                  <span className="me-3  flex-shrink-0">
                    <img
                      src={emailIcon.url}
                      alt={emailIcon.alternativeText || "Email"}
                      width={28}
                      height={28}
                    />
                  </span>
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
