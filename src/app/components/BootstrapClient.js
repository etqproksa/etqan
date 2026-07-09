"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((bootstrap) => {
        window.bootstrap = bootstrap;
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap:", err);
      });
  }, []);

  return null;
}