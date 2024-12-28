import React, { useState } from "react";
import image1 from "../../assets/images/pedict.png"; // Assuming the correct path to your image
import image2 from "../../assets/images/pedict.png"; // Assuming the correct path to your image
import image3 from "../../assets/images/pedict.png"; // Assuming the correct path to your image
import Image from "next/image";
import ListPoints from "../ListPoints";

export const Section2OKR = ({ reverse = true, showPopup, homerefScroll }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="d-flex align-items-center w-full justify-content-center mt-4 mb-4 pb-4"
      ref={homerefScroll}
    >
      {/* Image Content Section */}
      <div
        className={`image-container imagePic m-0 p-0 ${
          reverse ? "reverse" : ""
        }`}
        onMouseEnter={handleHover} // Trigger hover effect
        onMouseLeave={handleMouseLeave} // Trigger hover out effect
      >
        <div className="image-wrapper ">
          {/* Main image */}
          <Image
            src={image2} // Main image
            alt="Base Image"
            width={550}
            height={360}
            className="main-image"
          />

          {/* Show additional images on hover */}
          <div className={`hover-images-container ${isHover ? "visible" : ""}`}>
            <div className="hover-top-right">
              <Image
                src={image1}
                alt="Top Right Image"
                width={170}
                height={200}
                className="corner-image"
              />
            </div>

            <div className="hover-bottom-left">
              <Image
                src={image3}
                alt="Bottom Left Image"
                width={380}
                height={150}
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
          subheading="Everything that you need to achieve your goal in one place."
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
