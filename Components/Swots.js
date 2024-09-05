import React from "react";
import swot1 from "../assets/svg/swot1.svg";
import Image from "next/image";

export default function Swots() {
  return (
    <div className="d-flex flex-wrap align-items-start justify-content-between bgcontent1 pt-5 pb-5">
      <div className=" col-lg-5 ml-5 pl-5 align-self-center ">
        <p className="reviewh">SWOT</p>
        <p className="reviewp">
          Our ESWOT and Team SWOT analysis helps managers and companies to focus
          on specific employees and teams. This AI based predictive analytics
          helps manager to identify to work on employee individual development
          plan and potential leavers and plan succession accordingly.
        </p>

      </div>

      <div className="col-lg-6 mt-3 mb-5 ">
        <Image src={swot1} alt="image1" className="" />
      </div>


    </div>
  );
}
