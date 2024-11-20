import React, {useRef, useState } from "react";
import Image from "next/image";
import Footer from "../Components/Footer";
import BlogNav from "../Components/BlogNav";
import contactusCard from "../assets/svg/contactusCard.svg";
import yellowdot from "../assets/svg/yellowdot.svg";
import Button from "../Components/Button";
import Contact from "../Components/Contact";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
export default function Home() {
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
    <div className="mt-2 mt-sm-5 " style={{  overflow: "auto", backgroundColor:"#ebe3d5" }}>
     <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <div className="d-flex mb-5  justify-content-center mt-5 pt-lg-5 flex-wrap">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
