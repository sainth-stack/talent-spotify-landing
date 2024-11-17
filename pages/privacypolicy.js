import React, { useRef,useState } from "react";
import Footer from "../Components/Footer";
import image1 from ".././assets/images/pricing1.png";
import image2 from ".././assets/images/pricing2.png";
import image3 from ".././assets/images/pricing3.png";
import Card3 from "../Components/Card3";
import BlogNav from "../Components/BlogNav";
import TermsConditions from "../Components/TermsConditions";
import Privacypolicy from "../Components/Privacypolicy";

import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
export default function Privacy() {

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
    <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#EAE3D6" }}>
     <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      {/* Main Content */}
      <div className="container mb-5 flex-grow-1">
        <div className="row">
          <div className="col-12">
            <Privacypolicy />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
