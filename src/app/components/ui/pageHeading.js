"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";


function PageHeading({ heading, icon, show }) {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((path) => path);
  const lastPath =
    paths.length > 0
      ? decodeURIComponent(paths[paths.length - 1].replace(/-/g, " "))
      : "";

  const isImageIcon =
    icon &&
    (icon.startsWith("http") ||
      icon.startsWith("/") ||
      icon.endsWith(".png") ||
      icon.endsWith(".jpg") ||
      icon.endsWith(".jpeg") ||
      icon.endsWith(".svg") ||
      icon.endsWith(".webp"));

  return (
    <>
      {show && (
        <div
          className="flex justify-center items-center gap-2 text-white p-2 text-center text-uppercase mb-2"
          style={{
            fontSize: "1.05rem",
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: "#E2571F",
          }}
        >
          {icon &&
            (isImageIcon ? (
              <Image
                src={icon}
                alt="icon"
                width={38}
                height={38}
                className="inline-block"
                style={{ verticalAlign: "middle" }}
              />
            ) : (
              <i
                className={`${icon}`}
                style={{
                  fontSize: "1.3rem",
                  verticalAlign: "middle",
                }}
              ></i>
            ))}&nbsp;&nbsp;
          <span className="font-semibold tracking-wide ">
            {heading ? heading : lastPath}
          </span>
        </div>
      )}
    
    </>
  );
}

export default PageHeading;
