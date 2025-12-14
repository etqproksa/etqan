import React from "react";

function CtaImage({ data }) {
  if (!data) return null;

  const { middleImage, title, ctatitle, ctaUrl } = data;

  return (
    <section className="container mb-5 mt-5 pb-lg-5 pt-5 "
     style={{ backgroundColor: "#1A1E28" , borderRadius: "8px"}}>
   <h2 className="h1 position-relative mb-md-5 mb-4 text-center">
    {title}


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
