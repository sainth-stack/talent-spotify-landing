import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Card from '../Components/CardBlogDetails';
import image1 from '.././assets/images/thumb1.jpg'
import image2 from '.././assets/images/thumb2.jpg'
import image3 from '.././assets/images/thumb3.jpg'
import BlogNav from '../Components/BlogNav';
import Dropdown from '../Components/Dropdown';
export default function Home() {
  const options = [
    { key: "Performance & Growth", value: "Performance & Growth" },
    { key: "Performance", value: "Performance" },
    { key: "Growth", value: "Growth" }
  ]
  const [showPopup, setShowPopup] = useState(false);
  const heading1 = 'GETTING AI INTO HR'
  const heading2 = 'Fast-growing HR and WorkTech startups that made a mark at People Matters TechHR India 2022'
  const heading3 = 'STPI Disburses Seed Fund to Tech Start-ups for Scaling up their Ventures'
  const subheading1 = `Employee retention is probably one of the biggest tasks and challenges a company has to deal with. Moreover if you have top performing employees one needs to be extra cautious in making sure they are happy and content with the organization. Despite HR’s best efforts many times you see companies lose out on good/talented employees because they have not been adequately recognized, awarded or heard.`
  const subheading2 = 'This year at People Matters TechHR India 2022, we had a diverse line-up of the best HR and WorkTech startups such as Apli.ai, TalentSpotify, TRST Score, Intervue.io, Veremark, SenseLoaf Technologies, Swageazy and OpenOffers that focus on talent attraction and retention.'
  const subheading3 = 'During Digital India Week 2022, Software Technology Parks of India (STPI) enabled funding to promising start-ups through the Next Generation Incubation Scheme (NGIS) and Centres of Entrepreneurship (CoEs) programs in order to enable the digital start-ups to scale operations and commercialize their products. In ongoing Digital India Week, 28 promising start-ups were provided seed fund/financial help of Rs. 342.5 Lakh.'
  return (
    <div className='bg-white bgBlogDetails'>
      <div className='container'>
        <BlogNav showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="Press" subheading="Get latest updates here..!" />
      </div>
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 flex-wrap'>
        <Card image={image1} heading={heading1} subheading={subheading1} url="https://www.viscan.in/getting-ai-into-hr/" />
        <Card image={image2} heading={heading2} subheading={subheading2} url="https://www.peoplematters.in/article/entrepreneurship-start-ups/fast-growing-hr-and-worktech-startups-to-track-at-people-matters-techhr-singapore-2022-34886" />
        <Card image={image3} heading={heading3} subheading={subheading3} url="https://www.sangritoday.com/spotlight/stpi-disburses-seed-fund-to-tech-start-ups-for-scaling-up-their-ventures" />
      </div>
      <Footer />
    </div >
  )
}
