import React from "react";
import Image from 'next/image';
import cards_images from "../assets/images/cards_images.png";
import ReviewCard from './ReviewCard';  // Import the new ReviewCard component
import { rewardData } from "../utilities/recognitionData";
import ProgressCard from "./Progress/ProgressCard";

const RewardsFinal = () => {
  return (
    <>
      {/* Add margin-top to create a gap between the Navbar and the content */}
      <div
        className="d-flex flex-wrap justify-center mt-4"
        style={{
          display: 'flex',
          justifyContent: 'center', // Center the content horizontally
          alignItems: 'center', // Center the content vertically
          flexDirection: 'column',
          marginTop: "5%" // Ensure there's a gap from the top (Navbar)
        }}
      >
        {/* Render the ReviewCard with the reward data */}
        <div
          className="d-flex justify-center items-center"
          style={{
            display: 'flex',
            justifyContent: 'center', // Center the card horizontally
            alignItems: 'center', // Center the card vertically
            width: '100%', // Make sure the div takes full width to enable proper centering
          }}
        >
          <ReviewCard reviewItems={rewardData} imageSrc={cards_images} />
        </div>
      </div>

      {/* Progress Card Section */}
      <div className="container mt-6"> {/* Add margin-top to create space between sections */}
        <ProgressCard />
      </div>
    </>
  );
};

export default RewardsFinal;
