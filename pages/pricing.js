import React, { useState } from 'react';
import Footer from '../Components/Footer';
import image1 from '.././assets/svg/pricing1.svg'
import image2 from '.././assets/svg/pricing2.svg'
import image3 from '.././assets/svg/pricing3.svg'
import Card3 from '../Components/Card3';
import BlogNav from '../Components/BlogNav';

export default function Pricing() {
  const [showPopup, setShowPopup] = useState(false);
  const data1 = {
    heading: 'Basic Plan',
    description: 'only OKRs, Rewards (basic)',
    name: '$2',
    buttonText: 'Try It For Free',
    description2: 'Support by email and chat - $1 per employee/month (billed Annually)',
    keypoints: ['Fun social recognition and achievements', 'Engaging chat tool and intranet integrations', 'Easy-to-use mobile apps', 'Actionable analytics', 'Effortless global rewards', 'Automated recognition for work anniversaries and birthdays', 'Legendary customer support'], image: image1
  }
  const data3 = {
    heading: 'Enterprise Plan',
    description: 'Pro + Integration',
    name: 'Contact us for Pricing',
    buttonText: 'REQUEST A DEMO',
    description2: 'Dedicated Account manager and priority service - $2.5 per employee/month (More than 1000 employees)',
    keypoints: ['Bonusly Custom includes every Core & Pro feature, plus options for:', '99% guaranteed uptime SLA', 'Dedicated support and consultation team', 'Launch strategy and rollout support', 'Manager resources and training', 'Custom HRIS integrations'],
    image: image3
  }
  const data2 = {
    heading: 'Pro Plan',
    description: 'Basic + Reviews + Rewards+ Recognition',
    name: '$3',
    buttonText: 'Try It For Free',
    top: true,
    description2: 'Dedicated  Account manager- $2 per employee/month (billed Annualy)',
    keypoints: ['Bonusly Pro includes every Core feature, plus:', 'Centralized company incentives and awards', 'Configurable admin permissions', 'Advanced reporting', 'Incentivized employee feedback gathering'], image: image2

  }
  return (
    <div className='bg-white bgImg7'>
      <div className='container'>
        <BlogNav showPopup={showPopup} setShowPopup={() => setShowPopup(false)} heading="Our Pricing" subheading="Customized packages available for enterprises who subscribe to the full suite." />

      </div>
      <div className='d-flex justify-content-center mt-lg-5 pt-lg-5 flex-wrap' style={{ gap: "5px" }}>
        <Card3 data={data1} setShowPopup={setShowPopup} />
        <Card3 data={data2} top={true} setShowPopup={setShowPopup} />
        <Card3 data={data3} setShowPopup={setShowPopup} />
      </div>
      <Footer />
    </div >
  )

}
