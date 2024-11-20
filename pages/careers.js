import React, {useRef, useState } from "react";
import Footer from "../Components/Footer";
import image1 from ".././assets/images/pricing1.png";
import image2 from ".././assets/images/pricing3.png";
import carrer_img from "../assets/images/carrer_img.png";
import Card3 from "../Components/Card3";
import BlogNav from "../Components/BlogNav";
import TermsConditions from "../Components/TermsConditions";
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
    <div className="mt-5" style={{ height: "100vh", overflow: "auto", backgroundColor:"#ebe3d5" }}>
    <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <div className="container mt-5">
        
        <div className="row  justify-center align-items-center my-5">
          <div className="col-12 col-md-5  ms-2   ">
            <h1 className="mb-2  ms-4">Work With Us!</h1>
            <p className="py-1 ms-4 ">
              To amplify human potential and create the <br />
              next opportunity for people, businesses, and communities.
            </p>
            <button className="btn btn-primary ms-4">View Job Openings</button>
          </div>
          <div className="col-12 col-md-6 d-flex ">
            <Image src={carrer_img} alt="Career image" className="img" />
          </div>
        </div>
      </div>

      <div className=" bg-light  " >
        <div className="d-flex justify-content-center m-5 pt-lg-5 flex-wrap">
          <Careers />
        </div>
      </div>

      <Footer />
    </div>
  );
}
