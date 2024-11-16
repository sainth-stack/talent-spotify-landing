import React, { useRef, useState } from "react";
import Footer from "../Components/Footer";
import image1 from ".././assets/images/pricing1.png";
import image2 from ".././assets/images/pricing2.png";
import image3 from ".././assets/images/pricing3.png";
import Card3 from "../Components/Card3";
import BlogNav from "../Components/BlogNav";
import TermsConditions from "../Components/TermsConditions";
import Reviews from "../Components/Reviews";
import { reviewItems } from "../utilities/reviewData";
import ReviewsAndCards from "../Components/Reviews";
import ChatImg from "../assets/images/Chat.png";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
import MobileFooter from "../Components/mobile-version/MobileFooter";

export default function Review() {
  const [showPopup, setShowPopup] = useState(false);
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

  return (
    <div className="" style={{ height: "100vh", overflow: "auto", background: "#EAE3D6" }}>
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />

      <div className="d-flex justify-content-center w-100 text-start mt-5">
        <ReviewsAndCards
          reviewItems={reviewItems}
          imageSrc={ChatImg}
          topHeading="One Platform for all your employee performance and Engagement"
          title="Review"
        />
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