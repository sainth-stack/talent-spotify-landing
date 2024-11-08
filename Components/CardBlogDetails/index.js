import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";
export default function CardBlogDetails({
  image,
  heading,
  subheading,
  url = "",
}) {
  return (
    <div className="cardhover d-flex   w-full h-[250px]  bg-white shadow-lg rounded-md mb-3 container">
      <Image
        src={image}
        alt="cardicon"
        className="card-img-     p-4 object-cover" // Adjust height for the image
        width={600} // Set a width appropriate for your layout
        height={200}
        // Set a height for the image
      />

      <div className="card-body flex-grow p-4">
        {" "}
        {/* Added p-4 for padding */}
        <h6
          className="card-title font-weight-bold"
          style={{
            fontSize: "19px",
            fontFamily: "Poppins",
            lineHeight: "28.6px",
          }} // Corrected 'size' to 'fontSize'
        >
          {heading}
        </h6>
        <p
          className=""
          style={{
            fontSize: "16px",
            fontFamily: "Poppins",
            lineHeight: "24px",
          }} // Corrected 'size' to 'fontSize'
        >
          {subheading}
        </p>
        <div className="flex justify-end items-end mt-4 relative">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 cursor-pointer"
          >
            <span
              className="flex items-center"
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                lineHeight: "17.07px",
              }}
            >
              Read More
              <CiCircleChevRight className="ml-1" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
