import React from "react";
import Image from "next/image";
import review1 from "../assets/images/Chat.png"; 
import { FaRegCheckCircle } from "react-icons/fa";

export default function ReviewsAndCards() {
  const reviewItems = [
    "Competency evaluation focuses on objective metrics, reducing subjective bias.",
    "Behavioral competency questions assessed by manager and peers, analyzed by Machine Learning for consolidated employee feedback.",
    "Emphasis on feed-forward guidance rather than traditional feedback.",
    "Pre-populated appraisal forms based on goal achievements and ongoing feedback throughout the year.",
  ];
  
  return (
    <div className="container mx-auto mt-5 p-4">
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
          <Image src={review1} alt="Review Image" className="w-3/4 h-auto" />
        </div>

        <div className="relative w-full  bg-gradient-to-r from-transparent to-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
          <div className="absolute inset-0 rounded-lg border-4 border-gradient-to-b from-blue-500 to-indigo-500 opacity-50" />

    <div className="relative z-10">
  <ul className="list-disc list-inside mb-3 ml-28">
    <h2 className="font-bold text-start text-xl mb-2">Review</h2>

    {reviewItems.map((review, index) => (
      <li key={index} className="flex items-center justify-end p-2">
       <div className="flex items-center justify-center mr-3" style={{ width: '24px', height: '24px' }}>
    <FaRegCheckCircle className="text-green-500" style={{ fontSize: '1.5rem' }} />
  </div>
        {review}
      </li>
    ))}

    <button className="mt-2 d-flex items-center px-3 py-2 bg-[#083c61] text-white rounded-full">
      Book a Demo
    </button>
  </ul>
</div>
        </div>
      </div>
    </div>
  );
}
