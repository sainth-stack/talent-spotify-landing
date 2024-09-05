import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Card from '../Components/CardBlogDetails';
import image1 from '.././assets/images/blog1.png'
import image2 from '.././assets/images/blog2.png'
import image3 from '.././assets/images/blog3.png'
import BlogNav from '../Components/BlogNav';
import Dropdown from '../Components/Dropdown';
export default function Home() {
  const options = [
    { key: "All", value: "All"},
    { key: "Performance", value: "Performance" },
    { key: "OKR", value: "OKR"},
    { key: "Rewards", value: "Rewards"},
    { key: "Recognition", value: "Recognition"},
    { key: "Employee Behaviour", value: "Employee Behaviour" }
  ]
  const [showPopup, setShowPopup] = useState(false);
  const heading1 = 'Performance Management Can Make Your Company Recession-Proof'
  const heading2 = '8 Tips for Strategic Performance Management'
  const heading3 = 'How to Measure Employee Performance: The Top Performance...'
  const subheading1 = 'Read on to know how effective performance management can give your company the edge and help you weather the storm.'
  const subheading2 = 'Performance management strategies can be complex and challenging to implement. Here are some great tips to make strategic performance management easy.'
  const subheading3 = 'Wondering how to measure employee performance? Check out our guide to the top performance metrics, and find out which ones are best for your business.'
  return (
    <div className='bg-white bgBlogDetails'>
      <div className='container'>
        <BlogNav showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="Blog" subheading="TalentSpotify – Employee Review, Reward and Recognition" />
      </div>
      <div className="dropDown pt-lg-3">
        <div className="mr-5 dropPosition">
          <Dropdown title={"Category"} options={options} />
        </div>
      </div>
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 flex-wrap'>
        <Card image={image1} heading={heading1} subheading={subheading1} />
        <Card image={image2} heading={heading2} subheading={subheading2} />
        <Card image={image3} heading={heading3} subheading={subheading3} />
      </div>
      <Footer />
    </div >
  )
}
