import React, { useState } from "react";
import { useRef } from "react";

import Footer from "../Components/Footer";
import Card from "../Components/CardBlogDetails";
import image2 from ".././assets/images/blog1.png";
import image1 from ".././assets/images/blog2.png";
import image3 from ".././assets/images/blog3.png";

import MobileFooter from "../Components/mobile-version/MobileFooter";

import ShowMoreButton from "../Components/Button/ShowMoreButton";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";

export default function Home() {
  const [showTrail, setShowTrail] = useState(false);
  const myRef = useRef(null);
  const homeRef = useRef(null);
  const okrRef = useRef(null);
  const howItWorksRef = useRef(null);
  const awardsRef = useRef(null);

  const executeScroll = () => myRef.current?.scrollIntoView();
  const homerefScroll = () => homeRef.current?.scrollIntoView();
  const okrrefScroll = () => okrRef.current?.scrollIntoView();
  const howItWorksScroll = () => howItWorksRef.current?.scrollIntoView();
  const awardsScroll = () =>
    awardsRef.current?.scrollIntoView({ behavior: "smooth" });

  const isMobile = useWindowSize();

  const options = [
    { key: "All", value: "All" },
    { key: "Performance", value: "Performance" },
    { key: "OKR", value: "OKR" },
    { key: "Rewards", value: "Rewards" },
    { key: "Recognition", value: "Recognition" },
    { key: "Employee Behaviour", value: "Employee Behaviour" },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const heading1 =
    "Performance Management Can Make Your Company Recession-Proof";
  const heading3 = "8 Tips for Strategic Performance Management";
  const heading2 =
    "How to Measure Employee Performance: The Top Performance...";
  const subheading1 =
    "Read on to know how effective performance management can give your company the edge and help you weather the storm.";
  const subheading3 =
    "Performance management strategies can be complex and challenging to implement. Here are some great tips to make strategic performance management easy.";
  const subheading2 =
    "Wondering how to measure employee performance? Check out our guide to the top performance metrics, and find out which ones are best for your business.";

  return (
    <div
      className=""
      style={{ height: "100vh", overflow: "auto", background: "#EAE3D6" }}
    >
      {/* navbar */}
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />

      <div
        style={{ marginTop: "6rem" }}
        className="text-center container"
      >
        <h1 className="font-weight-bold mb-4">Knowledge Room</h1>
      </div>

      <div className="container mb-4">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 justify-content-center">
          <div className="col mb-4">
            <Card
              image={image1}
              heading={heading1}
              subheading={subheading1}
              className="card w-100 shadow-lg rounded-lg p-4"
            />
          </div>
          <div className="col mb-4">
            <Card
              image={image2}
              heading={heading2}
              subheading={subheading2}
              className="card w-100 shadow-lg rounded-lg p-4"
            />
          </div>
          <div className="col mb-4">
            <Card
              image={image3}
              heading={heading3}
              subheading={subheading3}
              className="card w-100 shadow-lg rounded-lg p-4"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <ShowMoreButton
            initialText="Show More"
            toggledText="Show Less"
            onClick={(expanded) =>
              console.log(expanded ? "Expanded" : "Collapsed")
            }
            className="text-center text-primary"
          />
        </div>
      </div>


        <Footer />


      {/* {isMobile ? (
        <MobileFooter
          homerefScroll={homerefScroll}
          okrrefScroll={okrrefScroll}
          howItWorksScroll={howItWorksScroll}
          awardsScroll={awardsScroll}
        />
      ) : (
        <Footer />
      )} */}
    </div>
  );
}
