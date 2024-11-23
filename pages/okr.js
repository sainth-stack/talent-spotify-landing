import React, { useRef, useState } from "react";
import Image from "next/image";
import Footer from "../Components/Footer";
import BlogNav from "../Components/BlogNav";
import OkrGreenCard from "../Components/OkrGreenCard";
import okrMob from "../assets/svg/okrMob.svg";
import okrflow from "../assets/svg/okrflow.svg";
import okrImage from "../assets/images/reviewImage.png";
import MobileFooter from "../Components/mobile-version/MobileFooter";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
import yellowdot from "../assets/svg/yellowdot.svg";
import Review from "./reviews";
import ReviewsAndCards from "../Components/Reviews";
import { objectiveDesignQuestions } from "../utilities/objectivesData";

export default function Home() {
  const [showTrail, setShowTrail] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",

        background: "#EAE3D6",
        overflow: "auto",
      }}
    >
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <div
        className="container"
        style={{
          flex: 1,
          paddingTop: "100px",
          paddingLeft: "60px",
          width: "1300px",
        }}
      >
        {" "}
        {/* Add padding to ensure content is visible */}
        <div className="text-center position-relative">
          <h3 className="fw-bold fs-4 ">
            What Makes OKR Powerful for startups?
          </h3>
        </div>
        <div className="d-flex justify-content-center   my-lg-5 w-100">
          <Image
            src={okrflow}
            width={800}
            alt="okrflow"
            layout="intrinsic" // Ensures the image scales based on its intrinsic size
            objectFit="contain" // Ensures the image maintains its aspect ratio while fitting within the container
            className="okrMob img-fluid" // Makes the image fluid and responsive
          />
        </div>
        <ReviewsAndCards
          reviewItems={objectiveDesignQuestions}
          imageSrc={okrImage}
          title="How do you design effective Objectives?"
        />
      </div>

      <Footer />

      {/* Mobile Footer: only shown if it's a mobile view */}
      {/*  {isMobile ? (
        <div style={{ marginTop: 'auto' }}> 
          <MobileFooter
            homerefScroll={homerefScroll}
            okrrefScroll={okrrefScroll}
            howItWorksScroll={howItWorksScroll}
            awardsScroll={awardsScroll}
          />
        </div>
      ) : (
        <Footer />
      )} */}
    </div>
  );
}
