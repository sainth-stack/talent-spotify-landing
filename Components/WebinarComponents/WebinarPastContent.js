import React, { useState } from "react";
import Image from "next/image";
import webinar_main_1 from "../../assets/images/webinar_main_1.png";
import webinar_main_2 from "../../assets/images/webinar_main_2.png";
import webinar_sub_1 from "../../assets/images/webinar_sub_1.png";
import webinar_sub_2 from "../../assets/images/webinar_sub_2.png";
import webinar_sub_3 from "../../assets/images/webinar_sub_3.png";
import Card from "../Card4";
import ShowMoreButton from "../Button/ShowMoreButton";

export function WebinarPastContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
  ];

  const filteredWebinars =
    selectedCategory === "All"
      ? webinars
      : webinars.filter((w) => w.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-10 lg:py-20">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold mb-3">Get Access to Our Latest Webinar</h3>
      </div>

      {/* Scrollable container for top cards */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        <div className="relative min-w-[320px] md:min-w-[45%]">
          <span className="relative top-3 z-10 left-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-3 py-1 rounded-lg text-sm font-semibold rounded-full">
            Upcoming
          </span>
          <Card
            image={webinar_main_1}
            heading="How To Measure Your OKRs Successfully"
            subheading="Exploring approaches to performance reviews and feedback for a more engaged, future-ready workplace."
            width="100%"
            height="400px"
          />
        </div>

        <div className="relative h-auto min-w-[320px] md:min-w-[45%]">
          <span className="relative top-3 z-10 left-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
            Upcoming
          </span>
          <Card
            image={webinar_main_2}
            heading="Future of performance reviews and workplace feedback"
            subheading="Discover the next generation of performance reviews and feedback to drive growth and engagement."
            width="100%"
            height="400px"
          />
        </div>
      </div>

      {/* Bottom "All Webinars" section without horizontal scroll */}
      <h3 className="text-3xl font-bold mt-10 mb-4">All Webinars</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWebinars.map((webinar, index) => (
          <Card
            key={index}
            image={webinar.image}
            heading={webinar.heading}
            subheading={webinar.subheading}
            width="100%"
            height="400px"
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <ShowMoreButton />
      </div>
    </div>
  );
}
