import React, { useState } from "react";
import Image from "next/image";
import create_recog from "../assets/svg/create_recog.svg";
import recog_phone from "../assets/images/recog_phone.png";

import ReviewsAndCards from "./Reviews";
import { recognitionData } from "../utilities/recognitionData";
import Card from "./Card4";

export default function Recognitions() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const webinars = [
    {
      image: recog_phone,
      heading: "Peer to Peer",
      subheading:
        "Promote engagement and reinforce processional growth with appreciation. Empower your team with peer-to-peer recognition to praise each other.",
      category: "OKR",
    },
    {
      image: recog_phone,
      heading: "Manager to Report",
      subheading:
        "Save your people leader’s time and effect running recognition and rewards programs to keep your employees engaged. Track activity from the administrative dashboard.",
      category: "Performance",
    },
    {
      image: recog_phone,
      heading: "Incentives & Rewards",
      subheading:
        "Empower your team to go the extra mile. We provide 600+ rewards with quick implementation so you can easily start giving recognition and tracking performance.",
      category: "Rewards",
    },

    // Add more webinars as needed
  ];

  const filteredWebinars =
    selectedCategory === "All"
      ? webinars
      : webinars.filter((w) => w.category === selectedCategory);

  return (
    <div>
      {/* This is the section with the image */}
      <div className="d-flex justify-center m-1 p-1 pl-5 ml-5">
        <div className="pl-3">
          <Image
            src={create_recog}
            alt="create_recog"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Card displaying objective design questions */}
      <div className="d-flex flex-wrap justify-content-center ">
        <ReviewsAndCards reviewItems={recognitionData} imageSrc={recog_phone} />
      </div>







      {/* footer cardsa sad */}


      {/* featutrers */}

      <div className="bg-black py-8 w-screen  flex mb-4 flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-6">
          <h2 className="text-white font-bold text-2xl">Features</h2>
        </div>

        {/* Cards Section */}

        <div className="d-flex flex-wrap  justify-evenly  w-full">
          {filteredWebinars.map((webinar, index) => (
            <div
              key={index}

            >
              <Card
                image={webinar.image}
                heading={webinar.heading}
                subheading={webinar.subheading}
                width="350px" // Fixed width
                height="400px" // Fixed height
              />
            </div>
          ))}
        </div>
      </div>


      {/* featueres */}








    </div>
  );
}
