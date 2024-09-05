import React from "react";
import ListPoints from "./ListPointsAbout";
import Image from "next/image";
import about1 from "../../assets/svg/about1.svg";
import about2 from "../../assets/svg/about2.svg";
import about3 from "../../assets/svg/about3.svg";
import about4 from "../../assets/svg/about4.svg";
import yellowdot from "../../assets/svg/yellowdot.svg";
import FinalAboutus from "../../Components/About/FinalAboutus";
export function AboutOurValues() {
  return (
    <div className="container-fluid mt-5 pt-lg-5">
      <div className="d-flex flex-wrap justify-content-center">
        <FinalAboutus />
        <h1 className="text-center pb-4 mt-5 font-weight-bold">Our Values</h1>
        <div className="text-center yellowdot2">
          <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
        </div>
        <List2 image1={about1} heading="Empathy" list1={["Empathy helps us focus on listening. It forces us to reflect on our actions and words and it brings us closer together. We understand customer needs and their pains."]} list2={[]} />
        <List1 image1={about2} heading="Winning Together" list1={["We are committed to creating unique, pioneering Talent management concepts which set trends and drive achievement of collective stakeholder goals."]} list2={[]} />
        <List2 image1={about3} heading="Trustworthy" list1={["We will make sure that our customers build confidence in the integrity, reliability, and fairness of TalentSpotify."]} list2={[]} />
        <List1 image1={about4} heading="Customer First" list1={["we always seeking ways to deliver a positive customer experience consistently and proactively by designing and delivering with the customer in mind."]} list2={[]} />
      </div>
    </div>
  );
}

function List1({ image1, list1, list2, heading }) {
  return (
    <div className="d-flex flex-wrap align-items-start justify-content-center">

      <div className="imagePic col-md-5">
        <Image src={image1} alt="image1" className="imagePic" />
      </div>
      <ListPoints
        heading={heading}
        subheading=""
        list1={list1}
        list2={list2}
      />
    </div>
  );
}

function List2({ image1, list1, list2, heading }) {
  return (
    <div className="d-flex flex-wrap align-items-start justify-content-center">
      <div className="d-block d-lg-none imagePic col-md-5">
        <Image src={image1} alt="image1" className="imagePic" />
      </div>
      <ListPoints
        heading={heading}
        subheading=""
        list1={list1}
        list2={list2}
      />
      <div className="d-none d-lg-block imagePic col-md-5">
        <Image src={image1} alt="image1" className="imagePic" />
      </div>
    </div>
  );
}
