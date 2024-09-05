import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '../Components/Footer';
import BlogNav from '../Components/BlogNav';
import OkrGreenCard from '../Components/OkrGreenCard';
import okrMob from "../assets/svg/okrMob.svg";
import okrflow from "../assets/svg/okrflow.svg";

import yellowdot from "../assets/svg/yellowdot.svg";
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='bg-white bgOkr'>
      <div className='container'>
        <BlogNav showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="OKRS" subheading="Where do we want to go? – O- Objective How will we know we’re actually getting there? – KR- Key Results" />
      </div>
      <div className='container-fluid pt-lg-5'>
        <div className="text-center relative">
          <h3 className="headingR font-weight-bold">
            What Makes OKR Powerful for startups?
          </h3>
        </div>
        <div className='d-flex justify-content-center mt-lg-5'>
          {/* <div className='d-block'>
            <div className='bgBiscuit mx-auto'>
              <p className='m-0 bisText'>Execution is everything</p>
            </div>
            <div className='d-flex justify-content-center middlePart align-items-center'>
              <div className='bgBiscuit rLeft posL'>
                <p className='m-0 bisText'>Execution is everything</p>
              </div>
              <div className='leftPart'>
                <OkrGreenCard head={"Aspirational"} body={"Ambitious and stretched"} />
                <OkrGreenCard head={"Collaborative"} body={"Top-down and bottom-up"} />
                <OkrGreenCard head={"FOCUS"} body={"Weekly measures"} />
                <OkrGreenCard head={"Commitment"} body={"Across team and top down"} />
              </div>
              <div className='bgBiscuit rLeft posM'>
                <p className='m-0 bisText'>Execution is everything</p>
              </div>
              <div className='rightPart'>
                <OkrGreenCard head={"Not linked to salary"} body={"Learn, Converse & Recognize"} />
                <OkrGreenCard head={"Transparent"} body={"Everyone can view across org OKR"} />
                <OkrGreenCard head={"Transparent"} body={"60/90 day cycle"} />
                <OkrGreenCard head={"Culture"} body={"All hands on deck"} />
              </div>
              <div className='bgBiscuit rLeft posR'>
                <p className='m-0 bisText'>Execution is everything</p>
              </div>
            </div>
            <div className='bgBiscuit mx-auto'>
              <p className='m-0 bisText'>Execution is everything</p>
            </div>
          </div> */}
          <Image src={okrflow} alt="okrflow" className="okrMob" />

        </div>
        <div className=" d-flex flex-wrap align-items-start  mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
          <div className="okrMob col-md-5  m-0 p-0">
            <Image src={okrMob} alt="okrMob" className="okrMob" />
          </div>
          <div className='left-side-okr '>
            <div>
              <h3 className="heading1 font-weight-bold">
                <div className="okrYellow">
                  <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
                </div>
                How do you design<br /> effective Objectives?
              </h3>
              <div className='okr-body'>
                <p className='pt-5'><span style={{ fontWeight: "bold", color: "black" }} >Is it meaningful?</span> Is the Objective a top priority? Does<br /> it articulate a clear direction?</p>
                <p className='pt-3'><span style={{ fontWeight: "bold", color: "black" }} >Is it audacious?</span> Is the outcome taken for granted or<br /> does it take what you do every day to the next level?<br /> Does it represent a significant change from where we<br /> are today?</p>
                <p className='pt-3'><span style={{ fontWeight: "bold", color: "black" }} >Is it inspiring?</span> Is the Objective easy to remember?<br /> Does it empower your teams?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}
