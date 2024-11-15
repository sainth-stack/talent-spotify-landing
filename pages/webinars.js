import React, { useRef, useState } from 'react';
import Navigation from "../Components/navigationNew";
import Footer from '../Components/Footer';
import image1 from '../assets/svg/image1.svg';
import image2 from '../assets/svg/image2.svg';
import image3 from '../assets/svg/image3.svg';
import image4 from '../assets/svg/image4.svg';
import image5 from '../assets/svg/image5.svg';
import { list1, list11, list2, list21, list31, list32, list41, list42, list51, list52 } from '../utilities';
import { WebinarPastContent } from '../Components/WebinarComponents/WebinarPastContent';

import useWindowSize from "../utilities/UseWindowSize";
import MobileFooter from "../Components/mobile-version/MobileFooter";

export default function WebinarMain() {
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
    <div className="" style={{ minHeight: "100vh", overflow: "auto", backgroundColor: "#ebe3d5", paddingTop: "70px" }}>
      {/* Add a padding-top to prevent the navbar from overlapping the content */}
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <div className="container">
      <WebinarPastContent
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
      </div>
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
