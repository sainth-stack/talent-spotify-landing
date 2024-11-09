import React, { useState } from 'react';
import Navigation from '../Components/WebinarComponents/WebinarDetails';
import Footer from '../Components/Footer';
import RewardsFinal from '../Components/RewardsContent';
export default function WebinarDetails() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='bg-[#ebe3d5]'>
      <Navigation showPopup={showPopup} setShowPopup={() => setShowPopup(false)} type={"rewards"} />
      <RewardsFinal />
      <Footer />
    </div >
  );
}
