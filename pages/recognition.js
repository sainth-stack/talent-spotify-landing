import React, { useState } from "react";
import Footer from "../Components/Footer";
import BlogNav from "../Components/BlogNav";
import Recognitions from "../Components/Recognitions";
import { ProgressCircle } from "./../Components/Progress/ProgressCard";
import { recognitionProgressData } from "../utilities/progressData";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-[#ebe3d5]">
      <div className="container">
        <BlogNav
          showPopup={showPopup}
          setShowPopup={() => setShowPopup(false)}
          heading="Recognition"
          subheading="Did You Know That Companies With Highly Engaged Employees Experience..."
        />
      </div>

      <div className="flex justify-evenly flex-wrap gap-6 p-6">
        {recognitionProgressData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-4"
          >
            <ProgressCircle
              percentage={data.percentage}
              text={data.text}
              borderColor={data.borderColor || "border-gray-300"} // Fallback color if `borderColor` is not defined
            />
            {/* Directly placing the text under the circle */}
            <div className="text-lg w-32 flex-wrap   text-center font-bold text-gray-700 mt-2">
              {data.text}
            </div>
          </div>
        ))}
      </div>

      <Recognitions />
      <Footer />
    </div>
  );
}
