import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Image from 'next/image';
import BlogNav from '../Components/BlogNav';
import Pie from '../Components/Pie';
import yellowdot from "../assets/svg/yellowdot.svg";
import mobRecog from "../assets/svg/mobRecog.svg";
import RegCard from '../Components/RegCard';
import regCard1 from "../assets/svg/regCard1.svg";
import regCard2 from "../assets/svg/regCard2.svg";
import regCard3 from "../assets/svg/regCard3.svg";
import pie1 from "../assets/svg/Pie.svg";
import pie2 from "../assets/svg/Pie2.svg";
import pie3 from "../assets/svg/Pie3.svg";
import Recognitions from '../Components/Recognitions';

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='bg-white bgRecognition'>
      <div className='container'>
        <BlogNav showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="Recognition" subheading="“open acknowledgment and expressed appreciation for employees’ contributions to their organization”" />
      </div >
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 flex-wrap'>
        <Recognitions />
      </div>


      <Footer />
    </div >
  )
}
