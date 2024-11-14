import React from "react";
import cards_images from "../assets/images/cards_images.png";
import Image from "next/image";

const ReviewCard = ({ reviewItems, imageSrc }) => {
    return (
        <div
            className="review-card "
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
            }}
        >
            <h4 style={{ textAlign: "center", fontWeight: "bold", paddingBottom: "10px" }}>Rewards</h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {reviewItems.map((item, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", width: "90%" }}>
                        <li style={{ padding: "10px", flex: 1 }}>{item.answer}</li>
                    </div>
                ))}
            </ul>
            {imageSrc && (
                <div
                    style={{
                        position: "absolute",
                        top: "40%", // Centers vertically
                        right: "-23%", // Slight overlap to the right
                        transform: "translateY(-50%)",
                        width: "auto", // Adjusts for perfect vertical centering
                        height: "auto", // Controls the height of the image relative to the card
                        width: "auto", // Maintains aspect ratio
                        zIndex: 1000,
                    }}
                >
                    <Image
                        src={cards_images}
                        alt="Recognition"
                        layout="intrinsic" // Ensures the image respects width and height
                        width={350}
                        height={350}
                        style={{
                            borderRadius: "8px",

                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default ReviewCard;
