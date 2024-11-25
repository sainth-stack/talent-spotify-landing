import React from "react";
import Image from "next/image";
import cards_images from "../assets/images/cards_images.png";
import ReviewCard from "./ReviewCard"; // Import the new ReviewCard component
import { rewardData } from "../utilities/recognitionData";
import ProgressCard from "./Progress/ProgressCard";

const RewardsFinal = () => {
  return (
    <>
      {/* Add margin-top to create a gap between the Navbar and the content */}
      <div
        className="d-flex flex-column align-items-center mt-4"
        style={{
          marginTop: "5%", // Ensure there's a gap from the top (Navbar)
        }}
      >
        {/* Render the ReviewCard with the reward data */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
           // Make sure the div takes full width to enable proper centering
          }}
        >
          <ReviewCard reviewItems={rewardData} imageSrc={cards_images} />
        </div>
      </div>

      {/* Progress Card Section */}
      <div className="container mt-4">
        {" "}
        {/* Add margin-top to create space between sections */}
        <h2 className="fw-bold fs-4  text-center ">Why It Matters?</h2>
        <ProgressCard />
      </div>
    </>
  );
};

export default RewardsFinal;
