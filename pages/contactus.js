import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '../Components/Footer';
import BlogNav from '../Components/BlogNav';
import contactusCard from "../assets/svg/contactusCard.svg";
import yellowdot from "../assets/svg/yellowdot.svg";
import Button from '../Components/Button';
import Contact from '../Components/Contact';
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='bg-white bgContactus'>
      <div className='container'>
        <BlogNav showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="contact us" subheading="Find contact information and answers to your questions here." />
      </div>
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 flex-wrap'>
        <Contact />
      </div>

      <Footer />
    </div >
  )
}
