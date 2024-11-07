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
    <div className="container mx-auto ">
      <div className="flex items-center justify-center mb-4">
        <div
          className="w-4/12 flex justify-end ml-10"
          style={{
            transform: "translateX(6rem)",
            padding: "10px",
            borderRadius: "8px",
            zIndex: 10,
            position: "relative",
          }}
        >
          <Image src={imageSrc} alt="Review Image" className="w-3/4 h-auto" />
        </div>

        <div className="relative w-full bg-gradient-to-r from-transparent to-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
          <div className="absolute inset-0 rounded-lg border-4 border-gradient-to-b from-blue-500 to-indigo-500 opacity-50" />
          <div className="relative z-10">
            <ul className="list-disc list-inside mb-3 ml-28">
              <h3 className="font-bold">
                {"How do you design effective Objectives?"}
              </h3>
              {reviewItems.map((item, index) =>
                renderReviewItem ? (
                  renderReviewItem(item, index)
                ) : (
                  <li
                    key={index}
                    className="flex list-unstyled items-center justify-end p-2"
                  >
                    <div
                      className="flex items-center justify-center mr-3"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <FaRegCheckCircle
                        className="text-black"
                        style={{ fontSize: "1.5rem" }}
                      />
                    </div>
                    <p className="text-left">
                      <span className="font-bold mr-2 text-left">
                        {" "}
                        {item.question || ""}
                      </span>
                      {item.answer || ""}
                    </p>
                  </li>
                )
              )}
              <button className="mt-2 d-flex items-center px-3 py-2 bg-[#083c61] text-white rounded-full">
                {buttonLabel}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndCards;
