"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader({ logo }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isAppleSafari =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      /Safari/.test(navigator.userAgent) &&
      !/Chrome|CriOS|FxiOS/.test(navigator.userAgent);

    if (reduceMotion || isAppleSafari) {
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
        }

        .page-logo-wrap img {
          width: 100%;
          height: auto;
          object-fit: contain;
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
        }
      `}</style>
    </div>
  );
}
