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

  const Icon = ({ icon, alt }) => {
    if (!icon?.url) return null;

    return (
      <span
        className="me-3 flex-shrink-0"
        style={{
          display: "flex",
          alignSelf: "flex-start",
        }}
      >
        <img
          src={icon.url}
          alt={icon.alternativeText || alt}
          width={24}
          height={24}
          style={{ display: "block" }}
        />
      </span>
    );
  };

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
            {/* Address */}
            {address && (
              <li className="d-flex mb-3">
                <Icon icon={locationIcon} alt="Location" />
                <span style={{ lineHeight: "1.7" }}>{address}</span>
              </li>
            )}

            {/* Phone */}
            {phone && (
              <li className="d-flex align-items-start mb-3">
                <Icon icon={phoneIcon} alt="Phone" />
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
              <li className="d-flex align-items-start">
                <Icon icon={emailIcon} alt="Email" />
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
              className="btn btn-icon btn-secondary me-3"
              aria-label="Linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-secondary me-3"
              aria-label="Facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>

            <a
              href="#"
              className="btn btn-icon btn-secondary me-3"
              aria-label="twitter-x"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
