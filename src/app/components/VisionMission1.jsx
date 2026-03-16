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
      className="container py-2 mb-2 shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage?.url || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
        marginTop: "5rem",
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
              />
            </div>
          )}

          {/* TEXT SECTION */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">

            {/* ICON + TITLE INLINE */}
            {maintitle && (
              <div className="d-flex align-items-center gap-3 mb-4">
                {icon?.url && (
                  <img
                    src={icon.url}
                    width="60"
                    height="60"
                    alt="vision-mission-icon"
                  />
                )}
                <h2 className="display-7 mb-0 text-white">
                  {maintitle}
                </h2>
              </div>
            )}

            {/* VISION */}
            <div className="mb-4">
              <h5 className="text-gradient-primary">{visiontitle}</h5>
              <p className="fs-md text-muted" style={{ textAlign: "justify" }}>
                {visiontext}
              </p>
            </div>

            {/* MISSION */}
            <div>
              <h5 className="text-gradient-primary">{missiontitle}</h5>
              <p className="fs-md text-muted" style={{ textAlign: "justify" }}>
                {missiontext}
              </p>
            </div>
          </div>

          {/* IMAGE RIGHT */}
          {imageAlignment === "Right" && (
            <div className="col-md-6 text-center rounded-3 shadow-lg mb-4 mb-md-0">
              <img
                src={image?.url}
                alt={image?.alternativeText || maintitle}
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
