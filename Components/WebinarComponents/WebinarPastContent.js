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
    <div className="container py-4">
      <div className="text-center mb-4">
        <h3 className="fs-4 fw-bold mb-3">Get Access to Our Latest Webinar</h3>
      </div>

      {/* Scrollable container for the upcoming webinars */}
      
      <div className="row  row-cols-1 row-cols-sm-2  row-cols-md-2 g-4 pb-4 ">
        <div className="col position-relative">
          {/* "Upcoming" badge */}
      <div
  className="position-absolute start-0 fw-bold"
  style={{
    background: "linear-gradient(to right, #4f93f7, #9b65e9)", // Gradient background
    zIndex: 22,
    top: "-1%", // Moved badge higher
    transform: "translateY(-50%)",
    width: "fit-content", // Dynamic width for responsiveness
       padding: "0.1rem 1rem", // Compact padding
 // Compact padding
    borderRadius: "12px", // Fully rounded corners
    color: "white", // Text color for contrast
    fontSize: "0.9rem", // Smaller font size for responsiveness
  }}
>
  Upcoming
</div>


          {/* Card for the first webinar */}
          <Card
            image={webinar_main_1}
            heading="How To Measure Your OKRs Successfully"
            subheading="Exploring approaches to performance reviews and feedback for a more engaged, future-ready workplace."
            width="100%"
                height="400px"

           
          />
        </div>

        <div className="col position-relative">
          {/* "Upcoming" badge */}
        <div
  className="position-absolute start-0 fw-bold"
  style={{
    background: "linear-gradient(to right, #4f93f7, #9b65e9)", // Gradient background
    zIndex: 22,
    top: "-1%", // Moved badge higher
    transform: "translateY(-50%)",
    width: "fit-content", // Dynamic width for responsiveness
    padding: "0.1rem 1rem", // Compact padding
    borderRadius: "12px", // Fully rounded corners
    color: "white", // Text color for contrast
    fontSize: "0.9rem", // Smaller font size for responsiveness
  }}
>
  Latest
</div>


          {/* Card for the second webinar */}
          <Card
            image={webinar_main_2}
            heading="Future of performance reviews and workplace feedback"
            subheading="Discover the next generation of performance reviews and feedback to drive growth and engagement."
            width="100%"
                height="400px"

           
          />
        </div>
      </div>

      {/* "All Webinars" Section */}
      <h3 className="fs-5  fw-bold mt-4 mb-3">All Webinars</h3>

      {/* Grid for the list of webinars */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-1  g-4">
        {filteredWebinars.map((webinar, index) => (
          <div className="col " key={index}>
            <div className="position-relative ">
              {/* "Upcoming" badge */}
              

              {/* Card for each webinar */}
              <Card
                image={webinar.image}
                heading={webinar.heading}
                subheading={webinar.subheading}
                width="100%"
                height="400px"
                
              />
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-4 text-center">
        <ShowMoreButton />
      </div>
    </div>
  );
}