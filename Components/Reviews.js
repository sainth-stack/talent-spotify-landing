import React from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const ReviewsAndCards = ({
  reviewItems,
  buttonLabel = "Book a Demo",
  imageSrc,
  renderReviewItem,
}) => {
  return (
    <div className="container mx-auto my-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl lg:text-3xl">
          On a mission to build a culture that truly works for you
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 relative">

        {/* Image Container with Overlay on larger screens */}
        <div
          className="w-full lg:w-5/12 flex justify-center lg:justify-end relative lg:-translate-x-10 lg:translate-y-10"
          style={{ zIndex: 10 }}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Review Image"
              className="w-3/4 lg:w-full rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Card Container */}
        <div className="w-full lg:w-7/12 bg-white border border-gray-300 rounded-lg shadow-lg p-6 lg:p-8 lg:ml-[-3rem] flex flex-col items-start z-0">
          {/* Card Header */}
          <h3 className="font-bold text-xl mb-4 text-center lg:text-left">
            How do you design effective Objectives?
          </h3>

          {/* Review List */}
          <ol className="space-y-4">
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
          </ol>

          {/* Button */}
          <div className="flex justify-center lg:justify-start mt-6">
            <button className="px-5 py-2 bg-[#083c61] text-white rounded-full">
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndCards;
