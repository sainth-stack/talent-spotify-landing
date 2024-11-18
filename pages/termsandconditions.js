import React, { useRef, useState } from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
import TermsConditions from "../Components/TermsConditions";

export default function Termsandconditions() {
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
      className="d-flex flex-column"
      style={{
        minHeight: "100vh", // Occupy full height of the viewport
        backgroundColor: "#EAE3D6", // Hex background color
      }}
    >
      {/* Navigation */}
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      
      {/* Main Content */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-start">
        
          
            <div className="col-12 col-md-10 col-lg-8">
              <TermsConditions />
       
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
