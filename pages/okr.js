import React, { useState } from "react";
import Image from "next/image";
import Footer from "../Components/Footer";
import BlogNav from "../Components/BlogNav";
import OkrGreenCard from "../Components/OkrGreenCard";
import okrMob from "../assets/svg/okrMob.svg";
import okrflow from "../assets/svg/okrFlow.svg";
import okrImage from "../assets/images/reviewImage.png";

import yellowdot from "../assets/svg/yellowdot.svg";
import Review from "./reviews";
import ReviewsAndCards from "../Components/Reviews";
import { objectiveDesignQuestions } from "../utilities/objectivesData";
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="bg-[#ebe3d5]">
      <div className="container">
        <BlogNav
          showPopup={showPopup}
          setShowPopup={() => setShowPopup(false)}
          heading="OKRS"
        />
      </div>
      <div className="container">
        <div className="text-center relative">
          <h3 className=" font-weight-bold">
            What Makes OKR Powerful for startups?
          </h3>
        </div>
        <div className="d-flex justify-content-center m-lg-5">
          <Image src={okrflow} alt="okrflow" className="okrMob  h-auto w-auto" />
        </div>
        <ReviewsAndCards
          reviewItems={objectiveDesignQuestions}
          imageSrc={okrImage}
        />{" "}
      </div>
      <Footer />
    </div>
  );
}
