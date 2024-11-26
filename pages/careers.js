import React, { useRef, useState } from "react";
import Footer from "../Components/Footer";
import carrer_img from "../assets/images/carrer_img.png";
import Careers from "../Components/Careers";
import Image from "next/image";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";

export default function Career() {
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
  const awardsScroll = () => awardsRef.current?.scrollIntoView({ behavior: "smooth" });

  const isMobile = useWindowSize();

  return (
    <div
      className="mt-5"
      style={{
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#ebe3d5",
      }}
    >
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <div className="container mt-5">
        <div className="row justify-center align-items-center my-5">
          {/* Left Section */}
          <div className="col-12 col-md-5 ms-2">
            <h1 className="mb-2 ms-4">Work With Us!</h1>
            <p className="py-1 ms-4">
              To amplify human potential and create the <br />
              next opportunity for people, businesses, and communities.
            </p>
            <button
              className="btn ms-4"
              style={{ background: "#083c61", color: "#fff" }}
            >
              View Job Openings
            </button>
          </div>

          {/* Right Section with Image */}
          <div
            className="col-12 col-md-6 d-flex justify-content-end"
            style={{
              paddingRight: "80px", // Moves the image further right
              position: "relative",
            }}
          >
            <Image
              src={carrer_img}
              alt="Career image"
              className="img"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="bg-light col-12">
        <div className="d-flex justify-content-center m-5 pt-lg-5 flex-wrap">
          <Careers />
        </div>
      </div>

      <Footer />
    </div>
  );
}
