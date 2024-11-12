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
    <div className="cardhover mobile_blog_card flex flex-col md:text-center md:flex-col md:p-2 w-full bg-white shadow-lg rounded-md mb-3 container">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2  h-[200px] md:h-[250px]">
        <Image
          src={image}
          alt="cardicon"
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Ensures the image fits without distortion
          className="rounded-md  py-2"
        />
      </div>

      {/* Content Section */}
      <div className="card-body flex-grow p-4">
        <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{heading}</p>
        <p className="text-sm sm:text-base text-gray-600 mb-4">{subheading}</p>

        <div className="flex justify-end items-center mt-4 relative">
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
