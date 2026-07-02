"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.requestAnimationFrame(() => setLoading(false));
    return () => window.cancelAnimationFrame(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="page-loading active">
      <div className="page-loading-inner">
        <div className="page-spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
  );
}
