import Image from "next/image";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

export default function CardBlogDetails({
  image,
  heading,
  subheading,
  url = "",
}) {
  return (
    <div className="cardhover mobile_blog_card d-flex flex-column flex-md-row bg-white rounded mb-2 container shadow-lg">
      {/* Image Section */}
      <div
        className="position-relative col-12 col-md-4 mb-3 mb-md-0 rounded-top rounded-md-start"
        style={{
          borderRadius: ".6rem",
          height: "auto", // Ensuring height adjusts based on content
        }}
      >
        <Image
          src={image}
          alt="cardicon"
          layout="responsive" // Use responsive layout for better scaling
          width={400} // Set the width for the image
          height={250} // Set the height for the image
          objectFit="cover"
          className="rounded-lg shadow-md py-2"
        />
      </div>

      {/* Content Section */}
      <div className="card-body p-3 d-flex flex-column justify-between col-12 col-md-8">
        {/* Heading */}
        <p className="fs-5 fw-bold text-dark mb-2">{heading}</p>

        {/* Subheading */}
        <p className="text-sm text-start mb-3">{subheading}</p>

        {/* Read More Link */}
        <div className="d-flex justify-content-start justify-content-md-end align-items-center mt-3">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-primary text-decoration-none d-flex align-items-center"
          >
            <span
              className="d-flex align-items-center"
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                lineHeight: "17.07px",
              }}
            >
              Read More
              <CiCircleChevRight className="ms-1" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
