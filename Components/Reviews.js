import React from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const ReviewsAndCards = ({
  reviewItems,
  buttonLabel = "Book a Demo",
  imageSrc,
  renderReviewItem,
  title,
  topHeading
}) => {
  return (
    <div className="container mx-auto my-8 px-4 py-2">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl lg:text-3xl capitalize">
         {topHeading}
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center  justify-center lg:space-x-8 relative ">

        {/* Image Container with Overlay on larger screens */}
        <div
          className="w-full lg:w-5/12 flex justify-center lg:justify-end relative"
          style={{
            zIndex: 10,
            left: "10%", // Adjust the left position as needed
          }}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Review Image"
              className="w-3/4 lg:w-full rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Card Container with Transparent-to-White Gradient Background */}
        <div
          className="w-full lg:max-w-4xl px-5  py-2 flex flex-col items-start"
          style={{
            background: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))", // Transparent-to-white gradient background
            borderRadius: "20px", // Rounded corners
            border: "5px solid transparent", // Transparent border to allow the gradient border to be visible
            borderImage: "linear-gradient(to right, rgba(255, 255, 255, 0), #9967f5, #576afa) 1", // Transparent-to-gradient border
            boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)", // Shadow for card visibility
          }}

        >
          {/* Card Header */}
          <h3 className="font-bold text-xl mb-6 text-center lg:text-left w-full">
           {title}
          </h3>

          {/* Review List */}
          <ol className="space-y-1 w-full pl-8">
            {reviewItems.map((item, index) =>
              renderReviewItem ? (
                renderReviewItem(item, index)
              ) : (
                <li key={index} className="flex items-start space-x-3">
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    <FaRegCheckCircle className="text-[#083c61] text-2xl" />
                  </div>
                  {/* Text Content */}
                  <p className="text-left">
                    <span className="font-bold">{item.question || ""}</span>{" "}
                    {item.answer || ""}
                  </p>
                </li>
              )
            )}
             <div className="flex justify-center lg:justify-start mt-6 w-full">
            <button className="px-6 py-3 bg-[#083c61] text-white rounded-full">
              {buttonLabel}
            </button>
          </div>
          </ol>

          {/* Button */}
         
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndCards;
