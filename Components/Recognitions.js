import React, { useState } from "react";
import Image from "next/image";
import create_recog from "../assets/svg/create_recog.svg";
import feature_1 from "../assets/images/feature_1.png";
import feature_2 from "../assets/images/feature_2.png";
import recog_phone from "../assets/images/recog_phone.png";
import feature_3 from "../assets/images/feature_3.png";

import ReviewsAndCards from "./Reviews";
import { recognitionData } from "../utilities/recognitionData";
import Card from "./Card4";

export default function Recognitions() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const webinars = [
    {
      image: feature_1,
      heading: "Peer to Peer",
      subheading:
        "Promote engagement and reinforce processional growth with appreciation. Empower your team with peer-to-peer recognition to praise each other.",
      category: "OKR",
    },
    {
      image: feature_2,
      heading: "Manager to Report",
      subheading:
        "Save your people leader's time and effect running recognition and rewards programs to keep your employees engaged. Track activity from the administrative dashboard.",
      category: "Performance",
    },
    {
      image: feature_3,
      heading: "Incentives & Rewards",
      subheading:
        "Empower your team to go the extra mile. We provide 600+ rewards with quick implementation so you can easily start giving recognition and tracking performance.",
      category: "Rewards",
    },
  ];

  const filteredWebinars =
    selectedCategory === "All"
      ? webinars
      : webinars.filter((w) => w.category === selectedCategory);

  return (
    <div >
      {/* This is the section with the image */}
      <div className="d-flex justify-content-center m-1 p-1 ps-5 ms-5">
        <div className="ps-3">
          <Image
            src={create_recog}
            alt="create_recog"
            className="img-fluid"
           
          />
        </div>
      </div>

      {/* Card displaying objective design questions */}
      <ReviewsAndCards
        reviewItems={recognitionData}
        imageSrc={recog_phone}
        title={"Gamified and Real-Time Leaderboards"}
      />

      {/* Features */}
     <div className="bg-dark py-5">
      <div className="container">
        <h2 className="text-white text-center mb-4">Features</h2>
        <div className="row justify-content-center">
          {filteredWebinars.map((webinar, index) => (
            <Card
              key={index}
              image={webinar.image}
              heading={webinar.heading}
              subheading={webinar.subheading}
              width="30px"
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}