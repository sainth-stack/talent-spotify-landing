import React, { useState } from "react";
import image3 from "../../assets/images/left_key_result.png"; // Assuming the 
import image2 from "../../assets/images/pedict.png"; 
import image1 from "../../assets/images/Right_keyResult.png";
import Image from "next/image";
import ListPoints from "../ListPoints";

export const Section2OKR = ({ reverse = false, showPopup, homerefScroll }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="d-flex flex-wrap sm:mx-20 md:mx-0 align-items-center justify-content-center mt-4 mb-4 pb-4 pt-4 "
      style={{ gap: "15%", margin: "auto", flexDirection: "row" }}
      ref={homerefScroll}
    >
      {/* Image Content Section */}
      <div
        className={`image-container  m-0 p-0 ${
          reverse ? "reverse" : ""
        }`}
        onMouseEnter={handleHover} 
        onMouseLeave={handleMouseLeave} 
      >
        <div className="image-wrapper ">
          <Image
            src={image2} // Main image
            alt="Base Image"
            width={550}
            height={360}
            className="main-image"
          />

          {/* Show additional images on hover */}
          <div
            className={`hover-images-container ${isHover ? "visible" : ""} 
          
         

          `}
          >
            <div className="hover-top-right">
              <Image
                src={image1}
                alt="Top Right Image"
                width={120}
                height={150}
                className="corner-image"
              />
            </div>

            <div className="hover-bottom-left">
              <Image
                src={image3}
                alt="Bottom Left Image"
                width={300}
                height={220}
                className="corner-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="text-content" style={{ maxWidth: "50%", width: "30%" }}>
        <ListPoints
          heading="AI-powered OKR Management"
          // subheading="Everything that you need to achieve your goal in one place."
          list1={[
            "Track your OKRs",
            "Collaborate effectively",
            "Gain insights with AI",
          ]}
          showPopup={showPopup}
          link="/more-info"
        />
      </div>
    </div>
  );
};
