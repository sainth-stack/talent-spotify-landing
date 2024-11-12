import React, { useState } from "react";
import Footer from "../Components/Footer";
import image1 from "../assets/svg/image1.svg";
import image2 from "../assets/svg/image2.svg";
import image3 from "../assets/svg/image3.svg";
import image4 from "../assets/svg/image4.svg";
import { useRef } from "react";

import image5 from "../assets/svg/image5.svg";
import "../styles/about.module.css"
import {
  list1,
  list11,
  list2,
  list21,
  list31,
  list32,
  list41,
  list42,
  list51,
  list52,
} from "../utilities";
import { AboutOurValues } from "../Components/About/AboutOurValues";
import "../i18n";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
import MobileFooter from "../Components/mobile-version/MobileFooter";
export default function AboutUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTrail, setShowTrail] = useState(false);
  const myRef = useRef(null);
  const homeRef = useRef(null);
  const okrRef = useRef(null);
  const howItWorksRef = useRef(null);
  const awardsRef = useRef(null);
  // const itWorksRef = useRef(null)
  const executeScroll = () => myRef.current?.scrollIntoView();
  const homerefScroll = () => homeRef.current?.scrollIntoView();
  const okrrefScroll = () => okrRef.current?.scrollIntoView();
  const howItWorksScroll = () => howItWorksRef.current?.scrollIntoView();
  const awardsScroll = () =>
    awardsRef.current?.scrollIntoView({ behavior: "smooth" });
  // const itworksref=()=> ititWorksRefWorks.current.scrollIntoView()

  const  isMobile  = useWindowSize();
  return (
    <div
      className=""
      style={{ height: "100vh", overflow: "auto", background: "#EAE3D6" }}
    >
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <AboutOurValues
        image1={image1}
        list1={list1}
        list2={list2}
        list11={list11}
        list21={list21}
        image2={image2}
        image3={image3}
        list31={list31}
        list32={list32}
        list41={list41}
        list42={list42}
        image4={image4}
        image5={image5}
        list51={list51}
        list52={list52}
        showPopup={() => setShowPopup(true)}
      />
      {isMobile ? (

        <MobileFooter
          homerefScroll={homerefScroll}
          okrrefScroll={okrrefScroll}
          howItWorksScroll={howItWorksScroll}
          awardsScroll={awardsScroll}
        />
      ) : (
        <Footer />
      )}
    </div>
  );
}
