"use client";
import {
  DatabaseBackup,
  UserRoundCog,
  MonitorCog,
  Drill,
  TrendingUpDown,
  ShieldUser,
  BrickWallFire,

  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import styles from "./Projects.module.css"; // Import CSS Module

const iconData = [
  // IMPORTANT: The 'style' property is kept exactly as provided by the user,
  // as it's crucial for your parallax.js library for positioning.
  // <DatabaseBackup  />
  //<ShieldUser color="#ff6d1f" />
  //<Drill color="#972b65" />
  //<BrickWallFire color="#6a9121" />
  //<ShieldOff color="#d50b0b" />
  //<BrainCircuit color="#0bd50bff" />
  {
    icon: <DatabaseBackup  color="#f70233"  className={styles.lucideIcon}/>,
    color: "#f70233",
    label: "Disaster Recovery & Business Continuity",
    depth: 0.3,
    style: { paddingRight: "28.7%", paddingLeft: "57%" },
  },
  {
    icon: <UserRoundCog color="#08afd9" className={styles.lucideIcon} />,
    label: "Help Desk & Technical Support",
    color: "#08afd9",
    depth: 0.45,
    style: { paddingRight: "60%", paddingLeft: "27.6%", top: "13.3%" },
  },
  {
    icon: <MonitorCog color="#e20bc5ff" className={styles.lucideIcon} />,
    color: "#e20bc5ff",
    label: "Managed XDR",
    depth: 0.3,
    style: { paddingRight: "85.8%", top: "32.7%" },
  },
  // { icon: <Twitter size="24" />, label: "Twitter", depth: 0.25, style: { paddingLeft: "85.8%", top: "35.5%" } },
  {
    icon: <TrendingUpDown  color="#fbff0f" className={styles.lucideIcon} />,
    label: "Gap Analysis",
    color: "#fbff0f",
    depth: 0.25,
    style: { paddingLeft: "75.8%", top: "15.5%" },
  },
  {
    icon: <ShieldUser  color="#ff6d1f" className={styles.lucideIcon} />,
    label: "Vulnerability Assessment",
    color: "#ff6d1f",
    depth: 0.3,
    style: { paddingRight: "45%", paddingLeft: "75%", top: "35.5%" },
  },
  {
    icon: <BrickWallFire  color="#6a9121" className={styles.lucideIcon} />,
    label: "Cyber Security Audit",
    color: "#6a9121",
    depth: 0.25,
    style: { paddingRight: "73.3%", paddingLeft: "11.1%", top: "78.8%" },
  },
  {
    icon: <BrainCircuit color="#0bd50bff" className={styles.lucideIcon} />,
    color: "#0bd50bff",
    label: "Digital Tranformation Consulting",
    depth: 0.4,
    style: { paddingRight: "68.2%", paddingLeft: "23%", top: "60.9%" },
  },
  {
    icon: <Drill  color="#972b65" className={styles.lucideIcon} />,
    label: "Penetration Testing",
    color: "#972b65",
    depth: 0.3,
    style: { paddingRight: "16%", paddingLeft: "71.4%", top: "67.6%" },
  },
  
];

const Projects = () => {
  return (
    <section className="container align-items-center justify-content-center justify-content-md-start py-2 py-md-2 my-2 my-sm-3 my-md-0 my-xl-3 ">
         <h2 className="h1 mb-5 text-center">Our Services</h2>
         <div className="row">
      <div className="col-11 col-sm-9 col-md-7 col-lg-6 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
        <div className="parallax" style={{ maxWidth: "636px" }}>
          {[1, 2, 3].map((num, i) => (
            <div
              className="parallax-layer"
              data-depth={`${0.05 * (i + 1)}`}
              key={num}
            >
              <img
                src={`/assets/img/landing/saas-5/use-cases/task-automation/circle-${num}.png`}
                alt={`Circle ${num}`}
              />
            </div>
          ))}
          {/* Center Text Bubble */}
          <div className="parallax-layer" data-depth="0.2">
            <div
              className={`position-absolute top-50 start-50 translate-middle rounded-circle p-4 text-white text-center ${styles.centerCircle3dCustom}`}
            >
              <span className="fw-bold">
                Managed <br />
                IT <br />
                Services
              </span>
            </div>
          </div>
          {/* Circle Icons + Labels to the right */}
          {iconData.map(({ icon, label, depth, color, style }, index) => (
            <div
              className="parallax-layer"
              style={style}
              data-depth={depth}
              key={index}
            >
              {/* This div is the main container for the icon circle and its label, flexed horizontally */}
              {/* It retains the original 'top' style if present, and is positioned relatively for its children */}
              <div
                className="d-flex align-items-center position-relative"
                style={{ top: style.top || "0%" }}
              >
                {/* Icon Circle Container - this will be the visible circle */}
                {/* Removed 'ratio ratio-1x1' to ensure explicit width/height and border-radius work correctly */}
                <div className={styles.iconCircleContainer}>
                  {/* Light and Dark Mode Backgrounds - these are the actual circle backgrounds */}
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-dark-mode-none"
                    style={{
                      boxShadow: "0 12px 48px -8px rgba(189,196,221,0.35)",
                    }}
                  ></span>
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-circle d-none d-dark-mode-block"
                    style={{
                      backgroundColor: "#1a1a2e",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }} /* Dark background and border */
                  ></span>
                  {/* Icon itself, centered within its container */}
                  <div className="position-absolute top-50 start-50 translate-middle text-white">
                    {icon}
                  </div>{" "}
                  {/* Added text-white for icon color */}
                </div>
                {/* Label Box */}
                <div className={styles.iconLabelBox}>
                  <span style={{ color: color, fontWeight: "bold" }}>
                    {label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Column Content */}
      <div className="col-md-5 col-xl-4 offset-lg-1 text-center text-md-start">
        <h3 className="h2 mb-lg-4 text-white">
          Compliance, Consulting, Audit and Testing
        </h3>
        <p className="fs-lg pb-lg-2 mb-4 text-white-50">
          Integrate our smart AI with the tools you already know and use. 10x
          your teams productivity and efficiency.
        </p>
        <a
          href="#"
          className={`btn rounded-pill ${styles.btnOutlinePrimaryCustom}`}
        >
          Learn more <ArrowRight className="fs-lg ms-2 me-n1" />
        </a>
      </div>
      </div>
    </section>
  );
};

export default Projects;
