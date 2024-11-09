import React, { useState } from "react";
import ListPoints from "./ListPointsWebinarPast";
import Image from "next/image";
import yellowdot from "../../assets/svg/yellowdot.svg";
import image1 from "../../assets/svg/webinarImage1.svg";
import image2 from "../../assets/svg/webinarImage2.svg";
import image3 from "../../assets/svg/webinarImage3.svg";
import Card from "../Card4";
import Dropdown from "../Dropdown";

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
      image: image1,
      heading: "How To Measure Your OKRs Successfully",
      subheading:
        "Exploring approaches to performance reviews and feedback for a more engaged, future-ready workplace.",
      category: "OKR",
    },
    {
      image: image2,
      heading: "Future of performance reviews and workplace feedback",
      subheading:
        "Discover the next generation of performance reviews and feedback to drive growth and engagement.",
      category: "Performance",
    },
    {
      image: image3,
      heading: "Rewards & Recognition Best Practices",
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
          <span className="absolute top-1 left-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
            Upcoming
          </span>
          <Card
            image={image1}
            heading="How To Measure Your OKRs Successfully"
            subheading="Exploring approaches to performance reviews and feedback for a more engaged, future-ready workplace."
            width="100%" // Ensure the card takes full width of the wrapper
            height="400px"
          />
        </div>

        {/* Card 2 with Upcoming Badge */}
        <div className="relative w-45%">
          <span className="absolute top-1 left-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
            Upcoming
          </span>
          <Card
            image={image2}
            heading="Performance Metrics for Growth"
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
    </div>
  );
}
