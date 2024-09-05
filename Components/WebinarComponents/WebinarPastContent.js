import React from "react";
import ListPoints from "./ListPointsWebinarPast";
import Image from "next/image";
import yellowdot from "../../assets/svg/yellowdot.svg";
import image1 from '../../assets/svg/webinarImage1.svg'
import image2 from '../../assets/svg/webinarImage2.svg'
import image3 from '../../assets/svg/webinarImage3.svg'
import Card from "../Card4";
import Dropdown from "../Dropdown";
export function WebinarPastContent() {
  const options = [
    { key: "All", value: "All" },
    { key: "Performance", value: "Performance" },
    { key: "OKR", value: "OKR" },
    { key: "Rewards", value: "Rewards" },
    { key: "Recognition", value: "Recognition" },
    { key: "Employee Behaviour", value: "Employee Behaviour" }
  ]
  const heading1 = 'How To Measure Your OKRs Successfully'
  const subheading1 = 'Next new webinar coming in Autumn 2022. See previously recorded webinars below.'
  return (
    <div className="container-fluid pt-lg-5">
      <div className="text-center relative">
        <h3 className="heading1 font-weight-bold">
          <div className="yellowDot3">
            <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
          </div>
          Our Upcoming Webinars
        </h3>
        {/* <h5 className="subheading1">Subtitle will coming here</h5> */}
        <div className="position-center">
          <div style={{ width: 50, height: 3, background: "black", border: "1px solid black" }} className="text-center" />
        </div>
      </div>
      <div className="dropDown">
        <div className="mr-3 dropPosition">
          <Dropdown title={"Category"} options={options} />
        </div>
      </div>
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 flex-wrap'>
        <Card image={image1} heading={heading1} subheading={subheading1} />
        <Card image={image2} heading={heading1} subheading={subheading1} />
        <Card image={image3} heading={heading1} subheading={subheading1} />
      </div>
      <div className="text-center relative">
        <h3 className="heading1 font-weight-bold">
          <div className="yellowDot3">
            <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
          </div>
          Our Past Webinars
        </h3>
        {/*<h5 className="subheading1">Subtitle will coming here</h5>*/}
        <div className="position-center">
          <div style={{ width: 50, height: 3, background: "black", border: "1px solid black" }} className="text-center" />
        </div>
      </div>
      <div className="dropDown">
        <div className="mr-3 dropPosition">
          <Dropdown title={"Category"} options={options} />
        </div>
      </div>
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 flex-wrap'>
        <Card image={image1} heading={heading1} subheading={subheading1} />
        <Card image={image2} heading={heading1} subheading={subheading1} />
        <Card image={image3} heading={heading1} subheading={subheading1} />
        <Card image={image1} heading={heading1} subheading={subheading1} />
        <Card image={image2} heading={heading1} subheading={subheading1} />
        <Card image={image3} heading={heading1} subheading={subheading1} />
      </div>
    </div>
  );
}
