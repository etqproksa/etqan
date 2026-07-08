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
      const id = window.requestIdleCallback(() => {
        window.requestIdleCallback(loadBootstrap, { timeout: 5000 });
      });
      return () => window.cancelIdleCallback?.(id);
    }

    const timeoutId = window.setTimeout(loadBootstrap, 3000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}
