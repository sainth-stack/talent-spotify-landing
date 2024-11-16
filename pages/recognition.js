import React, { useRef, useState } from "react";
import Footer from "../Components/Footer";
import MobileFooter from "../Components/mobile-version/MobileFooter";
import Recognitions from "../Components/Recognitions";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
import { ProgressCircle } from "./../Components/Progress/ProgressCard";
import { recognitionProgressData } from "../utilities/progressData";

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
        minHeight: "100vh",
        overflow: "auto",
        background: "#EAE3D6",
        paddingTop: "80px", // Adjust padding to account for the navbar height
      }}
    >
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />

      <h1 className="text-center fs-2 fw-bold mt-5">
        Did you know that companies with highly engaged employees experience...
      </h1>
      <div className="d-flex justify-content-evenly flex-wrap gap-3 mt-2 p-3">
        {recognitionProgressData.map((data, index) => (
          <div
            key={index}
            className="d-flex flex-column justify-content-center align-items-center p-2"
          >
            <ProgressCircle
              percentage={data.percentage}
              text={data.text}
              borderColor={data.borderColor || "border-secondary"} // Using Bootstrap's border color classes
            />
            <div className="fs-5 w-75 text-center fw-bold  mt-2">
              {data.text}
            </div>
          </div>
        ))}
      </div>

      <Recognitions />
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
