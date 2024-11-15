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
    <div className="cardhover mobile_blog_card flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg mb-6 container overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[200px] md:w-1/3 md:h-[250px] rounded-t-lg md:rounded-l-lg ">
        <Image
          src={image}
          alt="cardicon"
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Ensures the image fits without distortion
          className="rounded-t-lg md:rounded-l-lg py-2"
        />
      </div>

      {/* Content Section */}
      <div className="card-body h-auto p-4 flex flex-col justify-between md:w-2/3 md:pl-6 sm:p-2">
        {/* Heading */}
        <p className="text-lg sm:text-xl font-bold mb-1 text-gray-800">{heading}</p>
        
        {/* Subheading */}
        <p className="text-sm sm:text-base text-gray-600 mb-4 h-auto">{subheading}</p>

        {/* Read More Link */}
        <div className="flex justify-start md:justify-end items-center mt-4">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 hover:text-blue-600 cursor-pointer flex items-center"
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
