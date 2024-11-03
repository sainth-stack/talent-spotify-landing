import React, { useState } from "react";
import Footer from "../Components/Footer";
import image1 from ".././assets/svg/pricing1.svg";
import image2 from ".././assets/svg/pricing2.svg";
import image3 from ".././assets/svg/pricing3.svg";
import Card3 from "../Components/Card3";
import BlogNav from "../Components/BlogNav";

export default function Pricing() {
  const [showPopup, setShowPopup] = useState(false);
  const data1 = {
    heading: "Basic",
    description: "OKR + Rewards + Recognition",
    name: "$2",
    buttonText: "Try  For Free",
    description2:
      "Support by email and chat - $1 per employee/month (billed Annually)",
    keypoints: [
      "Fun social recognition and achievements",
      "Engaging chat tool and intranet integrations",
      "Easy-to-use mobile apps",
      "Actionable analytics",
      "Effortless global rewards",
      "Automated recognition for work anniversaries and birthdays",
      "Legendary customer support",
    ],
    image: image1,
  };
  const data2 = {
    heading: "Pro Plan",
    description: "Basic + Performance Review",
    name: "$3",
    buttonText: "Try It For Free",
    top: true,
    description2:
      "Dedicated  Account manager- $2 per employee/month (billed Annualy)",
    keypoints: [
      "Bonusly Pro includes every Core feature, plus:",
      "Centralized company incentives and awards",
      "Configurable admin permissions",
      "Advanced reporting",
      "Incentivized employee feedback gathering",
    ],
    image: image2,
  };
  const data3 = {
    heading: "Enterprise Plan",
    description: "Pro + Integration",
    name: "Contact us for Pricing",
    buttonText: "REQUEST A DEMO",
    description2:
      "Dedicated Account manager and priority service - $2.5 per employee/month (More than 1000 employees)",
    keypoints: [
      "Bonusly Custom includes every Core & Pro feature, plus options for:",
      "99% guaranteed uptime SLA",
      "Dedicated support and consultation team",
      "Launch strategy and rollout support",
      "Manager resources and training",
      "Custom HRIS integrations",
    ],
    image: image3,
  };
  
  return (
    <div className="bg-[#EAE3D6] ">
      <div className="container">
        <BlogNav
          showPopup={showPopup}
          setShowPopup={() => setShowPopup(false)}
          subheading="Transparent Pricing According to your need"
        />
      </div>

      <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
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

      <Footer />
    </div>
  );
}
