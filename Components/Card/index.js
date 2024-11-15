import Image from "next/image";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

export default function Card({
  icon,
  heading,
  subheading,
  showSubheading = true,
  link,
  styles,
}) {
  return (
    <div
      className={`bg-white text-center rounded-3 p-3 m-2 w-72 ${styles}`} // Reduced card width and added more rounding
      style={{ borderRadius: "0.5rem" }}
    >
      <Image
        src={icon}
        alt="card icon"
        className="mx-auto rounded-circle"
        width={200} // Set custom width
        height={200} // Set custom height
      />


      <div className="d-flex justify-content-between mt-2">
        <h3 className="h6 fw-bold mb-0">{heading}</h3>
        {link && (
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="ms-2"
          >
            <Image
              src={link.icon}
              alt="LinkedIn"
              className="w-6 h-6" // Adjusted size for a smaller icon
            />
          </a>
        )}
      </div>
      {showSubheading && subheading && (
        <h6 className="text-muted mb-2 text-start" style={{ fontSize: "0.75rem" }}>
          {subheading}
        </h6>
      )}
      <div className="d-flex justify-content-end mt-2 align-items-center">
        <a href={link.url} className="text-primary text-decoration-none d-flex align-items-center">
          Know More <IoIosArrowDropright className="ms-2" /> 
        </a>
      </div>
    </div>
  );
}
