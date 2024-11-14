import React, { useState } from "react";
import ListPoints from "./ListPointsWebinarPast";
import Image from "next/image";
import yellowdot from "../../assets/svg/yellowdot.svg";

import webinar_main_1 from "../../assets/images/webinar_main_1.png"
import webinar_main_2 from "../../assets/images/webinar_main_2.png"
import webinar_sub_1 from "../../assets/images/webinar_sub_1.png"
import webinar_sub_2 from  "../../assets/images/webinar_sub_2.png"
import webinar_sub_3 from "../../assets/images/webinar_sub_3.png"

import Card from "../Card4";
import Dropdown from "../Dropdown";
import ShowMoreButton from './../Button/ShowMoreButton';

export function WebinarPastContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const options = [
    { key: "All", value: "All" },
    { key: "Performance", value: "Performance" },
    { key: "OKR", value: "OKR" },
    { key: "Rewards", value: "Rewards" },
    { key: "Recognition", value: "Recognition" },
    { key: "Employee Behaviour", value: "Employee Behaviour" },
  ];

  const webinars = [
    {
      image: webinar_sub_1,
      heading: "How To Measure Your OKRs Successfully",
      subheading:
        "Exploring approaches to performance reviews and feedback for a more engaged, future-ready workplace.",
      category: "OKR",
    },
    {
      image: webinar_sub_2,
      heading: "Future of performance reviews and workplace feedback",
      subheading:
        "Discover the next generation of performance reviews and feedback to drive growth and engagement.",
      category: "Performance",
    },
    {
      image: webinar_sub_3,
      heading: "Applied Behavioural Science in Employee Experiences ",
      subheading:
        "Leveraging behavioral science to shape impactful employee experiences and fuel organizational success.",
      category: "Rewards",
    },

    // Add more webinars as needed
  ];

  const filteredWebinars =
    selectedCategory === "All"
      ? webinars
      : webinars.filter((w) => w.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-10 lg:py-20">
      <div className="text-center relative mb-10">
        <h3 className="text-3xl font-bold mb-3">
          Get Access to Our Latest Webinar
        </h3>
      </div>


      {/* cards badge */}

      <div className="flex w-full justify-center gap-4 relative">
        {/* Card 1 with Upcoming Badge */}
        <div className="relative w-45%">
          <span className="absolute -top-3 left-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
            Upcoming
          </span>
          <Card
            image={webinar_main_1}
            heading="How To Measure Your OKRs Successfully"
            subheading="Exploring approaches to performance reviews and feedback for a more engaged, future-ready workplace."
            width="100%" // Ensure the card takes full width of the wrapper
            height="400px"
          />
        </div>

        {/* Card 2 with Upcoming Badge */}
        <div className="relative w-45%">
          <span className="absolute -top-3 left-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
            Upcoming
          </span>
          <Card
            image={webinar_main_2}
            heading="Future of performance reviews and workplace feedback"
            subheading="Discover the next generation of performance reviews and feedback to drive growth and engagement."
            width="100%" // Ensure the card takes full width of the wrapper
            height="400px"
          />
        </div>
      </div>

      {/* cards badge */}
      <h3 className="text-3xl font-bold mb-2 text-left">All webinar</h3>

      <div className="d-flex  justify-between gap-4 w-full ">
        {filteredWebinars.map((webinar, index) => (
          <div
            key={index}
            className=""

          >

            <Card
              image={webinar.image}
              heading={webinar.heading}
              subheading={webinar.subheading}
              width="auto" // Fixed width
              height="400px" // Fixed height
            />
          </div>
        ))}
      </div>
        <ShowMoreButton />
    </div>
  );
}
