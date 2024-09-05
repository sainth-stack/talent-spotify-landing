import React, { useState } from 'react';
import Navigation from '../Components/About/AboutUs';
import Footer from '../Components/Footer';
import image1 from '../assets/svg/image1.svg'
import image2 from '../assets/svg/image2.svg'
import image3 from '../assets/svg/image3.svg'
import image4 from '../assets/svg/image4.svg'
import image5 from '../assets/svg/image5.svg'
import circlepart from "../assets/images/curve.png";
import { Modal } from 'react-bootstrap';
import wrong from "../assets/svg/wrong.svg"
import yellowdot from "../assets/svg/yellowdot.svg";
import { list1, list11, list2, list21, list31, list32, list41, list42, list51, list52 } from '../utilities'
import { AboutOurValues } from '../Components/About/AboutOurValues';
import "../i18n"
import Image from 'next/image';
export default function WhyItWorks() {
  const [showPopup, setShowPopup] = useState(false);
  const [leftPopup, setLeftPopup] = useState(false);
  const [rightPopup, setRightPopup] = useState(false);

  return (
    <div className=''>
      <div className='bgImg31'>
        <Navigation showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="" subheading="" />
      </div>
      <div className='container-fluid p-0 m-0 pb-4 mb-4'>
        <div className='d-flex justify-content-center mt-5'>
          <h3 className="heading1 bottom-heading font-weight-bold text-center">
            <div className="yellowDot">
              <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
            </div>
            <span>Why It Works</span>
          </h3>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <p className='bottom-para'>
            In an ideal world, all managers would be prefect at hiring, monitoring projects, evaluating performances accurately and giving objective feedback to help employees develop. But we don&apos;t live in an ideal world, and everybody has limited cognitive capacity and are prone to biases and errors. Organizations that rely only on their managers to execute the business and develop employees mostly fall behind. This is where TalentSpotify comes with an innovative and evidence-backed solution for organizations that care about its people and its growth.
          </p>
        </div>
        <div className='puzzle'>
          <div className='first-piece' onMouseEnter={() => setLeftPopup(true)} onMouseLeave={() => setLeftPopup(false)}>
            <div className='circle-part'>
              <Image src={circlepart} alt='circle' width={"120px"} height={"160px"} />
            </div>
            <p className='first-piece-text'>Behavioral Science Insights</p>
          </div>
          <div className='second-piece' onMouseEnter={() => setRightPopup(true)} onMouseLeave={() => setRightPopup(false)}>
            <p className='second-piece-text'>Artificial Intelligence</p>
          </div>
        </div>
        {leftPopup && (
          <div className='left-popup' onMouseEnter={() => setLeftPopup(true)}>
            <p className='text-center popup-heading'>Behavioral Science Insights</p>
            <ul className='text-center left-popup-list'>
              <li>Aligning tasks, rewards, and recognition with intrinsic and extrinsic motivators.</li>
              <li>Optimisation of performance and productivity through evidence-based approaches like goal priming framing feedback and behavior change techniques.</li>
              <li>Improved project execution through understanding of decision-moking, communication patterns and team dynamics</li>
              <li>Intuitive workflow execution designs that removes the extra time-consuming blocks and promotes optimized outcomes</li>
            </ul>
          </div>
        )}
        {rightPopup && (
          <div className='right-popup' onMouseEnter={() => setRightPopup(true)}>
            <p className='text-center popup-heading'>Artificial Intelligence</p>
            <ul className='text-center left-popup-list'>
              <li>Personalized motivation systems by analyzing individual preferences and providing customized incentives and performance reviews.</li>
              <li>Data-driven performance improvement by analyzing large datasets, identifying patterns, and offering targeted interventions through the Talent Spotify platform.</li>
              <li>Improved project execution by automating tasks, optimizing resource allocation, and providing real-time insights.</li>
              <li>Streamlined project management, risk identification, and enhanced business execution through predictive analytics, natural language processing, and automation.</li>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div >
  );
}
