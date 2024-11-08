import React, { useState } from "react";
import Footer from "../Components/Footer";
import Image from "next/image";
import BlogNav from "../Components/BlogNav";
import Pie from "../Components/Pie";
import yellowdot from "../assets/svg/yellowdot.svg";
import mobRecog from "../assets/svg/mobRecog.svg";
import RegCard from "../Components/RegCard";
import regCard1 from "../assets/svg/regCard1.svg";
import regCard2 from "../assets/svg/regCard2.svg";
import regCard3 from "../assets/svg/regCard3.svg";
import pie1 from "../assets/svg/Pie.svg";
import pie2 from "../assets/svg/Pie2.svg";
import pie3 from "../assets/svg/Pie3.svg";
import recog_phone from "../assets/images/recog_phone.png";

import Recognitions from "../Components/Recognitions";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="bg-[#ebe3d5] ">
      <div className="container">
        <BlogNav
          showPopup={showPopup}
          setShowPopup={() => setShowPopup(false)}
          heading="Recognition"
          subheading="Did you know that companies with highly engaged employees experience..."
        />
      </div>
      <div className="d-flex justify-content-center  flex-wrap">
        <Recognitions />
      </div>

      <Footer />
    </div>
  );
}
