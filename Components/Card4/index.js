import Image from "next/image";
import React from "react";

export default function Card({
  image,
  heading,
  subheading,
  width = "100%",
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4" style={{ minWidth: width }}>
      <div className="card h-100 shadow">
        <div className="position-relative" style={{ height: "250px" }}>
          <Image
            src={image}
            alt={heading}
            layout="fill"
            objectFit="cover"
            className="card-img-top p-2 shadow-lg"
             style={{ borderRadius:".3rem" }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold  mb-1">{heading}</h5>
          <p className="card-text text-muted flex-grow-1 " style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}>
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
}