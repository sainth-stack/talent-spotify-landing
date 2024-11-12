import React, { useRef, useState } from "react";
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
import MobileFooter from "../Components/mobile-version/MobileFooter";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";

export default function Home() {


  const [showTrail, setShowTrail] = useState(false);
  const myRef = useRef(null);
  const homeRef = useRef(null);
  const okrRef = useRef(null);
  const howItWorksRef = useRef(null);
  const awardsRef = useRef(null);
  // const itWorksRef = useRef(null)
  const executeScroll = () => myRef.current?.scrollIntoView();
  const homerefScroll = () => homeRef.current?.scrollIntoView();
  const okrrefScroll = () => okrRef.current?.scrollIntoView();
  const howItWorksScroll = () => howItWorksRef.current?.scrollIntoView();
  const awardsScroll = () =>
    awardsRef.current?.scrollIntoView({ behavior: "smooth" });
  // const itworksref=()=> ititWorksRefWorks.current.scrollIntoView()

  const isMobile = useWindowSize();
  
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
    <div className="bg-[#ebe3d5] "
      style={{ height: "100vh", overflow: "auto", background: "#EAE3D6" }}

    >
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <div style={{ marginTop: "6rem" }} className=" text-center container">
        <h1 className="font-bold mb-4 ">Transparent Pricing According to your need</h1>
      </div>

     <div className="container mobile_cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-3">
  {mediaCards.map((mediaCard, index) => (
    <div
      key={index}
      className=" group border bg-white p-3 rounded-lg shadow-lg flex flex-col w-full min-h-80" // Slightly increased card height
    >
      <div className="overflow- rounded-t-lg h-40 flex items-center justify-center"> {/* Center the image */}
        <Image
          src={mediaCard.image}
          alt="Card image"
          layout="intrinsic"
          className="object-fit w-full h-full" // Ensures the entire image is shown without cropping
        />
      </div>
      <div className="flex-grow flex flex-col justify-between p-1">
        <div>
          <p className="font-bold text-md mb-1 text-gray-800 my-1">
            {mediaCard.heading}
          </p>
          <p className="text-gray-600 text-sm line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
            {mediaCard.subHeading}
          </p>
        </div>
        <div className="mt-1 flex justify-end">
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



      {isMobile ? (

        <MobileFooter
          homerefScroll={homerefScroll}
          okrrefScroll={okrrefScroll}
          howItWorksScroll={howItWorksScroll}
          awardsScroll={awardsScroll}
        />
      ) : (
        <Footer />
      )}
    </div>
  );
}
