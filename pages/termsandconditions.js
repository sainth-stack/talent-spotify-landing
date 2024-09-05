import React, { useState } from 'react';
import Footer from '../Components/Footer';
import image1 from '.././assets/images/pricing1.png'
import image2 from '.././assets/images/pricing2.png'
import image3 from '.././assets/images/pricing3.png'
import Card3 from '../Components/Card3';
import BlogNav from '../Components/BlogNav';
import TermsConditions from '../Components/TermsConditions';


export default function Termsandconditions() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className='bg-white bgtermnav'>
      <div className='container'>
        <BlogNav showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="Terms and Conditions" subheading="" />

      </div>
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 mb-lg-5 pb-lg-5'>
        <TermsConditions />
      </div>
      <Footer />
    </div >
  )

}
