import React, { useState } from "react";
import Footer from "../Components/Footer";
import image1 from ".././assets/images/pricing1.png";
import image2 from ".././assets/images/pricing2.png";
import image3 from ".././assets/images/pricing3.png";
import Card3 from "../Components/Card3";
import BlogNav from "../Components/BlogNav";
import TermsConditions from "../Components/TermsConditions";
import Privacypolicy from "../Components/Privacypolicy";

export default function Privacy() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-[#EAE3D6]  ">
      <div className="container ">
        <BlogNav
          showPopup={showPopup}
          setShowPopup={() => setShowPopup(false)}
          heading="privacy policy"
          subheading=""
        />
      </div>
      <div className="d-flex justify-content- container  flex-wrap">
        <Privacypolicy />
      </div>
      <Footer />
    </div>
  );
}
