import React, { useState } from "react";
import Image from "next/image";
import Footer from "../Components/Footer";
import BlogNav from "../Components/BlogNav";
import award1 from "../assets/images/new-dashboard/award1.png";
import award2 from "../assets/images/new-dashboard/award2.png";
import award3 from "../assets/images/new-dashboard/award3.png";
import award4 from "../assets/images/new-dashboard/award4.png";
import award5 from "../assets/images/new-dashboard/award5.png";
import award6 from "../assets/images/new-dashboard/award6.png";
import spotlight from "../assets/images/spotlight.png";

export default function Home() {
  const mediaCards = [
    {
      image: award1,
      heading: "National HR Excellence Awards 24",
      subHeading:
        "Tata Consultancy Services recognized at the National HR Excellence Program",
      link: "https://www.linkedin.com/posts/talentspotify_employeeengagement-hrawards-innovation-activity-7236591265268572160-0gk5?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: award2,
      heading: "STPI Disburses Seed Fund",
      subHeading:
        "Submissions pouring in for businesses and startups looking for seed funding",
      link: "https://startupstorymedia.com/stories-2023-07-talentspotify-startup-story/",
    },
    {
      image: award3,
      heading: "The Great Leaders Magazine",
      subHeading:
        "Featuring inspiring and influential HR leaders from across the world",
      link: "https://gcpit.org/the-great-leaders-aug-2024-v09/",
    },
    {
      image: award4,
      heading: "Getting AI Into HR",
      subHeading:
        "Innovative methods in artificial intelligence transforming HR practices",
      link: "https://www.viscan.in/getting-ai-into-hr/",
    },
    {
      image: award5,
      heading: "Fast-growing HR startups",
      subHeading:
        "Rapidly scaling HR tech startups leading innovation in the field",
      link: "https://www.peoplematters.in/article/entrepreneurship-start-ups/fast-growing-hr-and-worktech-startups-to-track-at-people-matters-techhr-singapore-2022-34886",
    },
    {
      image: award6,
      heading: "Startup Story Media",
      subHeading:
        "Innovative solutions by renowned startup leaders and HR tech entrepreneurs",
      link: "https://startupstorymedia.com/stories-2023-07-talentspotify-startup-story/",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  console.log(mediaCards.map((item) => item.image)); // Debugging: Check if mediaCards data is available

  return (
    <div className="bg-[#ebe3d5] min-h-screen">
      <div className="container mx-auto">
        <BlogNav
          showPopup={showPopup}
          setShowPopup={() => setShowPopup(false)}
          heading="Press"
        />
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
        {mediaCards.map((mediaCard, index) => (
          <div
            key={index}
            className="media-card border rounded-lg shadow-md flex flex-col w-full" // Added w-full here
          >
            <div className="media-card__image-container">
              <Image
                src={mediaCard.image}
                alt="Card image"
                layout="intrinsic"
                className="media-card__image"
              />
            </div>
            <div className="media-card__content flex-grow">
              <p className="media-card__heading font-bold text-lg mb-2 flex-wrap">
                {mediaCard.heading}
              </p>
              <p className="media-card__subheading text-gray-600 flex-wrap">
                {mediaCard.subHeading}
              </p>
              <div className="media-card__link">
                <a
                  href={mediaCard.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View more &#62;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
