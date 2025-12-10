import React from "react";

const VisionMission = ({ data }) => {
  if (!data) return null;

  const {
    maintitle,
    visiontitle,
    missiontitle,
    visiontext,
    missiontext,
    icon,
    image,
    imageAlignment,
    backgroundImage,
  } = data;

  return (
    <section
      className="container py-2 mt-5 mb-2 shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage?.url || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">

          {/* IMAGE LEFT */}
          {imageAlignment === "Left" && (
            <div className="col-md-6 text-center rounded-3 shadow-lg mb-4 mb-md-0">
              <img
                src={image?.url}
                alt={image?.alternativeText || maintitle}
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}

          {/* TEXT SECTION */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">

            {/* ICON */}
            {icon?.url && (
              <img
                src={icon.url}
                width="100px"
                alt="vision-mission-icon"
                className="mb-3"
              />
            )}

            {/* MAIN TITLE */}
            {maintitle && (
              <h2 className="display-7 mb-4 text-white">{maintitle}</h2>
            )}

            {/* VISION BLOCK */}
            <div className="mb-4">
              <a
                href="#"
                className="btn btn-md btn-primary shadow-primary w-100 w-sm-auto mb-2"
              >
                {visiontitle}
              </a>

              <p className="fs-md text-muted" style={{textAlign:"justify"}}>{visiontext}</p>
            </div>

            {/* MISSION BLOCK */}
            <div>
              <a
                href="#"
                className="btn btn-md btn-primary shadow-primary w-100 w-sm-auto mb-2"
              >
                {missiontitle}
              </a>

              <p className="fs-md text-muted" style={{textAlign:"justify"}}>{missiontext}</p>
            </div>
          </div>

          {/* IMAGE RIGHT */}
          {imageAlignment === "Right" && (
            <div className="col-md-6 text-center rounded-3 shadow-lg mb-4 mb-md-0">
              <img
                src={image?.url}
                alt={image?.alternativeText || maintitle}
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
