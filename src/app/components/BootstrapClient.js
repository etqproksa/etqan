"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect iOS - skip Bootstrap on all iOS devices to prevent memory crash
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      console.warn("[v0] Bootstrap disabled on iOS");
      return;
    }

    // Only load Bootstrap on non-iOS devices
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((bootstrap) => {
        window.bootstrap = bootstrap;
      })
      .catch((err) => {
        console.error("[v0] Failed to load Bootstrap:", err);
      });
  }, []);

  return null;
}
