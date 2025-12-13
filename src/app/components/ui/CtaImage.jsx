import React from "react";

function CtaImage({ data }) {
  if (!data) return null;

  const { middleImage, title, ctatitle, ctaUrl } = data;

  return (
    <section className="container mb-5 mt-5 pb-lg-5 pt-5 " style={{ backgroundColor: "#1A1E28" , borderRadius: "8px"}}>
   <h2 className="h1 position-relative mb-md-5 mb-4 text-center">
  {title}

  <span
    className="d-md-block d-none position-absolute top-0 start-100 text-primary ms-4"
    style={{ width: "84px" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="76"
      fill="currentColor"
    >
      <path d="M52.873 59.368c9.856-.312 19.56 1.721 29.317 1.568..." />
    </svg>
  </span>
</h2>


      {middleImage?.url && (
        <div className="d-flex justify-content-center">
          <img
            src={middleImage.url}
            alt={middleImage.alternativeText || middleImage.name}
            className="rounded-3 img-fluid"
            width={850}
          />
        </div>
      )}
   <div className="d-flex justify-content-center mt-5">
  <a href={ctaUrl} className="btn btn-outline-primary btn-lg">
    {ctatitle}
  </a>
</div>

    </section>
  );
}

export default CtaImage;
