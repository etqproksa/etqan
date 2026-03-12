"use client";
import { useState, useEffect } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import ReactMarkdown from "react-markdown";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const HeroSection = ({ data }) => {
  const [photos, setPhotos] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const hero = data?.Hero;
  const bgImage = hero?.backgroundImage?.url;

  useEffect(() => {
    setMounted(true);
    if (hero?.images?.length) {
      const loadImages = async () => {
        const photoData = await Promise.all(
          hero.images.map(
            (img) =>
              new Promise((resolve) => {
                const image = new window.Image();
                image.src = img.url;
                image.onload = () =>
                  resolve({
                    src: img.url,
                    width: image.width,
                    height: image.height,
                    alt: img?.alternativeText || "Gallery Image",
                  });
              })
          )
        );
        setPhotos(photoData);
      };
      loadImages();
    }
  }, [hero?.images]);

  if (!hero) return null;

  // ── Inline styles ──────────────────────────────────────────────
  const sectionStyle = {
    position: "relative",
    marginTop: "6rem",
    borderRadius: "1.25rem",
    overflow: "hidden",
    background: bgImage
      ? undefined
      : "linear-gradient(135deg, #0f1117 0%, #151822 60%, #1a1d2e 100%)",
    border: "1px solid rgba(255,255,255,0.07)",
    boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    padding: "0.3rem 0.85rem",
    borderRadius: "2rem",
    background: "rgba(99,102,241,0.15)",
    border: "1px solid rgba(99,102,241,0.35)",
    color: "#a5b4fc",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "1.1rem",
  };

  const headingStyle = {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 800,
    letterSpacing: "-0.04em",
    color: "#fff",
    lineHeight: 1.1,
    marginBottom: "1.25rem",
  };

  const accentBarStyle = {
    width: 48,
    height: 3,
    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    borderRadius: 2,
    marginBottom: "1.5rem",
  };

  const dividerStyle = {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, rgba(99,102,241,0.4), transparent)",
    margin: "1.5rem 0",
  };

  const photoWrapperStyle = {
    borderRadius: "1rem",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const glowOrb1 = {
    position: "absolute",
    top: -100,
    right: -80,
    width: 380,
    height: 380,
    background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 1,
  };

  const glowOrb2 = {
    position: "absolute",
    bottom: -80,
    left: -60,
    width: 280,
    height: 280,
    background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 1,
  };

  const gridPattern = {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    zIndex: 0,
    pointerEvents: "none",
  };

  const markdownWrapStyle = {
    color: "rgba(255,255,255,0.68)",
    fontSize: "0.9375rem",
    lineHeight: 1.8,
    fontWeight: 400,
  };

  return (
    <section className="container" style={sectionStyle}>
      {/* Background image */}
      {bgImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      )}

      {/* Overlay for readability */}
      {bgImage && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(10,12,20,0.88) 0%, rgba(15,17,28,0.75) 100%)",
          zIndex: 0,
        }} />
      )}

      {/* Subtle grid */}
      <div style={gridPattern} />

      {/* Glow orbs */}
      <div style={glowOrb1} />
      <div style={glowOrb2} />

      {/* Corner accent lines */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: 120, height: 120,
        borderTop: "1px solid rgba(99,102,241,0.3)",
        borderLeft: "1px solid rgba(99,102,241,0.3)",
        borderRadius: "1.25rem 0 0 0",
        pointerEvents: "none", zIndex: 2,
      }} />
      <div style={{
        position: "absolute", bottom: 0, right: 0, width: 120, height: 120,
        borderBottom: "1px solid rgba(139,92,246,0.2)",
        borderRight: "1px solid rgba(139,92,246,0.2)",
        borderRadius: "0 0 1.25rem 0",
        pointerEvents: "none", zIndex: 2,
      }} />

      {/* Content */}
      <div className="container py-5" style={{ position: "relative", zIndex: 3 }}>
        <div className="row align-items-center g-5">

          {/* Left: Text */}
          <div className="col-lg-6">
            {/* Badge */}
            <div style={badgeStyle}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#818cf8", display: "inline-block",
              }} />
              Etqan Projects
            </div>

            <h1 style={headingStyle}>{hero.title}</h1>
            <div style={accentBarStyle} />

            <div style={markdownWrapStyle}>
              <ReactMarkdown>{hero.description}</ReactMarkdown>
            </div>

            <div style={dividerStyle} />

            {/* Stats row */}
            <div style={{ display: "flex", gap: "2rem" }}>
              {[
                { value: "2020", label: "Founded" },
                { value: "KSA", label: "Headquartered" },
                { value: "100%", label: "Client Focus" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: "1.4rem", fontWeight: 800,
                    color: "#fff", letterSpacing: "-0.03em",
                    background: "linear-gradient(135deg, #a5b4fc, #c4b5fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo Gallery */}
          <div className="col-lg-6">
            {photos.length > 0 ? (
              <>
                <div
                  style={photoWrapperStyle}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 16px 60px rgba(99,102,241,0.25)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.4)";
                  }}
                >
                  <RowsPhotoAlbum
                    photos={photos}
                    onClick={({ index }) => {
                      setIndex(index);
                      setGalleryOpen(true);
                    }}
                  />
                </div>

                <Lightbox
                  open={galleryOpen}
                  index={index}
                  close={() => setGalleryOpen(false)}
                  plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  slides={photos.map((p) => ({ src: p.src }))}
                />
              </>
            ) : (
              /* Placeholder shimmer when no images */
              <div style={{
                borderRadius: "1rem",
                height: 320,
                background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05))",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.875rem" }}>
                  No images available
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;