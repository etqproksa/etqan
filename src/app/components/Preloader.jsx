"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader({ logo }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Skip animations on iOS to prevent crashes
    if (reduceMotion || isIOS) {
      setLoading(false);
      return;
    }

    const timer = window.setTimeout(() => setLoading(false), 260);
    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted || !loading) return null;

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
          background: #060816;
          transition: opacity 180ms ease;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          will-change: opacity;
        }

        .page-loading-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        .page-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 180px;
          height: 58px;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        .page-logo-wrap img {
          width: 100%;
          height: auto;
          object-fit: contain;
          -webkit-user-select: none;
          user-select: none;
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
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
}
