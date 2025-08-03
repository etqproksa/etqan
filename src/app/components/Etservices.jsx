import {
  DatabaseBackup,
  UserRoundCog,
  MonitorCog ,
  Drill,
  TrendingUpDown ,
  ShieldIcon as ShieldUser,
  BrickWallFire ,
  BrainCircuit,
} from "lucide-react"
import styles from "./Etservices.module.css" // Import the CSS module


// Helper component for a single circular bubble with icon and text
const CircularBubble = ({ icon: Icon, text, tooltip, size, top, left, right, bottom, zIndex, floatClass, color ,bgColor}) => {
  // Calculate inner circle size (e.g., 60% of outer circle)
  const innerSize = size * 0.6
  const iconSize = innerSize * 0.7 // Icon size relative to inner circle
  // SVG path for circular text - adjusted for different sizes
  const radius = size / 2 - 10 // Radius for the text path, slightly smaller than outer circle
  const pathD = `M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`

  return (
    <div
      className={`position-absolute shadow ${styles.bubbleContainer} ${styles[floatClass]} ${styles.tooltipContainer}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        transform: `translate(${left ? "-50%" : right ? "50%" : "-50%"}, ${top ? "-50%" : bottom ? "50%" : "-50%"})`,
        zIndex: zIndex,
      }}
      data-tooltip={tooltip}
    >
      {/* Outer Circle with Circular Text */}
      <div className={`position-absolute  rounded-circle ${styles.outerCircle}`} style={{background:`${bgColor}`}}>
        <svg viewBox={`0 0 ${size} ${size}`} className={styles.circularTextSvg}>
          <path id={`circlePath-${text.replace(/\s/g, "")}`} d={pathD} fill={bgColor} />
          <text  className={styles.circularText}   >
            <textPath href={`#circlePath-${text.replace(/\s/g, "")}`} startOffset="50%" textAnchor="middle"  >
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      {/* Inner Circle with Icon */}
      <div
        className={`position-absolute rounded-circle d-flex align-items-center justify-content-center shadow-sm ${styles.innerCircle}`}
        style={{
          width: `${innerSize}px`,
          height: `${innerSize}px`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:`${color}`
         
        }}
      >
        <Icon style={{ width: `${iconSize}px`, height: `${iconSize}px`, color:"white" }} />{" "}
        {/* Apply color prop here */}
      </div>
    </div>
  )
}

export default function Etservices() {
  return (
    <section className={`position-relative py-5 ${styles.heroSection}`}>
      {/* Gradient BG - Mimicking the dark background from the image */}
      <div className={`position-absolute top-0 start-0 w-100 h-100 ${styles.backgroundGradient}`}></div>
      {/* Content */}
      <div className="container position-relative z-2 py-lg-4">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-5 d-flex flex-column pt-lg-4 pt-xl-5 text-center text-lg-start">
            <h5 className="my-2 text-secondary">Welcome!</h5>
            <h1 className="display-3 mb-4">
              Learn <span className={styles.itOnlineBlue}>IT Online</span> with No Limits
            </h1>
            <p className="fs-lg mb-5 text-muted">
              Enjoy our great selection of IT courses. Choose from more than 25K online video courses and become an IT
              expert now!
            </p>
          </div>
          {/* Right Circles with Icons - Adjusted for closer, overlapping layout and tooltips */}
          <div
            className="col-lg-7 position-relative d-flex align-items-center justify-content-center"
            style={{ minHeight: "450px", maxWidth: "600px", margin: "0 auto" }}
          >
            {/* Main large bubble */}
            <CircularBubble
              icon={DatabaseBackup}
              text="Disaster Recovery & Business Continuity"
              bgColor="#6366f1" // Custom color for this icon
              color="#0306a3ff" // Custom color for this icon
              size={220}
              top="50%"
              left="50%"
              zIndex={5}
              floatClass="circleFloat1"
            />
            {/* Top-left bubble */}
            <CircularBubble
              icon={MonitorCog}
              text="Managed XDR"
              bgColor="#dd6fceff" // Custom color for this icon
              color="#e20bc5ff" // Custom color for this icon
              size={120}
              top="10%"
              left="20%"
              zIndex={4}
              floatClass="circleFloat2"
            />
            {/* Top-right bubble */}
          
            {/* Bottom-right bubble */}
            <CircularBubble
              icon={Drill}
              text="Penetration Testing"
                bgColor="#f09051ff" // Custom color for this icon
              color="#f56606ff" // Custom color for this icon
              size={130}
              bottom="35%"
              right="0%"
              zIndex={3}
              floatClass="circleFloat4"
            />
            {/* Bottom-left bubble */}
            <CircularBubble
              icon={TrendingUpDown}
              text="Gap Analysis"
              bgColor="#385d8fff" // Custom color for this icon
              color="#032a5cff" // Custom color for this icon
              size={160}
              bottom="30%"
              left="15%"
              zIndex={4}
              floatClass="circleFloat5"
            />
            {/* Additional bubble 1 (top-center) */}
            <CircularBubble
              icon={ShieldUser}
              text="Security Awareness"
              bgColor="#60a050ff" // Custom color for this icon
              color="#1c7905ff" // Custom color for this icon
              size={150}
              top="0%"
              left="50%"
              zIndex={2}
              floatClass="circleFloat6"
            />
            {/* Additional bubble 2 (bottom-center) */}
            <CircularBubble
              icon={BrickWallFire}
              text="Firewall Management"
              bgColor="#8d65a0ff" // Custom color for this icon
              color="#450663ff" // Custom color for this icon
              size={110}
              top="0%"
              right="2%"
              zIndex={2}
              floatClass="circleFloat7"
            />
            <CircularBubble
              icon={BrainCircuit}
              text="Digital Tranformation Consulting"
             bgColor="#8a6937ff" // Custom color for this icon
              color="#8f5602ff" // Custom color for this icon
              size={110}
              bottom="0%"
              left="40%"
              zIndex={2}
              floatClass="circleFloat7"
            />
              <CircularBubble
              icon={UserRoundCog}
              text="Help Desk & Technical Support"
               bgColor="#61a550ff" // Custom color for this icon
              color="#125003ff" // Custom color for this icon
              size={140}
              top="90%"
              left="45%"
              zIndex={4}
              floatClass="circleFloat3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
