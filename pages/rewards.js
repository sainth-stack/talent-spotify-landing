import React, { useState } from 'react';
import Navigation from '../Components/WebinarComponents/WebinarDetails';
import Footer from '../Components/Footer';
import RewardsFinal from '../Components/RewardsContent';
export default function WebinarDetails() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='bg-white bgReward'>
      <Navigation showPopup={showPopup} setShowPopup={() => setShowPopup(false)} mainheading="REWARDS" heading="Motivate employees with rewards of their choice" subheading="Delight employees with automated rewards" type={"rewards"} />
      <RewardsFinal />
      <Footer />
    </div >
  );
}
