import React from "react";
import aneel from "../../assets/images/aneel.png";
import prasanth from "../../assets/svg/prasanth.svg";
import linkedinIcon from "../../assets/svg/linkedinIcon.svg";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import Card from "../Card";
import  aboutCss from  "../../styles/about.module.css";
export default function FinalAboutus() {
  return (
    <div  className=" text-center">
      <div style={{ marginTop: "7rem" }} className=" text-center">
        <h1 className="font-bold mb-4 ">On a mission to build a culture that truly <br />works for you</h1>
      </div>
      
      {/* border */}
      <div
        className="relative rounded-2xl"
        style={{
          padding: "5px", // Space for the gradient "border"
          borderRadius: "10px", // Rounded corners for the outer div
          background: "linear-gradient(to right, #9967f5, #576afa)", // Gradient background for the border effect
        }}
      >
        {/* Inner content div with white background */}
        <div
          className="d-flex justify-content-center rounded-2xl"
          style={{
            borderRadius: "15px", // Inner border radius to match the outer div
            backgroundColor: "#ebe3d5", // Background color for inner content
            padding: "20px", // Adjust padding as needed for inner content
          }}
        >
          <div className="flex justify-center m-4">
            {/* Title inside the border */}
            <h2
              className="tablet_view absolute -top-4 left-1/2 transform -translate-x-1/2 text-xl text-white w-40 font-bold mb-4 px-6 rounded-full"
              style={{
                backgroundImage: "linear-gradient(to right, #9967f5, #576afa)",
                zIndex: 10,
              }}
            >
              Founders
            </h2>

            {/* Cards */}
            <div className="flex justify-center flex-wrap gap-8 m-3">
              <Card
                styles="tablet_Card shadow-lg"
                icon={aneel}
                heading="Aneel"
                subheading="Founder, CEO"
                link={{
                  url: "https://www.linkedin.com/in/aneel-kumar-bonu/",
                  icon: linkedinIcon,
                }}
              />
              <Card
                styles="tablet_Card shadow-lg"
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


      {/* border */}

      <div>
        <h1 className="text-left pb-4 mt-4 font-weight-bold">Our Motivation</h1>
      </div>
      <div className="d-flex justify-start mb-4">
        <p className="fs-15 col-md-10 text-justify">
          <Trans>
            We empathized for the companies who are tired of using traditional
            performance management tools. We build employee motivation,
            transparency in reviews and nudges self management tool. We are
            doing this by combing the behaviour science(Psychology) and data
            science (machine learning and Artificial Intelligence).
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
