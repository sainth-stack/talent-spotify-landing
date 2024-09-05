import React, { useState } from 'react';
import Footer from '../Components/Footer';
import image1 from '.././assets/images/pricing1.png'
import image2 from '.././assets/images/pricing2.png'
import image3 from '.././assets/images/pricing3.png'
import Card3 from '../Components/Card3';
import BlogNav from '../Components/BlogNav';
import TermsConditions from '../Components/TermsConditions';
import Swots from '../Components/Swots';


export default function Swot() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className='bg-white bgSwot'>
      <div className='container'>
        <BlogNav showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="swot " subheading="" />

      </div>
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 flex-wrap'>
        <Swots />
      </div>
      <Footer />
    </div >
  )

}
