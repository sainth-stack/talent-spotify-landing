import React, { useState } from "react";
import Footer from "../Components/Footer";
import image1 from ".././assets/svg/pricing1.svg";
import image2 from ".././assets/svg/pricing2.svg";
import image3 from ".././assets/svg/pricing3.svg";
import Card3 from "../Components/Card3";
import BlogNav from "../Components/BlogNav";
import { features, plans } from "../Components/table/data";
import FeatureTable from "../Components/table/FeatureTable";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
import MobileFooter from "../Components/mobile-version/MobileFooter";
import { useRef } from "react";

export default function Pricing() {
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
  const data1 = {
    heading: "Basic",
    description: "OKR + Rewards + Recognition",
    name: "$2",
    buttonText: "Try  For Free",
    description2: "Plan Includes:",
    keypoints: [
      "Support by email and chat",
      "Social recognition and achievements",
      "Actionable analytics",
      "Effortless global rewards",
      "Effortless global rewards",
      "Automated recognition for work anniversaries and birthdays",
    ],
    image: image1,
  };
  const data2 = {
    heading: "Pro",
    description: "Basic + Performance Review",
    name: "$3",
    buttonText: "Try It For Free",
    top: true,
    description2: "Everything in Basic plus:",
    keypoints: [
      "Dedicated Account manager",
      "Centralized company incentives and awards",
      "Configurable admin permissions",
      "Advanced reporting",
      "Incentivized employee feedback gathering",
      "Performance review",
      "1:1 Meetings",
    ],
    image: image2,
  };
  const data3 = {
    heading: "Enterprise Plan",
    description: "Pro + Integration",
    name: "Contact us for Pricing",
    buttonText: "REQUEST A DEMO",
    description2: "Everything in Pro plus:",
    keypoints: [
      "Dedicated Account manager and priority service",
      "99% guaranteed uptime SLA",
      "Dedicated support and consultation team",
      "Launch strategy and rollout support",
      "Manager resources and training",
      "Custom HRIS integrations",
      "Custom integrations to KPI sources",
    ],
    image: image3,
  };

  return (
    <div className="bg-[#EAE3D6] " style={{ height: "100vh", overflow: "auto", background: "#EAE3D6" }}>
      
      

      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
<div style={{marginTop:"6rem"}} className=" text-center container">
      <h1 className="font-bold mb-4 ">Transparent Pricing According to your need</h1>
      </div>
      <div className=" container grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center " >

        

        
        <Card3
          data={data1}
          setShowPopup={setShowPopup}
          className="w-[300px] p-2"
        />
        <Card3
          data={data2}
          top={true}
          setShowPopup={setShowPopup}
          className="w-[300px] p-2"
        />
        <Card3
          data={data3}
          setShowPopup={setShowPopup}
          className="w-[300px] p-2"
        />
      </div>

      <h1 className="text-center">Compare our Plans</h1>
      <div className="p-4">
        <FeatureTable features={features} plans={plans} />
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
