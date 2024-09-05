import React from "react";
import contactusCard from "../assets/svg/contactusCard.svg";
import Image from "next/image";
import Button from "./Button";
import BrowseFilesNormal from "./BrowseFilesNormal";
import BlogNav from '../Components/BlogNav';
import Pie from '../Components/Pie';
import yellowdot from "../assets/svg/yellowdot.svg";
import mobRecog from "../assets/svg/mobRecog.svg";
import RegCard from './RegCard';
import regCard1 from "../assets/svg/regCard1.svg";
import regCard2 from "../assets/svg/regCard2.svg";
import regCard3 from "../assets/svg/regCard3.svg";
import pie1 from "../assets/svg/Pie.svg";
import pie2 from "../assets/svg/Pie2.svg";
import pie3 from "../assets/svg/Pie3.svg";
export default function Recognitions() {
  return (
    <div >
      <div className="text-center relative">
        <h3 className="headingR font-weight-bold">
          Did you know that companies with highly engaged employees experience...
        </h3>
      </div>
      <div className='d-flex justify-content-center mt-lg-4 flex-wrap'>
        <div className="yellowRecog">
          <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
        </div>
        <Pie image={pie1} />
        <Pie image={pie2} />
        <Pie image={pie3} />
      </div>
      <div className="text-center relative">
        <h3 className="heading1 font-weight-bold">
          Create culture people won’t want to leave
        </h3>
        <h5 className="subheading1">Encourage peer-to-peer recognition to foster trust and collaboration among teams.</h5>
      </div>
      <div className=" d-flex flex-wrap align-items-start justify-content-between  mt-lg-5 mb-lg-3 pb-lg-5 pt-lg-5">
        <div className='ml-lg-5 pl-lg-5'>
          <div className='m-1 p-1 pl-5 ml-5'>
            <h3 className="heading1 font-weight-bold">
              <div className="yellowDotRec pl-3">
                <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
              </div>
              Gamified and Real-Time<br /> Leaderboards
            </h3>
          </div>
          <div className='leader-card m-1 p-1  pl-5 ml-5'>
            <p className='p-0 m-0'>Celebrate your employees’ efforts with a virtual,<br /> gamified, and real-time leaderboard &amp; let your<br /> employees thrive in a work environment where<br /> employees value each other more, all day, every<br /> day.</p>
            <div className="yellowRecog1 pl-3">
              <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
            </div>
          </div>
        </div>
        <div className="d-block mobRecog col-md-5 p-0 mt75">
          <Image src={mobRecog} alt="mobRecog" className="mobRecog" />
        </div>
      </div>
      <div className='d-flex justify-content-center mb-lg-5 flex-wrap'>
        <RegCard img={regCard1} cardHead={"Peer to Peer"} cardBody={"Promote engagement and reinforce processional growth with appreciation. Empower your team with peer-to-peer recognition to praise each other."} />
        <RegCard img={regCard2} cardHead={"Manager to Report"} cardBody={"Save your people leader’s time and effect running recognition and rewards programs to keep your employees engaged. Track activity from the administrative dashboard."} />
        <RegCard img={regCard3} cardHead={"Incentives & Rewards"} cardBody={"Empower your team to go the extra mile. We provide 600+ rewards with quick implementation so you can easily start giving recognition and tracking performance."} />
        <div className="cardYellowRecog">
          <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
        </div>
      </div>
    </div>
  )
}
