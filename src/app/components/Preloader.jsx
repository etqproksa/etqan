"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader({ logo }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hide = () => setLoading(false);
    const timer = window.setTimeout(hide, 450);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) return null;

  const logoUrl = logo?.url;
  const altText = logo?.alternativeText || logo?.name || "Etqan logo";

  return (
    <div className="page-loading active" role="status" aria-live="polite" aria-label="Loading">
      <div className="page-loading-inner">
        {logoUrl ? (
          <div className="page-logo-wrap" aria-hidden="true">
            <Image
              src={logoUrl}
              width={180}
              height={58}
              sizes="180px"
              alt={altText}
              priority
            />
          </div>
        ) : (
          <span className="page-logo-fallback">ET</span>
        )}
      </div>

      <style jsx>{`
        .page-loading {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: grid;
          place-items: center;
          background: radial-gradient(circle at top, rgba(0, 91, 237, 0.18), transparent 45%), #060816;
          backdrop-filter: blur(8px);
        }

        .page-loading-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .page-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 180px;
          height: 58px;
          transform: scale(1.12);
          animation: rotateLogo 1.4s linear infinite;
        }

        .page-logo-wrap img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.28));
        }

        .page-logo-fallback {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0d6efd, #00b7ff);
          color: white;
          font-weight: 700;
          letter-spacing: 0.08em;
          box-shadow: 0 12px 24px rgba(0, 183, 255, 0.25);
        }

        @keyframes rotateLogo {
          from {
            transform: scale(1.12) rotate(0deg);
          }
          to {
            transform: scale(1.12) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
