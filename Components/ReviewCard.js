import React, { useState, useEffect } from "react";
import Image from "next/image";
import cards_images from "../assets/images/cards_images.png";

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
                    borderRadius: "10px",
                    padding: "20px",
                    border: "4px solid transparent",
                    backgroundClip: "border-box",
                    background: "linear-gradient(135deg, white, transparent)",
                    position: "relative",
                    borderImage: "linear-gradient(135deg, #4c6ef5, #6a4cfc) 1",
                    zIndex: 1, // Ensures content stays within the card boundaries
                    width: isMobile ? "100%" : "90%", // Full width on mobile, smaller on larger screens
                    marginBottom: isMobile ? "20px" : "0", // Add space below on mobile for separation
                }}
            >
            
                <h4 style={{ textAlign: "center", fontWeight: "bold", paddingBottom: "10px" }}>Rewards</h4>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    {reviewItems.map((item, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center", width: "80%",paddingLeft: "20px" }}>
                            <li style={{ padding: "10px", flex: 1, listStyleType: "disc" }}>{item.answer}</li>
                        </div>
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
