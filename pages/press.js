import React, { useRef, useState } from "react";
import Image from "next/image";
import Footer from "../Components/Footer";
import Spotlight from ".././assets/images/spotlight.png";
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
import ShowMoreButton from "../Components/Button/ShowMoreButton";
import { TfiArrowCircleRight } from "react-icons/tfi";
export default function Home() {
  const [showTrail, setShowTrail] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const myRef = useRef(null);
  const homeRef = useRef(null);
  const okrRef = useRef(null);
  const howItWorksRef = useRef(null);
  const awardsRef = useRef(null);
  
  const executeScroll = () => myRef.current?.scrollIntoView();
  const homerefScroll = () => homeRef.current?.scrollIntoView();
  const okrrefScroll = () => okrRef.current?.scrollIntoView();
  const howItWorksScroll = () => howItWorksRef.current?.scrollIntoView();
  const awardsScroll = () =>
    awardsRef.current?.scrollIntoView({ behavior: "smooth" });

  const isMobile = useWindowSize();

  const mediaCards = [
    { image: award1, heading: "National HR Excellence Awards 24", subHeading: "Tata Consultancy Services recognized at the National HR Excellence Program", link: "https://www.linkedin.com/posts/talentspotify_employeeengagement-hrawards-innovation-activity-7236591265268572160-0gk5?utm_source=share&utm_medium=member_desktop" },
    { image: award2, heading: "STPI Disburses Seed Fund", subHeading: "Submissions pouring in for businesses and startups looking for seed funding", link: "https://startupstorymedia.com/stories-2023-07-talentspotify-startup-story/" },
    { image: award3, heading: "The Great Leaders Magazine", subHeading: "Featuring inspiring and influential HR leaders from across the world", link: "https://gcpit.org/the-great-leaders-aug-2024-v09/" },
    { image: award4, heading: "Getting AI Into HR", subHeading: "Innovative methods in artificial intelligence transforming HR practices", link: "https://www.viscan.in/getting-ai-into-hr/" },
    { image: award5, heading: "Fast-growing HR startups", subHeading: "Rapidly scaling HR tech startups leading innovation in the field", link: "https://www.peoplematters.in/article/entrepreneurship-start-ups/fast-growing-hr-and-worktech-startups-to-track-at-people-matters-techhr-singapore-2022-34886" },
    { image: award6, heading: "Startup Story Media", subHeading: "Innovative solutions by renowned startup leaders and HR tech entrepreneurs", link: "https://startupstorymedia.com/stories-2023-07-talentspotify-startup-story/" },
  ];


  return (
    <div className="" style={{ height: "100%",  background: "#EAE3D6" }}>
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <div className="text-center mt-5">
        <div className="position-relative w-75 mx-auto p-0 mt-5">
          <Image
            src={Spotlight}
            alt="Transparent Pricing"
            width={500}
            height={200}
            objectFit="contain" // Ensures the image is fully visible
            className="mt-4 w-100"
          />
        </div>
      </div>

      <div className="container mt-4">
        <div className="  row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 ">
          {mediaCards.map((mediaCard, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-lg">
                <div className="card-img-top" style={{ maxHeight: "200px", width: "100%" }}>
                  <Image
                    src={mediaCard.image}
                    alt="Card image"
                    layout="responsive"
                    objectFit="contain"
                    className="w-100 p-2 rounded-lg"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{mediaCard.heading}</h5>
                  <p className="card-text text-muted small">{mediaCard.subHeading}</p>
                  <div className="d-flex justify-content-end mt-auto align-items-center">
                    <a
                      href=""
                      className="text-primary text-decoration-none d-flex align-items-center"
                    >
                      View More <TfiArrowCircleRight className="ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center my-4">
        <ShowMoreButton />
      </div>

      <Footer />

     {/*  {isMobile ? (
        <div style={{ marginTop: "auto" }}> 
          <MobileFooter
            homerefScroll={homerefScroll}
            okrrefScroll={okrrefScroll}
            howItWorksScroll={howItWorksScroll}
            awardsScroll={awardsScroll}
          />
        </div>
      ) : (
        <Footer />
      )} */}
    </div>
  );
}
