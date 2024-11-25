import React, { useState, useEffect } from "react";
import Image from "next/image";
import cards_images from "../assets/images/cards_images.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ReviewCard = ({ reviewItems, imageSrc }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    handleResize(); // Set the initial state
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <div
      className="review-card-container container"
      style={{
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row", // Stack content on mobile, row on larger screens
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        marginTop: "75px", // Prevent overlap with Navbar
        position: "relative",
      }}
    >
      {/* Review Card Section */}
      <div
        className="review-card"
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
          border: "4px solid  transparent",

          borderImage: `
          linear-gradient(
            to right,
            Blue 37%,          /* 50% blue */
         55%, /* 55% fading */
            transparent 100%       /* 25% transparent */
          )`,
          borderImageSlice: "1",

          backgroundClip: "border-box",
          background: "linear-gradient(135deg, white, transparent)",
          position: "relative",

          //   borderImage: "linear-gradient(135deg, #4c6ef5, #6a4cfc) 1",
          zIndex: 1, // Ensures content stays within the card boundaries
          width: isMobile ? "100%" : "90%", // Full width on mobile, smaller on larger screens
          marginBottom: isMobile ? "20px" : "0",
          // Add space below on mobile for separation
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontWeight: "bold",
            paddingBottom: "10px",
          }}
        >
          Rewards
        </h4>
        <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
          {reviewItems.map((item, index) => (
            <li
              className="py-3 ipadpro_font"
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 0",
                fontSize: ".94rem",
                wordBreak: "break-word",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  flexShrink: 0,
                }}
              ></span>
              <span>{item.answer}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      {imageSrc && (
        <div
          style={{
            position: isMobile ? "static" : "absolute", // Static on mobile to flow with content, absolute on larger screens
            top: isMobile ? "auto" : "10%", // Adjust top position on large screens for the overlap effect
            right: isMobile ? "auto" : "-2%", // Adjust the right margin on larger screens for overlap
            width: isMobile ? "100%" : "auto", // Full width on mobile, auto on larger screens
            maxWidth: "350px", // Max width for the image
            zIndex: 100,
            marginTop: isMobile ? "20px" : "0", // Ensure some space between image and card on mobile
          }}
        >
          <Image
            src={cards_images}
            alt="Recognition"
            layout="intrinsic"
            width={350}
            height={350}
            style={{
              borderRadius: "8px",
              display: "block", // Ensure it's not inline
              margin: "auto", // Center the image
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
