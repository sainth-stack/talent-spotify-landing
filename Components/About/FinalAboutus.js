import React from "react";
import aneel from "../../assets/images/aneel.png";
import prasanth from "../../assets/svg/prasanth.svg";
import linkedinIcon from "../../assets/svg/linkedinIcon.svg";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import Card from "../Card";

export default function FinalAboutus() {
  return (
    <div className="text-center">
      <div style={{ margin: "7rem 0 3rem 0" }} className="text-center">
        <h1 className="font-weight-bold mb-4">
          On a mission to build a culture that truly <br /> works for you
        </h1>
      </div>

      {/* Border */}
      <div
        className="position-relative rounded-3 "
        style={{
          padding: "5px", // Space for the gradient "border"
          borderRadius: "10px", // Rounded corners for the outer div
          background: "linear-gradient(to right, #9967f5, #576afa)", // Gradient background for the border effect
        }}
      >
        {/* Inner content div with white background */}
        <div
          className="d-flex justify-content-center rounded-3"
          style={{
            borderRadius: "15px", // Inner border radius to match the outer div
            backgroundColor: "#ebe3d5", // Background color for inner content
            padding: "20px", // Adjust padding as needed for inner content
          }}
        >
          <div className="d-flex justify-content-center m-4">
            {/* Title inside the border */}
            <h2
              className="position-absolute"
              style={{
                top: "-1.25rem",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "1.25rem",
                color: "white",
                width: "10rem",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                backgroundImage: "linear-gradient(to right, #9967f5, #576afa)",
                zIndex: 10,
              }}
            >
              Founders
            </h2>

            {/* Cards */}
            <div className="d-flex justify-content-center flex-wrap gap-3 m-3">
              <Card
                styles="shadow-lg"
                icon={aneel}
                heading="Aneel"
                subheading="Founder, CEO"
                link={{
                  url: "https://www.linkedin.com/in/aneel-kumar-bonu/",
                  icon: linkedinIcon,
                }}
              />
              <Card
                styles="shadow-lg"
                icon={prasanth}
                heading="Prashanth Reddy"
                subheading="Co-Founder, CTO"
                link={{
                  url: "https://www.linkedin.com/in/prashanth-s-reddy/",
                  icon: linkedinIcon,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Motivation Section */}
      <div>
        <h1 className="text-start pb-4 mt-4 fw-bold">Our Motivation</h1>
      </div>

      <div className="container mb-4">
        <p className="fs-6 text-start">
          <Trans>
            We empathized with companies tired of using traditional performance
            management tools. We build employee motivation, transparency in reviews, and
            nudges self-management tools. We are doing this by combining
            behavioral science (psychology) and data science (machine learning
            and artificial intelligence).
          </Trans>
          <br />
          <br />
          Our vision is to provide the best talent management experience for
          companies to retain and motivate their employees.
        </p>
      </div>

    </div>
  );
}
