"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadBootstrap = () => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
        window.bootstrap = bootstrap;
      });
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(loadBootstrap);
      return () => window.cancelIdleCallback?.(id);
    }

    const timeoutId = window.setTimeout(loadBootstrap, 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}
